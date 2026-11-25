// 매주 자동으로 추가되는 단어 (새 장과 같은 주에 오늘의 단어로 먼저 나옴). 형식은 words.js 와 같음.
// 한 줄: 관사|단어|복수형|한국어|독일어 설명|예문   ·   '# Kategorie | 한국어' = 분야 제목
const WORDS_AUTO_RAW = `
# Schilddrüse und Leber | 갑상선과 간
die|Struma|Strumen|갑상선종|Vergrößerte Schilddrüse, oft mit vielen Knoten.|Die Struma wiegt fast 200 Gramm und hat viele Knoten.
die|Thyreoidektomie|-n|갑상선 전절제술|Operative Entfernung der ganzen Schilddrüse.|Nach der Thyreoidektomie kommt das Präparat mit einem Faden markiert.
das|Kolloid|-e|콜로이드|Eiweißreiche Masse im Inneren der Schilddrüsenfollikel.|Das Kolloid ist im Gefrierschnitt gerissen.
die|Kapselinvasion|-en|피막 침윤|Tumorzellen durchbrechen die Kapsel; entscheidend für das follikuläre Karzinom.|Um eine Kapselinvasion zu finden, wird die ganze Kapsel eingebettet.
der|Milchglaskern|-e|간유리 핵|Heller, wie leer wirkender Zellkern, typisch für das papilläre Karzinom.|Die Milchglaskerne sprechen für ein papilläres Karzinom.
die|Kernfurche|-n|핵 홈|Längsrille im Zellkern, typisch für das papilläre Karzinom.|In vielen Tumorzellen sieht man Kernfurchen.
das|Psammomkörperchen|-|사종체|Kleine, rund geschichtete Verkalkung, z. B. beim papillären Karzinom.|Im Tumor liegen einzelne Psammomkörperchen.
das|Calcitonin||칼시토닌|Hormon der C-Zellen; Marker für das medulläre Karzinom.|Die Tumorzellen sind Calcitonin-positiv.
die|Feinnadelpunktion|-en|세침 흡인 검사|Entnahme von Zellen mit einer dünnen Nadel, z. B. aus einem Schilddrüsenknoten.|Die Feinnadelpunktion wird nach dem Bethesda-System eingeteilt.
das|Portalfeld|-er|문맥역|Bindegewebszone in der Leber mit Pfortaderast, Leberarterie und Gallengang.|Die Biopsie enthält zwölf Portalfelder.
die|Zentralvene|-n|중심정맥|Vene in der Mitte des Leberläppchens.|Um die Zentralvene liegen Nekrosen.
der|Hepatozyt|-en|간세포|Leberzelle.|Die Hepatozyten sind deutlich verfettet.
die|Steatose|-n|지방증 (지방간)|Einlagerung von Fett in die Leberzellen.|Es zeigt sich eine mittelgradige Steatose.
die|Steatohepatitis|Steatohepatitiden|지방간염|Fettleber mit Entzündung und geschwollenen Leberzellen.|Die ballonierten Hepatozyten sprechen für eine Steatohepatitis.
die|Zirrhose|-n|간경변|Endstadium der Fibrose mit Knoten und Umbau der Leberarchitektur.|In der Versilberung sieht man eine komplette Zirrhose.
die|Cholestase|-n|담즙 정체|Gallestau in der Leber.|In den Hepatozyten sieht man eine Cholestase.
die|Grenzzonenhepatitis|Grenzzonenhepatitiden|경계부 간염|Entzündung, die vom Portalfeld auf das Leberläppchen übergreift.|Es besteht eine deutliche Grenzzonenhepatitis.
die|Rhodaninfärbung|-en|로다닌 염색 (구리)|Färbung, die Kupfer nachweist, z. B. bei Morbus Wilson.|Bei Verdacht auf Morbus Wilson machen wir eine Rhodaninfärbung.
`;
WORDS.push(...parseWords(WORDS_AUTO_RAW, { auto: true }));
