// 오프라인 지원: 네트워크 우선, 실패하면 캐시.
// 앱 파일은 매번 서버에 "바뀌었나요?"를 물어봄(cache: 'no-cache'). GitHub Pages의 10분 저장 표시 때문에
// 홈 화면 앱이 껐다 켜도 예전 화면을 보여 주는 일을 막음.
const CACHE = 'patho-deutsch-v9';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'index.html', 'words.js', 'lessons.js', 'lessons2.js', 'lessons-auto.js', 'bodymap.js', 'fachsprache.js', 'manifest.webmanifest', 'icon.svg'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('patho-deutsch-v') && k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(
    fetch(u.href, { cache: 'no-cache' }).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
