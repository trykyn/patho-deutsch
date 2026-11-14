// 병리 공부 추가 장 (2026-11-14): 장기별 병리 6개 + 검사실 업무 4개. 표기법은 lessons.js와 같음.
LESSONS.push(
{
  id: 'gi', icon: '🌀', de: 'Magen-Darm-Pathologie', ko: '위장관 병리',
  sections: [
    { h: 'Magenbiopsien und Gastritis',
      de: `Magenbiopsien werden meist aus **Antrum** und **Korpus** getrennt eingeschickt. So kann man die Gastritis richtig einordnen:

• **Typ A – autoimmun**: vor allem im Korpus, mit **Atrophie** der Drüsen
• **Typ B – bakteriell**: durch **Helicobacter pylori**, die häufigste Form, vor allem im Antrum
• **Typ C – chemisch**: z. B. durch Schmerzmittel (NSAR) oder Gallenreflux

Helicobacter sieht man in der HE oft schon, sicherer in der **Giemsa-Färbung** oder mit **Immunhistochemie**. Bei langer Entzündung entsteht eine **intestinale Metaplasie** (Becherzellen, Alcianblau-positiv) – ein Risikofaktor für das Magenkarzinom.`,
      ko: `위 생검은 보통 전정부(Antrum)와 체부(Korpus)를 따로 보냅니다. 그래야 위염을 제대로 분류할 수 있습니다.

• A형 – 자가면역: 주로 체부, 샘의 위축 동반
• B형 – 세균성: 헬리코박터 파일로리, 가장 흔함, 주로 전정부
• C형 – 화학성: 예) 진통제(NSAID)나 담즙 역류

헬리코박터는 H&E에서도 자주 보이지만 김자 염색이나 면역염색이 더 확실합니다. 염증이 오래가면 장상피화생(배상세포, 알시안 블루 양성)이 생기는데, 이는 위암의 위험 인자입니다.` },
    { h: 'Polypen im Dickdarm',
      de: `Die meisten Darmkrebse entstehen aus **Adenomen** (Adenom-Karzinom-Sequenz). Deshalb werden Polypen bei der Darmspiegelung entfernt.

• **Hyperplastischer Polyp**: meist harmlos, sägezahnartige Krypten
• **Sessile serratierte Läsion**: sägezahnartig, kann über den serratierten Weg zu Krebs werden
• **Tubuläres, tubulovillöses, villöses Adenom**: mit **niedriggradiger** oder **hochgradiger Dysplasie**

Im Labor: Kleine Polypen werden **komplett eingebettet**. Bei größeren Polypen markiert man den **Abtragungsrand** (Stiel oder Basis) mit Tusche und schneidet so, dass der Stiel längs getroffen ist.`,
      ko: `대장암 대부분은 선종에서 생깁니다(선종-암종 순서). 그래서 대장내시경 때 용종을 떼어 냅니다.

• 과형성 용종: 대개 무해, 톱니 모양 음와
• 무경성 톱니 병변(SSL): 톱니 모양, 톱니 경로로 암이 될 수 있음
• 관상·관융모·융모 선종: 저등급 또는 고등급 이형성 동반

검사실에서는: 작은 용종은 전부 포매합니다. 큰 용종은 절제연(줄기 또는 기저부)을 잉크로 표시하고, 줄기가 세로로 잡히도록 자릅니다.` },
    { h: 'Das Kolonkarzinom am Resektat',
      de: `Beim Zuschnitt eines Darmresektats dokumentiert man Tumorgröße, Abstand zu den Rändern und – beim Rektum – die Qualität des **Mesorektums**. Man sucht **mindestens 12 Lymphknoten**.

Die Tiefe bestimmt das pT:
• **pT1**: Submukosa · **pT2**: Muscularis propria
• **pT3**: durch die Wand ins umgebende Fettgewebe
• **pT4**: Serosa durchbrochen oder Nachbarorgan befallen

Zusätzlich: **MMR-Immunhistochemie** (MLH1, PMS2, MSH2, MSH6) für Lynch-Syndrom und Immuntherapie, und molekular **RAS** und **BRAF** für die Therapie.`,
      ko: `장 절제 표본을 그로싱할 때 종양 크기, 절제연까지 거리, 그리고 직장이면 직장간막(Mesorektum)의 상태를 기록합니다. 림프절은 최소 12개를 찾습니다.

침윤 깊이가 pT를 정합니다.
• pT1: 점막하층 · pT2: 고유근층
• pT3: 벽을 뚫고 주변 지방조직까지
• pT4: 장막을 뚫었거나 인접 장기 침범

추가로: 린치 증후군과 면역치료를 위한 MMR 면역염색(MLH1, PMS2, MSH2, MSH6), 치료를 위한 분자검사 RAS와 BRAF.` },
  ],
  terms: [['der Gallenreflux', '담즙 역류'], ['die Becherzelle', '배상세포'], ['die Darmspiegelung', '대장내시경'], ['sägezahnartig', '톱니 모양의'], ['der Abtragungsrand', '(용종) 절제연'], ['der Stiel', '줄기 (용종 대)']],
  quiz: [
    { q: 'Welche Gastritis ist am häufigsten?', a: ['Typ A (autoimmun)', 'Typ B (Helicobacter)', 'Typ C (chemisch)', 'Alle gleich häufig'], c: 1, ex: '헬리코박터에 의한 B형이 가장 흔해요.' },
    { q: 'Was markiert man bei einem großen Polypen mit Tusche?', a: ['Die Oberfläche', 'Den Abtragungsrand', 'Nichts', 'Die Mitte'], c: 1, ex: '줄기·기저부 절제연을 잉크로 표시해요.' },
    { q: 'Wie viele Lymphknoten sucht man beim Kolonkarzinom mindestens?', a: ['3', '6', '12', '30'], c: 2, ex: '대장암은 최소 12개.' },
    { q: 'Wofür macht man MLH1, PMS2, MSH2 und MSH6?', a: ['Helicobacter-Nachweis', 'MMR-Status (Lynch, Immuntherapie)', 'Fibrose', 'Grading'], c: 1, ex: '불일치 복구(MMR) 단백질 면역염색이에요.' },
  ],
},
{
  id: 'mamma', icon: '🎀', de: 'Mammapathologie', ko: '유방 병리',
  sections: [
    { h: 'Material und Fixierung',
      de: `Typische Materialien sind **Stanzbiopsien** (ultraschall- oder mammographiegesteuert), **Segmentresektate** bei brusterhaltender Therapie, **Mastektomien** und **Sentinel-Lymphknoten** (Wächterlymphknoten).

Bei Stanzen wegen **Mikrokalk** wird oft geprüft, ob der Kalk wirklich in den Stanzen ist (Präparatradiographie). Segmentresektate sind vom Operateur mit **Fäden** orientiert; die Ränder werden mit verschiedenen **Tuschefarben** markiert.

Besonders wichtig: Die **Fixierzeit** muss für die Rezeptor-Bestimmung zwischen **6 und 72 Stunden** liegen, die **kalte Ischämiezeit** unter 1 Stunde. Beide Zeiten werden dokumentiert.`,
      ko: `흔한 검체는 침생검(초음파 또는 유방촬영 유도), 유방보존술의 부분 절제 표본, 유방 전절제술, 감시 림프절(Sentinel)입니다.

미세석회 때문에 한 침생검은 석회가 실제로 조직에 들어 있는지 확인하는 경우가 많습니다(표본 방사선 촬영). 부분 절제 표본은 외과의가 실로 방향을 표시하고, 절제연은 서로 다른 색 잉크로 칠합니다.

특히 중요한 점: 수용체 검사를 위해 고정 시간은 6~72시간, 냉허혈 시간은 1시간 미만이어야 합니다. 두 시간 모두 기록합니다.` },
    { h: 'Tumortypen und Grading',
      de: `• **Invasives Karzinom NST** (no special type, früher „duktal“): der häufigste Typ
• **Invasiv-lobuläres Karzinom**: Zellen wachsen einzeln in Reihen („Gänsemarsch“); typisch ist der **Verlust von E-Cadherin**
• **DCIS** (duktales Carcinoma in situ): Vorstufe in den Milchgängen, noch nicht invasiv

Das **Grading nach Elston und Ellis** bewertet drei Merkmale mit je 1–3 Punkten: **Tubulusbildung**, **Kernpleomorphie** und **Mitosen**. Die Summe ergibt G1 (3–5), G2 (6–7) oder G3 (8–9).`,
      ko: `• 침윤성 암종 NST (특수형 아님, 예전 '관상'): 가장 흔한 유형
• 침윤성 소엽암: 세포가 한 줄로 늘어서 자람('거위 행렬'); E-카드헤린 소실이 특징
• DCIS (관상피내암): 유관 안의 전구 병변, 아직 침윤 안 함

엘스턴-엘리스(Elston-Ellis) 등급은 세 가지를 각각 1~3점으로 평가합니다: 관 형성, 핵 다형성, 유사분열. 합계가 G1(3–5), G2(6–7), G3(8–9)가 됩니다.` },
    { h: 'Rezeptoren: ER, PR, HER2, Ki-67',
      de: `Diese Marker entscheiden über die Therapie und werden bei jedem invasiven Karzinom bestimmt:

• **ER / PR** (Östrogen- und Progesteronrezeptor): **nukleäre** Färbung; man gibt den **Prozentsatz** positiver Tumorzellkerne an. Ab **1 %** gilt der Tumor als positiv → Hormontherapie möglich.
• **HER2**: **membranöse** Färbung, Score **0, 1+, 2+, 3+**. 3+ ist positiv, **2+** ist unklar → zusätzlich **In-situ-Hybridisierung (ISH)**. Tumoren mit 1+ oder 2+ ohne Amplifikation nennt man **HER2-low** – auch dafür gibt es heute eine Therapie.
• **Ki-67**: Proliferation in Prozent

Weil die Ergebnisse so wichtig sind, laufen immer **Kontrollen** mit, und das Labor nimmt an **Ringversuchen** teil.`,
      ko: `이 표지자들이 치료를 결정하며, 모든 침윤성 암에서 검사합니다.

• ER / PR (에스트로겐·프로게스테론 수용체): 핵 염색; 양성 종양세포 핵의 비율(%)을 적습니다. 1% 이상이면 양성 → 호르몬 치료 가능.
• HER2: 세포막 염색, 점수 0, 1+, 2+, 3+. 3+는 양성, 2+는 애매 → 추가로 제자리 부합법(ISH). 증폭 없는 1+나 2+는 HER2-low라고 하며, 지금은 여기에도 치료제가 있습니다.
• Ki-67: 증식률 %

결과가 아주 중요하므로 항상 대조가 함께 돌고, 검사실은 외부 정도관리에 참여합니다.` },
  ],
  terms: [['brusterhaltend', '유방 보존의'], ['der Wächterlymphknoten', '감시 림프절'], ['der Mikrokalk', '미세석회'], ['der Milchgang', '유관'], ['die Hormontherapie', '호르몬 치료'], ['die Amplifikation', '증폭']],
  quiz: [
    { q: 'Wie lange muss Mammagewebe für die Rezeptor-Bestimmung fixiert werden?', a: ['1–2 Stunden', '6–72 Stunden', 'mindestens 7 Tage', 'egal'], c: 1, ex: 'ER/PR/HER2를 위해 6~72시간.' },
    { q: 'Welcher Marker fehlt typischerweise beim invasiv-lobulären Karzinom?', a: ['Ki-67', 'E-Cadherin', 'Zytokeratin', 'ER'], c: 1, ex: '소엽암은 E-카드헤린 소실.' },
    { q: 'HER2 ist 2+. Was passiert danach?', a: ['Gilt sicher als positiv', 'Zusätzlich ISH', 'Färbung wegwerfen', 'Nichts'], c: 1, ex: '2+는 애매해서 ISH로 증폭 여부를 확인해요.' },
    { q: 'Ab wie viel Prozent positiver Kerne gilt ER als positiv?', a: ['1 %', '10 %', '50 %', '100 %'], c: 0, ex: '1% 이상이면 양성.' },
  ],
},
{
  id: 'niere', icon: '🫘', de: 'Nierenbiopsie', ko: '신장 생검',
  sections: [
    { h: 'Das Material richtig aufteilen',
      de: `Eine Nierenbiopsie besteht meist aus 2–3 dünnen Zylindern. Schon bei der Ankunft prüft man unter der **Lupe** oder dem Stereomikroskop, ob **Glomeruli** (kleine rote Punkte) enthalten sind. Das Material wird für drei Methoden aufgeteilt:

• **Lichtmikroskopie**: in **Formalin**
• **Immunfluoreszenz (IF)**: nativ/gefroren oder in einer Transportlösung (z. B. Michel-Lösung) – **nicht in Formalin**
• **Elektronenmikroskopie (EM)**: kleine Stückchen in **Glutaraldehyd**

Für die Lichtmikroskopie schneidet man besonders dünn (**1–2 µm**) und macht viele **Stufenschnitte**.`,
      ko: `신장 생검은 보통 가는 조직 기둥 2~3개입니다. 도착하자마자 확대경이나 실체현미경으로 사구체(작은 빨간 점)가 들어 있는지 확인합니다. 검체를 세 가지 방법용으로 나눕니다.

• 광학현미경: 포르말린에
• 면역형광(IF): 신선/동결 상태 또는 운반액(예: Michel 용액)에 – 포르말린은 안 됨
• 전자현미경(EM): 작은 조각을 글루타르알데히드에

광학현미경용은 특히 얇게(1~2 µm) 자르고 단계 절편을 많이 만듭니다.` },
    { h: 'Färbungen und Immunfluoreszenz',
      de: `Typisches Färbepanel der Niere:
• **HE**: Übersicht
• **PAS**: Basalmembranen und Mesangium
• **Silberfärbung** (z. B. Jones/PAMS): Basalmembran schwarz, zeigt „Spikes“
• **Trichrom**: Fibrose, Ablagerungen
• **Kongorot**: Amyloid

In der **Immunfluoreszenz** werden **IgG, IgA, IgM, C3, C1q** sowie **Kappa** und **Lambda** gefärbt. Das Muster (linear, granulär, mesangial) hilft bei der Diagnose.

Wichtige Erkrankungen: **IgA-Nephropathie** (häufigste Glomerulonephritis, mesangiales IgA), **membranöse Glomerulonephritis** (Spikes, PLA2R), **Lupusnephritis**, **diabetische Nephropathie** (noduläre Glomerulosklerose).`,
      ko: `신장의 대표적 염색 패널:
• H&E: 개요
• PAS: 기저막과 메산지움
• 은 염색(예: Jones/PAMS): 기저막이 검정, '스파이크'가 보임
• 트리크롬: 섬유화, 침착물
• 콩고 레드: 아밀로이드

면역형광에서는 IgG, IgA, IgM, C3, C1q와 카파, 람다를 염색합니다. 패턴(선형, 과립형, 메산지움형)이 진단에 도움이 됩니다.

중요한 질환: IgA 신병증(가장 흔한 사구체신염, 메산지움 IgA), 막성 사구체신염(스파이크, PLA2R), 루푸스 신염, 당뇨병성 신병증(결절성 사구체경화).` },
    { h: 'Nierentransplantat: Banff',
      de: `Biopsien von Nierentransplantaten werden nach der **Banff-Klassifikation** beurteilt. Man vergibt Punkte (0–3) für einzelne Läsionen, z. B.:

• **i** – interstitielle Entzündung, **t** – Tubulitis (Lymphozyten im Tubulusepithel), **v** – Arteriitis der Intima → **T-Zell-vermittelte Abstoßung (TCMR)**
• **g** – Glomerulitis, **ptc** – peritubuläre Kapillaritis, **C4d** in den peritubulären Kapillaren → **antikörpervermittelte Abstoßung (AMR)**

Wichtige Differenzialdiagnose: die **BK-Virus-Nephropathie**; man weist sie mit der **SV40-Immunhistochemie** nach.`,
      ko: `신장 이식편 생검은 반프(Banff) 분류로 판독합니다. 각 병변에 점수(0–3)를 매깁니다. 예를 들어:

• i – 간질 염증, t – 세뇨관염(세뇨관 상피 안의 림프구), v – 내막 동맥염 → T세포 매개 거부반응(TCMR)
• g – 사구체염, ptc – 세뇨관 주위 모세혈관염, 세뇨관 주위 모세혈관의 C4d → 항체매개 거부반응(AMR)

중요한 감별 진단: BK 바이러스 신병증; SV40 면역염색으로 확인합니다.` },
  ],
  terms: [['das Glomerulum', '사구체 (복수 Glomeruli)'], ['der Zylinder', '(생검) 조직 기둥'], ['das Glutaraldehyd', '글루타르알데히드'], ['die Ablagerung', '침착(물)'], ['die Tubulitis', '세뇨관염'], ['granulär / linear', '과립형 / 선형']],
  quiz: [
    { q: 'Worin kommt Material für die Elektronenmikroskopie?', a: ['Formalin', 'Glutaraldehyd', 'Xylol', 'Wasser'], c: 1, ex: '전자현미경용은 글루타르알데히드.' },
    { q: 'Warum darf IF-Material nicht in Formalin?', a: ['Es wird zu hart', 'Die Immunfluoreszenz funktioniert dann nicht gut', 'Es färbt sich rot', 'Das ist erlaubt'], c: 1, ex: '면역형광은 신선/동결 조직이나 Michel 용액이 필요해요.' },
    { q: 'Wie dünn schneidet man Nierenbiopsien?', a: ['1–2 µm', '5–10 µm', '20 µm', '1 mm'], c: 0, ex: '사구체를 잘 보려고 아주 얇게.' },
    { q: 'Mit welcher IHC weist man eine BK-Virus-Nephropathie nach?', a: ['CD20', 'SV40', 'TTF-1', 'HER2'], c: 1, ex: 'SV40 면역염색.' },
  ],
},
{
  id: 'gyn', icon: '🌸', de: 'Gynäkopathologie', ko: '부인과 병리',
  sections: [
    { h: 'Zervix und Konisation',
      de: `Fast alle Zervixkarzinome entstehen durch eine Infektion mit **humanen Papillomaviren (HPV)**. Die Vorstufen heißen **CIN 1–3** bzw. **LSIL** und **HSIL**. Die Immunhistochemie für **p16** ist bei HPV-bedingten Läsionen **block-positiv** (kräftig und durchgehend).

Bei einer **Konisation** wird ein kegelförmiges Gewebestück aus der Zervix entfernt. Der Operateur markiert meist die **12-Uhr-Position** mit einem Faden. Im Labor wird der Konus nach Uhrzeit aufgeteilt und **komplett eingebettet**, damit man sagen kann, ob die Ränder frei sind.`,
      ko: `자궁경부암은 거의 모두 인유두종바이러스(HPV) 감염으로 생깁니다. 전구 병변은 CIN 1~3 또는 LSIL과 HSIL이라고 합니다. HPV 관련 병변에서 p16 면역염색은 '블록 양성'(진하고 끊김 없이)입니다.

원추절제술(Konisation)에서는 자궁경부에서 원뿔 모양 조직을 떼어 냅니다. 외과의는 보통 12시 위치를 실로 표시합니다. 검사실에서는 원추를 시계 방향대로 나누어 전부 포매해서, 절제연이 깨끗한지 말할 수 있게 합니다.` },
    { h: 'Endometrium',
      de: `Material kommt als **Abrasio** (Ausschabung), Pipelle-Biopsie oder als ganzer **Uterus**. Im normalen Zyklus unterscheidet man **Proliferationsphase** und **Sekretionsphase**.

• **Hyperplasie ohne Atypie** und **atypische Hyperplasie** (Vorstufe)
• **Endometrioides Karzinom**: häufigster Typ, oft östrogenabhängig
• **Seröses Karzinom**: aggressiv, **p53** abnormal

Heute wird das Endometriumkarzinom zusätzlich **molekular** eingeteilt: **POLE**-mutiert, **MMR-defizient**, **p53-abnormal** und „ohne spezifisches Profil“. Dafür braucht man MMR- und p53-Immunhistochemie.`,
      ko: `검체는 소파술(긁어낸 조직), 피펠 생검, 또는 자궁 전체로 옵니다. 정상 주기에서는 증식기와 분비기를 구분합니다.

• 비정형 없는 과형성과 비정형 과형성(전구 병변)
• 자궁내막양 암종: 가장 흔한 유형, 에스트로겐 의존적인 경우 많음
• 장액성 암종: 공격적, p53 비정상

요즘은 자궁내막암을 분자적으로도 분류합니다: POLE 변이, MMR 결핍, p53 비정상, '특이 프로필 없음'. 이를 위해 MMR과 p53 면역염색이 필요합니다.` },
    { h: 'Ovar und Eileiter',
      de: `• **Zysten**: Follikelzyste, Endometriosezyste („Schokoladenzyste“), **Dermoidzyste** (reifes Teratom mit Haaren, Talg, manchmal Zähnen)
• **Epitheliale Tumoren**: serös, muzinös, endometrioid – jeweils benigne, **Borderline** oder maligne
• Das **high-grade seröse Karzinom** ist das häufigste maligne Ovarialkarzinom; es entsteht oft im **Eileiter**.

Deshalb werden Eileiter bei Risikopatientinnen (z. B. **BRCA**-Mutation) nach dem **SEE-FIM-Protokoll** komplett eingebettet: Die Fimbrien werden längs geschnitten, der Rest quer.`,
      ko: `• 낭종: 여포 낭종, 자궁내막증 낭종('초콜릿 낭종'), 유피 낭종(털, 피지, 때로 치아가 있는 성숙 기형종)
• 상피성 종양: 장액성, 점액성, 자궁내막양 – 각각 양성, 경계성(Borderline), 악성
• 고등급 장액성 암종은 가장 흔한 악성 난소암이며, 난관에서 시작하는 경우가 많습니다.

그래서 고위험 환자(예: BRCA 변이)의 난관은 SEE-FIM 프로토콜로 전부 포매합니다: 난관 끝 술(Fimbrien)은 세로로, 나머지는 가로로 자릅니다.` },
  ],
  terms: [['kegelförmig', '원뿔 모양의'], ['die Ausschabung', '소파술 (긁어냄)'], ['östrogenabhängig', '에스트로겐 의존적'], ['der Talg', '피지'], ['die Fimbrie', '난관채 (술)'], ['die Risikopatientin', '고위험 환자']],
  quiz: [
    { q: 'Wie sieht p16 bei HPV-bedingten Läsionen aus?', a: ['negativ', 'block-positiv', 'nur im Stroma', 'fleckig schwach'], c: 1, ex: '진하고 끊김 없는 블록 양성.' },
    { q: 'Wie wird ein Konus im Labor bearbeitet?', a: ['Nur eine Scheibe einbetten', 'Nach Uhrzeit aufteilen und komplett einbetten', 'Wegwerfen', 'Nur Schnellschnitt'], c: 1, ex: '시계 방향대로 나눠 전부 포매해요.' },
    { q: 'Wo entsteht das high-grade seröse Ovarialkarzinom oft?', a: ['im Eileiter', 'in der Zervix', 'in der Niere', 'im Endometrium'], c: 0, ex: '난관(난관채)에서 시작하는 경우가 많아요.' },
    { q: 'Was ist eine Dermoidzyste?', a: ['Eine Blutung', 'Ein reifes Teratom', 'Ein Karzinom', 'Eine Entzündung'], c: 1, ex: '털·피지가 있는 성숙 기형종.' },
  ],
},
{
  id: 'haut', icon: '🧴', de: 'Hautpathologie', ko: '피부 병리',
  sections: [
    { h: 'Aufbau und Material',
      de: `Die Haut besteht aus **Epidermis** (verhornendes Plattenepithel mit Keratinozyten und Melanozyten), **Dermis** (Bindegewebe mit Gefäßen, Haarfollikeln, Drüsen) und **Subkutis** (Fettgewebe).

Materialarten:
• **Stanzbiopsie** (Punch, z. B. 4 mm)
• **Shave-Biopsie**: flach abgetragen
• **Exzisat**: meist spindelförmig; ein **Faden** zeigt die Orientierung

Beim Zuschnitt werden die Ränder mit **Tusche** markiert. Kleine Exzisate werden oft quer in Scheiben geschnitten („brotlaibartig“), die Spitzen getrennt eingebettet. Haut immer **senkrecht** einbetten, damit alle Schichten im Schnitt sind.`,
      ko: `피부는 표피(각질형성세포와 멜라닌세포가 있는 각화 편평상피), 진피(혈관, 모낭, 샘이 있는 결합조직), 피하조직(지방조직)으로 되어 있습니다.

검체 종류:
• 펀치 생검 (예: 4 mm)
• 쉐이브 생검: 평평하게 깎아 냄
• 절제 조직: 대개 방추형(타원형); 실로 방향 표시

그로싱 때 절제연을 잉크로 표시합니다. 작은 절제 조직은 빵 썰듯이 가로로 자르고, 양 끝은 따로 포매하는 경우가 많습니다. 피부는 모든 층이 절편에 나오도록 항상 세로로 세워 포매합니다.` },
    { h: 'Hauttumoren',
      de: `• **Basalzellkarzinom** (Basaliom): häufigster Hautkrebs, wächst lokal zerstörend, metastasiert aber fast nie
• **Plattenepithelkarzinom** der Haut: Vorstufe ist die **aktinische Keratose** (durch UV-Licht)
• **Nävus** (Muttermal): gutartige Ansammlung von Melanozyten
• **Melanom**: bösartiger Tumor der Melanozyten

Beim Melanom ist die **Tumordicke nach Breslow** (in Millimetern, von der Oberfläche bis zur tiefsten Tumorzelle) der wichtigste Wert für das pT; dazu kommt die **Ulzeration**. Hilfreiche Marker: **SOX10, Melan-A, HMB45, PRAME**.`,
      ko: `• 기저세포암: 가장 흔한 피부암, 국소적으로 파괴하며 자라지만 전이는 거의 안 함
• 피부 편평상피세포암: 전구 병변은 광선 각화증(자외선 때문)
• 모반(점): 멜라닌세포가 모인 양성 병변
• 흑색종: 멜라닌세포의 악성 종양

흑색종에서는 브레슬로우 두께(표면에서 가장 깊은 종양세포까지 mm)가 pT를 정하는 가장 중요한 값이며, 궤양 여부가 더해집니다. 도움이 되는 표지자: SOX10, Melan-A, HMB45, PRAME.` },
    { h: 'Entzündliche Hauterkrankungen',
      de: `Bei Entzündungen der Haut (Dermatosen) beschreibt die Pathologie ein **Reaktionsmuster**, z. B. psoriasiform (Psoriasis), spongiotisch (Ekzem) oder interface (z. B. Lupus).

Bei **blasenbildenden Erkrankungen** wie **Pemphigus** oder **bullösem Pemphigoid** braucht man zusätzlich die **direkte Immunfluoreszenz**. Dafür kommt eine zweite Biopsie **nativ oder in Michel-Lösung** – **nicht in Formalin**! Kommt diese Biopsie versehentlich in Formalin, muss man sofort mit der Klinik sprechen.`,
      ko: `피부 염증(피부염)에서 병리는 반응 패턴을 기술합니다. 예: 건선형(건선), 해면형(습진), 경계부(예: 루푸스).

천포창이나 수포성 유천포창 같은 물집 질환에서는 직접 면역형광이 추가로 필요합니다. 이를 위한 두 번째 생검은 신선 상태나 Michel 용액에 와야 합니다 – 포르말린은 안 됩니다! 이 생검이 실수로 포르말린에 들어갔다면 즉시 임상과에 연락해야 합니다.` },
  ],
  terms: [['verhornend', '각화하는'], ['spindelförmig', '방추형의'], ['brotlaibartig', '빵 썰듯이'], ['das Muttermal', '점 (모반)'], ['die Blase', '물집 / 방광'], ['versehentlich', '실수로']],
  quiz: [
    { q: 'Welcher Wert ist beim Melanom für das pT am wichtigsten?', a: ['Tumordicke nach Breslow', 'Farbe', 'Zahl der Haare', 'Ki-67'], c: 0, ex: '브레슬로우 두께(mm).' },
    { q: 'Welcher Hautkrebs ist am häufigsten und metastasiert fast nie?', a: ['Melanom', 'Basalzellkarzinom', 'Sarkom', 'Lymphom'], c: 1, ex: '기저세포암.' },
    { q: 'Worin muss eine Biopsie für die direkte Immunfluoreszenz kommen?', a: ['Formalin', 'Nativ oder Michel-Lösung', 'Xylol', 'Alkohol'], c: 1, ex: '포르말린이면 면역형광이 안 돼요.' },
    { q: 'Wie bettet man Haut ein?', a: ['flach', 'senkrecht', 'zerkleinert', 'gar nicht'], c: 1, ex: '모든 층이 보이도록 세로로.' },
  ],
},
{
  id: 'knochenmark', icon: '🩸', de: 'Knochenmarkbiopsie', ko: '골수 생검',
  sections: [
    { h: 'Material und Entkalkung',
      de: `Die Knochenmarkbiopsie wird meist aus dem **Beckenkamm** entnommen (Stanzzylinder, z. B. Jamshidi-Nadel). Oft gibt es zusätzlich ein **Aspirat** für Ausstriche und Durchflusszytometrie.

Weil der Zylinder Knochen enthält, muss er **entkalkt** werden:
• **EDTA**: schonend, dauert länger (Tage), **DNA und Antigene bleiben gut erhalten**
• **Säure** (z. B. Ameisensäure, Salzsäure): schnell, schädigt aber **Immunhistochemie und DNA**

Wenn molekulare Untersuchungen geplant sind, ist EDTA deshalb besser. Zu lange Säure-Entkalkung macht Kerne blass.`,
      ko: `골수 생검은 보통 장골능(Beckenkamm)에서 채취합니다(침생검 기둥, 예: Jamshidi 바늘). 도말과 유세포 분석을 위한 흡인물이 추가로 오는 경우가 많습니다.

조직 기둥에 뼈가 있으므로 탈회해야 합니다.
• EDTA: 순하고 오래 걸림(며칠), DNA와 항원이 잘 보존됨
• 산(예: 개미산, 염산): 빠르지만 면역조직화학과 DNA를 손상시킴

그래서 분자 검사가 예정되어 있으면 EDTA가 낫습니다. 산 탈회를 너무 오래 하면 핵이 흐려집니다.` },
    { h: 'Was wird beurteilt?',
      de: `• **Zellularität**: Anteil der blutbildenden Zellen; grob gilt: ungefähr **100 minus Lebensalter** in Prozent
• Die drei Zellreihen: **Erythropoese** (rote Blutzellen), **Granulopoese** (weiße Blutzellen), **Megakaryopoese** (Blutplättchen)
• **Fasern**: Versilberung, Fibrosegrad **MF-0 bis MF-3**
• **Eisen**: Berliner-Blau-Reaktion

Wichtige Erkrankungen: **akute Leukämien** (viele Blasten, **CD34**, **CD117**), **myeloproliferative Neoplasien** (z. B. CML), **myelodysplastische Syndrome**, **Plasmazellmyelom** (**CD138**, Kappa/Lambda-Leichtkettenrestriktion), Infiltrate von **Lymphomen** und **Metastasen**.`,
      ko: `• 세포충실도: 조혈세포의 비율; 대략 '100 빼기 나이' %
• 세 가지 세포 계열: 적혈구 생성, 과립구 생성(백혈구), 거핵구 생성(혈소판)
• 섬유: 은 염색, 섬유화 등급 MF-0 ~ MF-3
• 철: 프러시안 블루

중요한 질환: 급성 백혈병(모세포 많음, CD34, CD117), 골수증식성 종양(예: CML), 골수이형성 증후군, 형질세포 골수종(CD138, 카파/람다 경쇄 제한), 림프종 침윤과 전이암.` },
  ],
  terms: [['der Beckenkamm', '장골능 (골반뼈 위쪽)'], ['das Aspirat', '흡인물'], ['schonend', '순한, 조직을 덜 상하게'], ['die Ameisensäure', '개미산'], ['der Blast', '모세포'], ['die Blutplättchen', '혈소판']],
  quiz: [
    { q: 'Welche Entkalkung ist besser für spätere DNA-Untersuchungen?', a: ['Salzsäure', 'EDTA', 'Ameisensäure', 'gar keine'], c: 1, ex: 'EDTA는 DNA를 잘 보존해요.' },
    { q: 'Wie schätzt man die normale Zellularität grob?', a: ['immer 50 %', '100 minus Lebensalter', 'Lebensalter mal 2', '10 %'], c: 1, ex: '예: 60세 → 약 40%.' },
    { q: 'Welcher Marker ist typisch für Plasmazellen?', a: ['CD138', 'CD3', 'TTF-1', 'Desmin'], c: 0, ex: 'CD138 = 형질세포.' },
    { q: 'Was zeigt die Versilberung im Knochenmark?', a: ['Eisen', 'Fasern (Fibrose)', 'Pilze', 'Fett'], c: 1, ex: '레티큘린 섬유 → 섬유화 등급.' },
  ],
},
{
  id: 'zytologie', icon: '🧫', de: 'Zytologie', ko: '세포병리',
  sections: [
    { h: 'Arten von Material',
      de: `In der Zytologie untersucht man **einzelne Zellen** oder kleine Zellverbände statt Gewebe. Man unterscheidet:

• **Exfoliative Zytologie**: Zellen, die sich von selbst ablösen oder abgestrichen werden – z. B. **Urin**, **Sputum**, **Ergüsse** (Pleura, Aszites), **Zervixabstrich (Pap)**
• **Punktionszytologie**: Zellen werden mit einer feinen Nadel angesaugt – z. B. **Feinnadelpunktion** (Schilddrüse, Lymphknoten) oder **EBUS-TBNA**

Manchmal beurteilt man das Material direkt neben dem Patienten: **ROSE** (rapid on-site evaluation), damit man weiß, ob genug Zellen da sind.`,
      ko: `세포병리에서는 조직 대신 낱개 세포나 작은 세포 덩어리를 봅니다. 구분은 이렇습니다.

• 박리 세포검사: 저절로 떨어지거나 문질러 얻은 세포 – 예) 소변, 객담, 삼출액(흉수, 복수), 자궁경부 도말(Pap)
• 천자 세포검사: 가는 바늘로 세포를 빨아들임 – 예) 세침 흡인(갑상선, 림프절) 또는 EBUS-TBNA

때로는 환자 바로 옆에서 검체를 봅니다: ROSE(현장 신속 판정) – 세포가 충분한지 알기 위해서입니다.` },
    { h: 'Präparation und Färbung',
      de: `• **Ausstrich**: direkt auf den Objektträger
• **Zytozentrifuge (Zytospin)**: Zellen aus Flüssigkeit werden auf eine kleine Fläche zentrifugiert
• **Dünnschicht-/Flüssigkeitszytologie** (z. B. ThinPrep): gleichmäßige Zellschicht
• **Zellblock**: Zellen werden wie Gewebe in Paraffin eingebettet → Immunhistochemie und Molekularpathologie möglich

Die Fixierung entscheidet über die Färbung:
• **luftgetrocknet** → **Giemsa / MGG**
• **sofort alkoholfixiert** (Spray oder 96 % Alkohol) → **Papanicolaou (Pap)**: Kerne blau, Zytoplasma je nach Reifung blaugrün, rosa oder orange

Wird ein Pap-Präparat vor der Fixierung trocken, entstehen **Lufttrocknungsartefakte**.`,
      ko: `• 도말: 슬라이드에 바로 바름
• 세포원심분리(Zytospin): 액체 속 세포를 작은 면적에 원심분리로 모음
• 액상 세포검사(예: ThinPrep): 고르게 펴진 세포층
• 셀블록: 세포를 조직처럼 파라핀에 포매 → 면역조직화학과 분자병리 가능

고정 방법이 염색을 정합니다.
• 공기 건조 → 김자 / MGG
• 즉시 알코올 고정(스프레이 또는 96% 알코올) → 파파니콜라우(Pap): 핵은 파랑, 세포질은 성숙도에 따라 청록, 분홍, 주황

Pap 슬라이드가 고정 전에 마르면 공기 건조 아티팩트가 생깁니다.` },
    { h: 'Woran erkennt man maligne Zellen?',
      de: `• vergrößerte Kerne, erhöhte **Kern-Plasma-Relation**
• **grobes, dunkles Chromatin** (Hyperchromasie)
• unregelmäßige **Kernmembran**
• große oder mehrere **Nukleolen**
• Zellen liegen unordentlich übereinander, verlieren den Zusammenhalt

Das Ergebnis wird oft in Kategorien angegeben: **negativ**, **atypisch**, **verdächtig auf Malignität**, **positiv (maligne)**, oder **nicht repräsentativ** (zu wenig Material).`,
      ko: `• 커진 핵, 높아진 핵-세포질 비율
• 거칠고 진한 염색질(과염색성)
• 불규칙한 핵막
• 크거나 여러 개인 핵소체
• 세포가 무질서하게 겹치고 서로 떨어짐

결과는 보통 범주로 적습니다: 음성, 비정형, 악성 의심, 양성(악성), 또는 대표성 없음(검체 부족).` },
  ],
  terms: [['sich ablösen', '떨어져 나오다'], ['ansaugen', '빨아들이다'], ['zentrifugieren', '원심분리하다'], ['luftgetrocknet', '공기 건조된'], ['die Kern-Plasma-Relation', '핵-세포질 비율'], ['der Zusammenhalt', '결합력, 응집']],
  quiz: [
    { q: 'Welche Färbung braucht sofort alkoholfixierte Präparate?', a: ['Giemsa', 'Papanicolaou', 'Berliner Blau', 'Kongorot'], c: 1, ex: 'Pap 염색은 즉시 알코올 고정.' },
    { q: 'Wozu macht man aus einem Erguss einen Zellblock?', a: ['Damit er schneller trocknet', 'Damit Immunhistochemie und Molekularpathologie möglich sind', 'Um Geld zu sparen', 'Für die Giemsa'], c: 1, ex: '파라핀 블록이 되니까 IHC·분자검사가 가능해요.' },
    { q: 'Was ist ein typisches Zeichen maligner Zellen?', a: ['Kleine, runde, helle Kerne', 'Erhöhte Kern-Plasma-Relation', 'Viel Zytoplasma', 'Glatte Kernmembran'], c: 1, ex: '핵이 커져 핵-세포질 비율이 높아져요.' },
    { q: 'Was bedeutet „nicht repräsentativ“?', a: ['Krebs', 'Zu wenig oder ungeeignetes Material', 'Entzündung', 'Normalbefund'], c: 1, ex: '판정하기에 검체가 부족하다는 뜻.' },
  ],
},
{
  id: 'molekular', icon: '🧬', de: 'Molekularpathologie in der Praxis', ko: '분자병리 실무',
  sections: [
    { h: 'Vom Block zur DNA',
      de: `Die meisten Untersuchungen laufen mit **FFPE-Material** (formalinfixiert, paraffineingebettet). Ablauf:

• Die Ärztin oder der Arzt wählt den Block und **markiert das Tumorareal** auf dem HE-Schnitt
• Der **Tumorzellgehalt** wird geschätzt – je nach Methode braucht man meist mindestens **10–20 %**
• Man schneidet **Leerschnitte** (oft 5–10 µm) mit **neuer Klinge** und sauberem Streckbad
• **Makrodissektion**: Das markierte Areal wird vom Leerschnitt abgekratzt
• **DNA/RNA-Extraktion** und Qualitätskontrolle

Formalin **fragmentiert** die DNA, saure Entkalkung zerstört sie fast ganz. Und: Fremde DNA aus einem anderen Fall kann zu einem **falschen Ergebnis** führen – darum ist Sauberkeit hier besonders wichtig.`,
      ko: `대부분의 검사는 FFPE 검체(포르말린 고정, 파라핀 포매)로 합니다. 과정:

• 의사가 블록을 고르고 H&E 슬라이드에 종양 부위를 표시
• 종양세포 함량을 추정 – 방법에 따라 보통 최소 10~20% 필요
• 새 칼날과 깨끗한 워터배스로 무염색 절편(보통 5~10 µm)을 자름
• 매크로 박리(Makrodissektion): 표시한 부위를 무염색 슬라이드에서 긁어냄
• DNA/RNA 추출과 품질 확인

포르말린은 DNA를 조각내고, 산 탈회는 거의 다 망가뜨립니다. 그리고 다른 건의 DNA가 섞이면 잘못된 결과가 나올 수 있어서, 여기서는 청결이 특히 중요합니다.` },
    { h: 'Methoden',
      de: `• **PCR**: vervielfältigt einen bestimmten DNA-Abschnitt
• **NGS** (Next-Generation Sequencing): viele Gene gleichzeitig in einem **Panel**
• **FISH**: fluoreszenzmarkierte Sonden auf dem Schnitt; zeigt **Amplifikation** (z. B. HER2) oder **Bruch/Translokation** (Break-apart, z. B. ALK, ROS1)
• **MSI-Analyse** oder MMR-IHC: Mikrosatelliteninstabilität

Arten von Veränderungen: **Punktmutation**, **Deletion**, **Amplifikation**, **Fusion** (zwei Gene verbinden sich).`,
      ko: `• PCR: 특정 DNA 부분을 증폭
• NGS(차세대 염기서열 분석): 많은 유전자를 패널로 한꺼번에
• FISH: 형광 표지 탐침을 절편에 붙임; 증폭(예: HER2)이나 절단/전좌(break-apart, 예: ALK, ROS1)를 보여 줌
• MSI 분석 또는 MMR 면역염색: 미세부수체 불안정성

변화의 종류: 점돌연변이, 결실, 증폭, 융합(두 유전자가 이어짐).` },
    { h: 'Wofür? Beispiele',
      de: `• **Lunge (NSCLC)**: EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, NTRK
• **Kolon**: KRAS, NRAS, BRAF, MSI
• **Mamma / Magen**: HER2
• **Ovar**: BRCA1/2
• **Lymphome**: Klonalität, Translokationen (z. B. MYC, BCL2)

Viele dieser Ergebnisse entscheiden direkt über eine **zielgerichtete Therapie**. Deshalb gilt bei kleinen Biopsien: **sparsam schneiden**, Leerschnitte auf Vorrat, und Blöcke nicht unnötig „aufbrauchen“.`,
      ko: `• 폐(NSCLC): EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, NTRK
• 대장: KRAS, NRAS, BRAF, MSI
• 유방 / 위: HER2
• 난소: BRCA1/2
• 림프종: 클론성, 전좌(예: MYC, BCL2)

이 결과들 중 상당수가 표적 치료를 직접 결정합니다. 그래서 작은 생검은: 아껴서 자르고, 무염색 슬라이드를 미리 만들어 두고, 블록을 쓸데없이 '다 써 버리지' 않습니다.` },
  ],
  terms: [['abkratzen', '긁어내다'], ['fragmentieren', '조각내다'], ['vervielfältigen', '복제·증폭하다'], ['die Sonde', '탐침 (프로브)'], ['zielgerichtet', '표적의'], ['aufbrauchen', '다 써 버리다']],
  quiz: [
    { q: 'Was macht man bei der Makrodissektion?', a: ['Den ganzen Block auflösen', 'Das markierte Tumorareal vom Leerschnitt abkratzen', 'Mit dem Laser schneiden', 'Den Schnitt färben'], c: 1, ex: '표시된 종양 부위만 긁어내 종양세포 비율을 높여요.' },
    { q: 'Warum braucht man für Molekular-Leerschnitte eine neue Klinge?', a: ['Damit keine fremde DNA hineinkommt', 'Weil sie dicker sind', 'Wegen der Färbung', 'Ohne Grund'], c: 0, ex: '다른 환자 DNA 오염 방지.' },
    { q: 'Was zeigt eine FISH mit Break-apart-Sonde (z. B. ALK)?', a: ['Eine Amplifikation', 'Einen Bruch bzw. eine Translokation', 'Eiweiß', 'Pilze'], c: 1, ex: '두 색 신호가 떨어지면 절단·전좌.' },
    { q: 'Welche Entkalkung zerstört die DNA fast ganz?', a: ['EDTA', 'saure Entkalkung', 'keine', 'Kühlung'], c: 1, ex: '산 탈회는 DNA를 망가뜨려요.' },
  ],
},
{
  id: 'digital', icon: '💻', de: 'Digitale Pathologie', ko: '디지털 병리',
  sections: [
    { h: 'Wie funktioniert das?',
      de: `Bei der digitalen Pathologie werden die fertigen Objektträger mit einem **Scanner** komplett digitalisiert (**Whole Slide Imaging**, meist mit 20- oder 40-facher Vergrößerung). Eine Datei kann mehrere **Gigabyte** groß sein. Die Ärztinnen und Ärzte befunden dann am **Bildschirm** statt am Mikroskop.

Der **Barcode** auf dem Objektträger verbindet das Bild automatisch mit dem richtigen Fall im Laborinformationssystem.

Vorteile: schneller Versand für **Konsile**, Arbeiten von anderen Standorten (**Telepathologie**), Messungen am Bildschirm, **KI-Unterstützung** (z. B. Ki-67 zählen) und ein digitales Archiv.`,
      ko: `디지털 병리에서는 완성된 슬라이드를 스캐너로 통째로 디지털화합니다(전체 슬라이드 이미징, 보통 20배 또는 40배). 파일 하나가 몇 기가바이트가 되기도 합니다. 의사는 현미경 대신 모니터로 판독합니다.

슬라이드의 바코드가 이미지를 검사실 정보 시스템의 올바른 건에 자동으로 연결합니다.

장점: 자문(Konsil)용으로 빨리 보내기, 다른 곳에서 일하기(원격 병리), 화면에서 측정, AI 보조(예: Ki-67 세기), 디지털 보관.` },
    { h: 'Was braucht ein guter Scan?',
      de: `Für den Scanner muss der Objektträger **besonders sauber** sein:

• Kein **überstehendes Eindeckmittel**, keine Fingerabdrücke, kein Staub
• Keine **Luftblasen** unter dem Deckglas
• Das Deckglas liegt **gerade** und deckt das ganze Gewebe ab
• Der **Barcode/Etikett** ist lesbar und nicht verklebt
• Gewebe nicht am äußersten Rand des Objektträgers
• Gleichmäßige Färbung, keine Falten

Nach dem Scan prüft man: Ist das **ganze Gewebe** erfasst? Ist das Bild überall **scharf**? Wenn nicht → **Rescan**, eventuell mit zusätzlichen Fokuspunkten.`,
      ko: `스캐너용 슬라이드는 특히 깨끗해야 합니다.

• 봉입제가 삐져나오지 않고, 지문·먼지 없음
• 커버글라스 아래 기포 없음
• 커버글라스가 똑바로 놓이고 조직 전체를 덮음
• 바코드/라벨이 읽히고 끈적이지 않음
• 조직이 슬라이드 맨 가장자리에 있지 않음
• 고른 염색, 주름 없음

스캔 후에는 확인합니다: 조직 전체가 잡혔나? 이미지가 전부 선명한가? 아니면 → 다시 스캔, 필요하면 초점 포인트를 추가해서.` },
  ],
  terms: [['digitalisieren', '디지털화하다'], ['der Bildschirm', '모니터 화면'], ['der Standort', '근무지, 지점'], ['überstehend', '삐져나온'], ['erfassen', '(빠짐없이) 담다, 잡다'], ['scharf / unscharf', '선명한 / 흐린']],
  quiz: [
    { q: 'Was verbindet das Scan-Bild mit dem richtigen Fall?', a: ['Die Farbe', 'Der Barcode', 'Das Deckglas', 'Der Dateiname von Hand'], c: 1, ex: '바코드가 자동으로 연결해요.' },
    { q: 'Was stört den Scan besonders?', a: ['Überstehendes Eindeckmittel und Luftblasen', 'Eine gute HE', 'Eine scharfe Klinge', 'Ein sauberer Objektträger'], c: 0, ex: '삐져나온 봉입제, 기포, 먼지가 문제예요.' },
    { q: 'Ein Teil des Gewebes fehlt im Scan. Was tut man?', a: ['Nichts', 'Rescan', 'Neu färben', 'Block wegwerfen'], c: 1, ex: '다시 스캔해요.' },
  ],
},
{
  id: 'kommunikation', icon: '💬', de: 'Deutsch im Laboralltag', ko: '실험실에서 쓰는 독일어',
  sections: [
    { h: 'Am Telefon',
      de: `Am Telefon meldet man sich mit Abteilung und Namen:
• „**Pathologie, [Name], guten Tag.**“

Wenn der OP nach dem Schnellschnitt fragt:
• „Der Schnitt ist gerade bei der Ärztin. **Sie ruft Sie in etwa fünf Minuten zurück.**“
• „**Können Sie mir bitte Name und Geburtsdatum der Patientin nennen?**“
• „**Unter welcher Nummer** sind Sie erreichbar?“

Wenn man etwas nicht verstanden hat:
• „**Entschuldigung, könnten Sie das bitte wiederholen?**“
• „**Können Sie den Namen bitte buchstabieren?**“

Wichtig: Befunde gibt die **Ärztin oder der Arzt** telefonisch durch – MTLAs geben keine Diagnosen weiter.`,
      ko: `전화는 부서와 이름으로 받습니다.
• "Pathologie, [이름], guten Tag."

수술실에서 동결절편 결과를 물어볼 때:
• "슬라이드가 지금 의사 선생님께 있어요. 약 5분 뒤에 다시 전화드릴 거예요."
• "환자 이름과 생년월일을 말씀해 주시겠어요?"
• "어느 번호로 연락드리면 될까요?"

못 알아들었을 때:
• "죄송한데, 다시 한번 말씀해 주시겠어요?"
• "이름 철자를 불러 주시겠어요?"

중요: 판독 결과는 의사가 전화로 전달합니다 – MTLA는 진단을 전달하지 않습니다.` },
    { h: 'Höflich fragen und vorschlagen',
      de: `Mit dem **Konjunktiv II** klingen Fragen höflicher – das ist im Team und mit Ärzten wichtig:

• „**Könnten** Sie bitte kurz auf den Schnitt schauen?“
• „**Hätten** Sie kurz Zeit?“
• „**Wäre** es möglich, die Färbung morgen früh zu machen?“
• „**Würden** Sie lieber drei oder fünf Stufen haben?“

Wenn man unsicher ist, ist Nachfragen immer besser als raten:
• „Ich bin mir nicht sicher, ob … **Soll ich** … ?“
• „**Habe ich richtig verstanden**, dass … ?“`,
      ko: `접속법 2식(Konjunktiv II)을 쓰면 질문이 더 공손하게 들립니다 – 팀 안에서, 그리고 의사와 이야기할 때 중요합니다.

• "슬라이드 잠깐 봐 주실 수 있을까요?"
• "잠깐 시간 있으세요?"
• "염색을 내일 아침에 해도 될까요?"
• "단계 절편 3장이 좋으세요, 5장이 좋으세요?"

확실하지 않으면 추측하는 것보다 묻는 게 항상 낫습니다.
• "~인지 잘 모르겠어요. ~할까요?"
• "제가 ~라고 이해한 게 맞나요?"` },
    { h: 'Probleme melden',
      de: `Fehler können passieren – wichtig ist, sie **sofort zu melden** und zu **dokumentieren**:

• „**Mir ist leider ein Block gebrochen.**“
• „Der Färbeautomat **zeigt eine Fehlermeldung** und hat angehalten.“
• „Die Probe ist **nicht beschriftet** / die Angaben **stimmen nicht überein**.“
• „Das Gefäß ist **ausgelaufen**.“
• „Wir haben **kaum noch** Objektträger, ich bestelle nach.“

Bei der **Übergabe** hilft eine klare Reihenfolge: Was ist **erledigt**? Was ist **offen**? Was ist **dringend**?
• „Die Eilfälle sind fertig, die Nachforderungen von heute sind noch offen.“`,
      ko: `실수는 일어날 수 있습니다 – 중요한 것은 즉시 알리고 기록하는 것입니다.

• "죄송하지만 블록 하나가 깨졌어요."
• "자동 염색기에 오류 메시지가 뜨고 멈췄어요."
• "검체에 라벨이 없어요 / 정보가 일치하지 않아요."
• "용기가 새서 흘렀어요."
• "슬라이드가 거의 없어서 추가 주문할게요."

인수인계 때는 순서를 정하면 쉽습니다: 끝난 것은? 남은 것은? 급한 것은?
• "긴급 건은 끝났고, 오늘 추가 검사 요청은 아직 남아 있어요."` },
  ],
  terms: [['sich melden', '(전화를) 받다, 알리다'], ['zurückrufen', '다시 전화하다'], ['erreichbar', '연락 가능한'], ['buchstabieren', '철자를 불러 주다'], ['anhalten', '멈추다'], ['erledigt / offen', '끝난 / 남은']],
  quiz: [
    { q: 'Welche Frage ist am höflichsten?', a: ['Schau mal auf den Schnitt!', 'Könnten Sie bitte kurz auf den Schnitt schauen?', 'Schnitt anschauen.', 'Du musst schauen.'], c: 1, ex: 'Konjunktiv II "Könnten Sie…"가 가장 공손해요.' },
    { q: 'Der OP fragt am Telefon nach dem Schnellschnitt-Ergebnis. Was sagt die MTLA?', a: ['Die Diagnose selbst durchgeben', 'Die Ärztin ruft Sie gleich zurück', 'Auflegen', 'Das weiß ich nicht'], c: 1, ex: '결과는 의사가 전달해요.' },
    { q: 'Was bedeutet „Können Sie den Namen bitte buchstabieren?“', a: ['이름을 크게 말해 주세요', '이름 철자를 불러 주세요', '이름을 적어 주세요', '이름을 바꿔 주세요'], c: 1, ex: 'buchstabieren = 철자를 하나씩 말하다.' },
    { q: 'Dir ist ein Block gebrochen. Was machst du?', a: ['Verstecken', 'Sofort melden und dokumentieren', 'Wegwerfen', 'Morgen erzählen'], c: 1, ex: '즉시 알리고 기록해요.' },
  ],
},
);
