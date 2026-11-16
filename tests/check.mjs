// 데이터 검사: node tests/check.mjs  (문제가 있으면 exit 1)
// 단어장·장 데이터가 앱에서 깨지지 않는지, 형식 규칙을 지켰는지 확인한다.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const errors = [];
const err = m => errors.push(m);

// index.html 이 불러오는 스크립트 순서대로 실행
const html = read('index.html');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
let WORDS, LESSONS;
try {
  const code = scripts.map(read).join('\n;\n') + '\n;return { WORDS, LESSONS };';
  ({ WORDS, LESSONS } = new Function(code)());
} catch (e) { console.error('데이터 파일 실행 오류:', e.message); process.exit(1); }

// 서비스 워커가 모든 스크립트를 캐시하는지
const sw = read('sw.js');
for (const s of scripts) if (!sw.includes(`'${s}'`)) err(`sw.js 캐시 목록에 ${s} 가 없음`);

// 단어
const seen = new Set();
for (const w of WORDS) {
  if (seen.has(w.id.toLowerCase())) err(`단어 중복: ${w.id}`);
  seen.add(w.id.toLowerCase());
  for (const k of ['de', 'ko', 'def', 'ex', 'cat', 'catKo']) if (!w[k]) err(`단어 ${w.de}: ${k} 비어 있음`);
  if (!['', 'der', 'die', 'das'].includes(w.art)) err(`단어 ${w.de}: 관사 이상 "${w.art}"`);
}
const raw = read('words.js').split('const WORDS_RAW = `')[1].split('`;')[0];
raw.split('\n').forEach((line, i) => {
  const t = line.trim();
  if (t && !t.startsWith('#') && t.split('|').length !== 6) err(`words.js 단어 줄 ${i + 1}: 칸이 6개가 아님 → ${t.slice(0, 50)}`);
});

// 장
const ids = new Set();
for (const l of LESSONS) {
  const name = l.id || '(id 없음)';
  if (ids.has(l.id)) err(`장 id 중복: ${l.id}`);
  ids.add(l.id);
  for (const k of ['id', 'icon', 'de', 'ko']) if (!l[k]) err(`장 ${name}: ${k} 없음`);
  if (!/^[a-z0-9-]+$/.test(l.id || '')) err(`장 ${name}: id는 영어 소문자·숫자·- 만`);
  if (!Array.isArray(l.sections) || l.sections.length < 2) err(`장 ${name}: sections 2개 이상 필요`);
  for (const [i, s] of (l.sections || []).entries()) {
    if (!s.h || !s.de || !s.ko) err(`장 ${name} 섹션 ${i + 1}: h/de/ko 필요`);
    if (/\$\{/.test(s.de + s.ko)) err(`장 ${name} 섹션 ${i + 1}: \${ 가 들어 있음`);
  }
  if (!Array.isArray(l.terms) || l.terms.length < 4) err(`장 ${name}: terms 4개 이상 필요`);
  for (const t of l.terms || []) if (!Array.isArray(t) || t.length !== 2 || !t[0] || !t[1]) err(`장 ${name}: term 형식 [독일어, 한국어]`);
  if (!Array.isArray(l.quiz) || l.quiz.length < 3) err(`장 ${name}: quiz 3문제 이상 필요`);
  for (const [i, q] of (l.quiz || []).entries()) {
    if (!q.q || !Array.isArray(q.a) || q.a.length < 3 || !q.ex) err(`장 ${name} 퀴즈 ${i + 1}: q/a(3개 이상)/ex 필요`);
    if (!(Number.isInteger(q.c) && q.c >= 0 && q.c < (q.a || []).length)) err(`장 ${name} 퀴즈 ${i + 1}: 정답 번호 c 가 범위 밖`);
    if (new Set(q.a || []).size !== (q.a || []).length) err(`장 ${name} 퀴즈 ${i + 1}: 보기 중복`);
  }
}
// 자동 추가 장은 g 와 added 필수
const autoIds = [];
{
  const before = new Function(scripts.filter(s => s !== 'lessons-auto.js').map(read).join('\n;\n') + '\n;return LESSONS;')().map(l => l.id);
  for (const l of LESSONS) if (!before.includes(l.id)) autoIds.push(l.id);
}
for (const l of LESSONS.filter(l => autoIds.includes(l.id))) {
  if (!['lab', 'path', 'de'].includes(l.g)) err(`자동 장 ${l.id}: g 는 lab/path/de 중 하나`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(l.added || '')) err(`자동 장 ${l.id}: added 는 YYYY-MM-DD`);
}

if (errors.length) { console.error(`❌ 문제 ${errors.length}개\n- ` + errors.join('\n- ')); process.exit(1); }
console.log(`✅ 통과: 단어 ${WORDS.length}개, 장 ${LESSONS.length}개 (자동 추가 ${autoIds.length}개)`);
