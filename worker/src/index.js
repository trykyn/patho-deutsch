// Patho Deutsch 동기화 서버 (Cloudflare Worker, 무료 요금제)
//
// 앱의 공부 기록(배운 단어, 복습 일정, 학습 기록, 내 단어, 설정)을 통째로 보관해서
// 휴대폰을 바꾸거나 다른 기기에서도 이어서 공부할 수 있게 한다.
//
//   GET  /s/{코드}            → { t, data } (없으면 { t: 0, data: null })
//   POST /s/{코드}  { t, data } → 보낸 t 가 저장된 것보다 새로우면 저장. 응답 { ok, t }
//
// 코드는 앱이 처음 열릴 때 만든 32자리 무작위 문자열. 코드를 아는 사람만 읽고 쓸 수 있음.
// 저장소 (KV): STORE — data:{코드} → { t, data }

const ALLOWED_ORIGINS = ["https://trykyn.github.io", "http://localhost:8769"];
const KEY_RE = /^[A-Za-z0-9]{24,64}$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    const [, kind, key] = url.pathname.split("/");
    if (kind !== "s" || !KEY_RE.test(key || "")) return json({ error: "not_found" }, 404);
    const sk = `data:${key}`;

    if (request.method === "GET") return json((await env.STORE.get(sk, "json")) || { t: 0, data: null });

    if (request.method === "POST") {
      const text = await request.text();
      if (text.length > 3_000_000) return json({ error: "too_big" }, 413);
      let body;
      try { body = JSON.parse(text); } catch { return json({ error: "bad_json" }, 400); }
      const t = Number(body.t);
      if (!Number.isFinite(t) || !body.data || typeof body.data !== "object") return json({ error: "bad_body" }, 400);
      const cur = await env.STORE.get(sk, "json");
      // 더 오래된 기록이 새 기록을 덮지 않게
      if (cur && cur.t > t && !body.force) return json({ ok: false, t: cur.t, newer: true });
      await env.STORE.put(sk, JSON.stringify({ t, data: body.data }));
      return json({ ok: true, t });
    }
    return json({ error: "method" }, 405);
  },
};
