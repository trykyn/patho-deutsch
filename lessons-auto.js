// 매주 자동으로 추가되는 장 (클라우드 작업이 여기 맨 아래에 이어 붙임). 형식은 CLAUDE.md 참고.
// 각 장에는 g ('lab' 검사실 기초 · 'path' 병리 지식 · 'de' 직장 독일어) 와 added ('YYYY-MM-DD') 가 꼭 있어야 함.
LESSONS.push(
{
  id: 'schilddruese', icon: '🦋', g: 'path', added: '2026-11-25',
  de: 'Schilddrüsenpathologie', ko: '갑상선 병리',
  sections: [
    { h: 'Das Schilddrüsenpräparat im Zuschnitt',
      de: `Typische Präparate sind die **Thyreoidektomie** (ganze Schilddrüse) und die **Hemithyreoidektomie** (ein Lappen). Der Operateur markiert die Seite oft mit einem **Faden**.

• Präparat **wiegen** und **messen**, die Oberfläche (Kapsel) mit **Tusche** markieren
• in dünne **Lamellen** (ca. 3–5 mm) schneiden und **jeden Knoten** beschreiben: Größe, Farbe, Konsistenz, Kapsel
• Bei einem gut abgekapselten Knoten wird die **gesamte Kapsel** mit dem Übergang zum gesunden Gewebe eingebettet – denn nur dort sieht man eine **Kapsel-** oder **Gefäßinvasion**
• Kleine rundliche Knötchen am Rand können **Nebenschilddrüsen** sein – sie werden getrennt eingebettet und im Befund erwähnt`,
      ko: `흔한 표본은 갑상선 전절제술(갑상선 전체)과 엽절제술(한쪽 엽)입니다. 외과의가 실로 방향을 표시하는 경우가 많습니다.

• 표본의 무게와 크기를 재고, 표면(피막)을 잉크로 표시
• 얇게(약 3–5 mm) 잘라서 결절을 하나하나 기록: 크기, 색, 경도, 피막
• 피막이 잘 싸인 결절은 정상 조직과의 경계를 포함해 피막 전체를 포매합니다 – 피막 침윤이나 혈관 침윤은 바로 그곳에서만 보이기 때문입니다
• 가장자리의 작고 둥근 결절은 부갑상선일 수 있어서 따로 포매하고 소견서에 적습니다` },
    { h: 'Wichtige Diagnosen',
      de: `• **Knotige Struma**: häufigste Veränderung, viele Knoten mit unterschiedlich großen Follikeln und viel **Kolloid**
• **Hashimoto-Thyreoiditis**: dichtes lymphozytäres Infiltrat mit **Keimzentren**, Zerstörung der Follikel
• **Follikuläres Adenom** und **follikuläres Karzinom** sehen in der Zellmorphologie ähnlich aus. Entscheidend ist allein die **Kapsel- oder Gefäßinvasion** – deshalb so viele Blöcke von der Kapsel.
• **Papilläres Karzinom**: häufigster Schilddrüsenkrebs. Typisch sind die Kernmerkmale: helle **Milchglaskerne**, **Kernfurchen**, **Kernpseudoeinschlüsse**, dazu oft **Psammomkörperchen**.
• **Medulläres Karzinom**: aus den C-Zellen, **Calcitonin**-positiv, oft mit Amyloid`,
      ko: `• 결절성 갑상선종: 가장 흔한 변화, 크기가 다양한 여포와 많은 콜로이드가 있는 여러 결절
• 하시모토 갑상선염: 배중심이 있는 빽빽한 림프구 침윤, 여포 파괴
• 여포 선종과 여포암은 세포 모양이 비슷합니다. 결정적인 것은 오직 피막 침윤이나 혈관 침윤입니다 – 그래서 피막 블록을 많이 만듭니다.
• 유두암: 가장 흔한 갑상선암. 핵 소견이 특징입니다: 밝은 간유리 핵, 핵 홈, 핵 위봉입체, 그리고 흔히 사종체.
• 수질암: C세포에서 생기고, 칼시토닌 양성이며 아밀로이드가 동반되는 경우가 많습니다` },
    { h: 'Zytologie und Schnellschnitt',
      de: `Schilddrüsenknoten werden oft zuerst mit einer **Feinnadelpunktion** untersucht. Das Ergebnis wird nach dem **Bethesda-System** in sechs Kategorien (I–VI) eingeteilt, von „nicht diagnostisch“ bis „maligne“.

Im **Schnellschnitt** ist die Schilddrüse schwierig: Eine **Kapselinvasion** lässt sich im Gefrierschnitt meist nicht sicher beurteilen. Bei follikulären Knoten heißt es deshalb oft: „Follikuläre Neoplasie – endgültige Diagnose in Paraffin.“ Das Kolloid reißt im Gefrierschnitt leicht, und die typischen Kernmerkmale des papillären Karzinoms sind schlechter zu sehen als im Paraffinschnitt.`,
      ko: `갑상선 결절은 먼저 세침 흡인 검사를 하는 경우가 많습니다. 결과는 베데스다 체계에 따라 '진단 불가'부터 '악성'까지 여섯 범주(I–VI)로 나눕니다.

동결절편에서 갑상선은 까다롭습니다. 피막 침윤은 동결 절편에서 대개 확실히 판단할 수 없습니다. 그래서 여포성 결절은 흔히 "여포성 종양 – 최종 진단은 파라핀에서"라고 답합니다. 콜로이드는 동결 절편에서 잘 찢어지고, 유두암의 특징적인 핵 소견도 파라핀 절편보다 잘 안 보입니다.` },
  ],
  terms: [['die Struma', '갑상선종'], ['das Kolloid', '콜로이드'], ['die Kapselinvasion', '피막 침윤'], ['der Milchglaskern', '간유리 핵'], ['das Psammomkörperchen', '사종체'], ['das Calcitonin', '칼시토닌']],
  quiz: [
    { q: 'Was unterscheidet ein follikuläres Karzinom von einem follikulären Adenom?', a: ['Die Kernfarbe', 'Kapsel- oder Gefäßinvasion', 'Die Größe des Knotens', 'Viel Kolloid'], c: 1, ex: '세포 모양이 아니라 피막·혈관 침윤으로 구분해요.' },
    { q: 'Welche Kernmerkmale sind typisch für das papilläre Karzinom?', a: ['Milchglaskerne und Kernfurchen', 'Sehr kleine dunkle Kerne', 'Reed-Sternberg-Zellen', 'Keine Kerne'], c: 0, ex: '간유리 핵, 핵 홈, 핵 위봉입체가 특징이에요.' },
    { q: 'Welcher Marker spricht für ein medulläres Karzinom?', a: ['TTF-1 allein', 'Calcitonin', 'CD20', 'p40'], c: 1, ex: '수질암은 C세포 유래라 칼시토닌 양성.' },
    { q: 'Warum ist der Schnellschnitt bei follikulären Knoten schwierig?', a: ['Weil sie zu klein sind', 'Weil eine Kapselinvasion im Gefrierschnitt oft nicht sicher erkennbar ist', 'Weil Formalin fehlt', 'Weil sie immer gutartig sind'], c: 1, ex: '피막 침윤은 파라핀 절편에서 확인해요.' },
  ],
},
{
  id: 'leberbiopsie', icon: '🟤', g: 'path', added: '2026-11-25',
  de: 'Die Leberbiopsie', ko: '간 생검',
  sections: [
    { h: 'Aufbau der Leber',
      de: `Die Leber besteht aus vielen kleinen **Leberläppchen**. In der Mitte jedes Läppchens liegt die **Zentralvene**. Die Leberzellen (**Hepatozyten**) bilden Platten, dazwischen fließt das Blut in den **Sinusoiden**.

Am Rand der Läppchen liegen die **Portalfelder**. Jedes Portalfeld enthält drei Strukturen (**Glisson-Trias**): einen Ast der **Pfortader**, einen Ast der **Leberarterie** und einen **Gallengang**. Viele Lebererkrankungen beginnen im Portalfeld oder an seinem Rand.`,
      ko: `간은 작은 간소엽 여러 개로 이루어져 있습니다. 각 소엽의 가운데에 중심정맥이 있습니다. 간세포는 판을 이루고, 그 사이 굴모세혈관(Sinusoid)으로 피가 흐릅니다.

소엽 가장자리에는 문맥역(Portalfeld)이 있습니다. 문맥역에는 세 구조(글리슨 삼조)가 있습니다: 문맥 가지, 간동맥 가지, 담관. 많은 간 질환은 문맥역이나 그 경계에서 시작합니다.` },
    { h: 'Im Labor',
      de: `Die Leberbiopsie ist meist ein **dünner Stanzzylinder**. Sie wird vorsichtig und **gerade** eingebettet, damit man im Schnitt den ganzen Zylinder sieht. Für eine gute Beurteilung braucht man genug **Portalfelder** – die Ärztin oder der Arzt achtet deshalb auf die Länge des Zylinders.

Typisches **Färbepanel**:
• **HE** – Übersicht
• **Trichrom** oder Siriusrot – **Fibrose**
• **Versilberung** – Retikulinfasern, Architektur
• **PAS** und **PAS nach Diastase** – Glykogen, Globuli (z. B. Alpha-1-Antitrypsin)
• **Berliner Blau** – Eisen
• **Rhodanin** – Kupfer (z. B. Morbus Wilson)`,
      ko: `간 생검은 대개 가는 침생검 기둥입니다. 절편에서 기둥 전체가 보이도록 조심스럽게, 곧게 포매합니다. 제대로 판독하려면 문맥역이 충분히 있어야 해서, 의사는 기둥의 길이를 확인합니다.

대표적인 염색 패널:
• H&E – 개요
• 트리크롬 또는 시리우스 레드 – 섬유화
• 은 염색 – 레티큘린 섬유, 구조
• PAS와 디아스타제 처리 후 PAS – 글리코겐, 소구체(예: 알파-1 항트립신)
• 프러시안 블루 – 철
• 로다닌 – 구리 (예: 윌슨병)` },
    { h: 'Grading, Staging und typische Befunde',
      de: `• **Hepatitis**: Entzündung im Portalfeld; greift sie auf das Läppchen über, spricht man von **Grenzzonenhepatitis** (Interface-Hepatitis)
• **Steatose**: Fetttröpfchen in den Hepatozyten; mit Entzündung und geschwollenen („ballonierten“) Leberzellen spricht man von **Steatohepatitis**
• **Cholestase**: Gallestau, gelbbraune Pigmente in Hepatozyten oder Gallengängen

Bei chronischen Hepatitiden beschreibt der Befund das **Grading** (wie stark ist die Entzündung?) und das **Staging** (wie weit ist die Fibrose?). Das Staging reicht z. B. von **F0** (keine Fibrose) bis **F4** – das ist die **Zirrhose** mit Knoten und Umbau der Leberarchitektur.`,
      ko: `• 간염: 문맥역의 염증; 소엽 쪽으로 번지면 경계부 간염(interface hepatitis)이라고 합니다
• 지방증: 간세포 안의 지방 방울; 염증과 부풀어 오른('풍선 모양') 간세포가 함께 있으면 지방간염이라고 합니다
• 담즙 정체: 담즙이 고여 간세포나 담관에 황갈색 색소가 보임

만성 간염에서 소견서는 그레이딩(염증이 얼마나 심한가)과 스테이징(섬유화가 얼마나 진행했나)을 적습니다. 스테이징은 예를 들어 F0(섬유화 없음)부터 F4까지이며, F4는 결절과 간 구조 변형이 있는 간경변입니다.` },
  ],
  terms: [['das Portalfeld', '문맥역'], ['die Zentralvene', '중심정맥'], ['der Hepatozyt', '간세포'], ['die Steatose', '지방증'], ['die Zirrhose', '간경변'], ['die Grenzzonenhepatitis', '경계부 간염']],
  quiz: [
    { q: 'Was liegt im Portalfeld?', a: ['Zentralvene allein', 'Pfortaderast, Leberarterienast und Gallengang', 'Nur Lymphozyten', 'Glomeruli'], c: 1, ex: '글리슨 삼조: 문맥, 간동맥, 담관.' },
    { q: 'Mit welcher Färbung beurteilt man die Fibrose?', a: ['Trichrom oder Siriusrot', 'Berliner Blau', 'Giemsa', 'Alcianblau'], c: 0, ex: '콜라겐을 보여 주는 트리크롬·시리우스 레드.' },
    { q: 'Welche Färbung weist Kupfer nach (z. B. Morbus Wilson)?', a: ['PAS', 'Rhodanin', 'Kongorot', 'EvG'], c: 1, ex: '로다닌 = 구리.' },
    { q: 'Was bedeutet F4 im Staging?', a: ['Keine Fibrose', 'Leichte Entzündung', 'Zirrhose', 'Steatose'], c: 2, ex: 'F4 = 간경변.' },
  ],
},
);
