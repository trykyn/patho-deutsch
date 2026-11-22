// 매주 자동으로 추가되는 단어 (새 장과 같은 주에 오늘의 단어로 먼저 나옴). 형식은 words.js 와 같음.
// 한 줄: 관사|단어|복수형|한국어|독일어 설명|예문   ·   '# Kategorie | 한국어' = 분야 제목
const WORDS_AUTO_RAW = `
`;
WORDS.push(...parseWords(WORDS_AUTO_RAW, { auto: true }));
