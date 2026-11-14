// 병리 공부 탭 내용. 각 장: 독일어 본문(B2) + 한국어 번역 + 핵심 용어 + 퀴즈.
// 본문 표기: 빈 줄 = 새 문단, '• ' = 목록, **굵게** = 중요 용어.
const LESSONS = [
{
  id: 'probenweg', icon: '🧭', de: 'Der Weg einer Probe', ko: '검체가 지나가는 길',
  sections: [
    { h: 'Vom Eingang bis zum Befund',
      de: `Jede Probe durchläuft in der Pathologie dieselben Schritte. Wenn ein Schritt fehlerhaft ist, kann man das später oft nicht mehr korrigieren – deshalb ist sorgfältiges Arbeiten so wichtig.

• **Eingang**: Probe und Untersuchungsauftrag prüfen, Eingangsnummer vergeben
• **Fixierung**: Gewebe in Formalin haltbar machen
• **Zuschnitt**: makroskopisch beschreiben, zuschneiden, in Kassetten legen
• **Entwässerung**: über Nacht im Automaten (Alkohol → Xylol → Paraffin)
• **Einbettung**: Gewebe in Paraffinblöcke gießen
• **Schneiden**: 2–4 µm dünne Schnitte am Mikrotom
• **Färben und Eindecken**: meist HE, danach Deckglas
• **Befundung**: Die Ärztin oder der Arzt mikroskopiert und schreibt den Befund
• **Archiv**: Blöcke und Schnitte werden viele Jahre aufbewahrt`,
      ko: `모든 검체는 병리과에서 같은 단계를 거칩니다. 한 단계에서 실수하면 나중에 바로잡을 수 없는 경우가 많아서 꼼꼼한 작업이 아주 중요합니다.

• 접수: 검체와 의뢰서 확인, 접수 번호 부여
• 고정: 포르말린으로 조직 보존
• 그로싱: 육안 소견 기록, 절출, 카세트에 담기
• 탈수: 밤새 자동 처리기 (알코올 → 자일렌 → 파라핀)
• 포매: 조직을 파라핀 블록으로 만들기
• 박절: 마이크로톰으로 2–4 µm 절편
• 염색·봉입: 주로 H&E, 그다음 커버글라스
• 판독: 의사가 현미경으로 보고 소견서 작성
• 보관: 블록과 슬라이드는 여러 해 보관` },
    { h: 'Identität sichern',
      de: `Der wichtigste Grundsatz im Labor lautet: **Keine Verwechslung!** Auf Gefäß, Kassette, Block und Objektträger muss immer dieselbe Eingangsnummer stehen. Man vergleicht mindestens **zwei Merkmale**, z. B. Name und Geburtsdatum.

Man arbeitet immer nur mit **einem Fall** gleichzeitig am Arbeitsplatz. Unklare Proben (keine Beschriftung, falsche Angaben) werden nicht einfach bearbeitet – man hält Rücksprache mit dem Einsender und dokumentiert das.`,
      ko: `실험실에서 가장 중요한 원칙은 "뒤바뀜 금지!"입니다. 용기, 카세트, 블록, 슬라이드에는 항상 같은 접수 번호가 있어야 합니다. 이름과 생년월일처럼 최소 두 가지 정보를 비교합니다.

작업대에서는 항상 한 건만 다룹니다. 라벨이 없거나 정보가 틀린 불분명한 검체는 그냥 처리하지 않고, 의뢰처와 확인(상의)한 뒤 그 내용을 기록합니다.` },
  ],
  terms: [['der Eingang', '접수'], ['die Eingangsnummer', '접수 번호'], ['die Befundung', '판독'], ['das Archiv', '보관소'], ['die Verwechslung', '뒤바뀜'], ['das Merkmal', '특징, 식별 정보']],
  quiz: [
    { q: 'Welcher Schritt kommt direkt nach der Entwässerung?', a: ['Zuschnitt', 'Einbettung', 'Färbung', 'Fixierung'], c: 1, ex: '탈수 → 포매 → 박절 순서예요.' },
    { q: 'Wie dick sind normale Paraffinschnitte?', a: ['2–4 µm', '20–40 µm', '0,2 mm', '1 mm'], c: 0, ex: '일반 파라핀 절편은 2–4 마이크로미터예요.' },
    { q: 'Wie viele Merkmale vergleicht man mindestens zur Identitätssicherung?', a: ['eins', 'zwei', 'vier', 'keins'], c: 1, ex: '이름 + 생년월일처럼 최소 두 가지를 확인해요.' },
    { q: 'Eine Probe kommt ohne Beschriftung. Was macht man?', a: ['Einfach bearbeiten', 'Wegwerfen', 'Rücksprache mit dem Einsender halten und dokumentieren', 'Eine Nummer raten'], c: 2, ex: '의뢰처와 확인하고 기록해요.' },
  ],
},
{
  id: 'fixierung', icon: '🧪', de: 'Fixierung und Entwässerung', ko: '고정과 탈수',
  sections: [
    { h: 'Fixierung mit Formalin',
      de: `Das Standard-Fixiermittel ist **4 %iges gepuffertes Formaldehyd** (Formalin). Formaldehyd vernetzt die Eiweiße, dadurch bleibt die Struktur der Zellen erhalten.

• Volumen: Formalin mindestens **10-mal** so viel wie Gewebe
• Formalin dringt nur etwa **1 mm pro Stunde** ein – große Präparate werden deshalb aufgeschnitten
• Fixierzeit: meist **6–72 Stunden** (z. B. Mammakarzinom wegen HER2)
• Die Zeit ohne Fixierung (**kalte Ischämiezeit**) soll möglichst kurz sein, ideal unter 1 Stunde

Zu kurze Fixierung führt zu schlechter Morphologie, zu lange Fixierung kann die Immunhistochemie verschlechtern.`,
      ko: `표준 고정액은 4% 완충 포름알데히드(포르말린)입니다. 포름알데히드는 단백질을 서로 연결(가교)해서 세포 구조를 유지합니다.

• 양: 포르말린은 조직의 최소 10배
• 포르말린은 시간당 약 1 mm만 침투 → 큰 표본은 잘라서 열어 둠
• 고정 시간: 보통 6–72시간 (예: 유방암은 HER2 검사 때문에)
• 고정 전 시간(냉허혈 시간)은 최대한 짧게, 이상적으로 1시간 이내

고정이 너무 짧으면 형태가 나빠지고, 너무 길면 면역조직화학 결과가 나빠질 수 있습니다.` },
    { h: 'Entwässerung und Paraffin',
      de: `Paraffin mischt sich nicht mit Wasser. Deshalb muss das Wasser zuerst aus dem Gewebe heraus. Das passiert im **Entwässerungsautomaten**, meistens über Nacht:

• **Aufsteigende Alkoholreihe** (z. B. 70 % → 96 % → 100 %): entzieht Wasser
• **Xylol** (Intermedium): entfernt den Alkohol, mischt sich mit Paraffin
• **Paraffin** (ca. 56–60 °C): durchtränkt das Gewebe

Danach wird das Gewebe an der **Ausgießstation** eingebettet. Die Ausrichtung ist wichtig: Haut und Schleimhaut stehen senkrecht, kleine Biopsien liegen flach und auf einer Ebene.`,
      ko: `파라핀은 물과 섞이지 않습니다. 그래서 먼저 조직에서 물을 빼야 합니다. 이 과정은 탈수 자동 처리기에서, 보통 밤새 진행됩니다.

• 상승 알코올 계열 (예: 70% → 96% → 100%): 물 제거
• 자일렌 (중간제): 알코올 제거, 파라핀과 섞임
• 파라핀 (약 56–60°C): 조직에 스며듦

그다음 포매 장비에서 포매합니다. 방향이 중요합니다: 피부와 점막은 세로로 세우고, 작은 생검은 평평하게 한 면에 놓습니다.` },
  ],
  terms: [['vernetzen', '가교 결합하다'], ['eindringen', '침투하다'], ['die kalte Ischämiezeit', '냉허혈 시간'], ['das Intermedium', '중간제'], ['durchtränken', '흠뻑 적시다'], ['die Ausrichtung', '방향 잡기']],
  quiz: [
    { q: 'Wie schnell dringt Formalin ungefähr ins Gewebe ein?', a: ['1 mm pro Stunde', '1 cm pro Minute', '1 mm pro Tag', 'sofort durch alles'], c: 0, ex: '시간당 약 1 mm라서 큰 표본은 잘라서 열어요.' },
    { q: 'Wie viel Formalin braucht man im Verhältnis zum Gewebe?', a: ['gleich viel', 'mindestens 10-mal so viel', 'halb so viel', 'egal'], c: 1, ex: '조직 부피의 최소 10배예요.' },
    { q: 'Wozu dient Xylol bei der Entwässerung?', a: ['Färbt die Kerne', 'Entfernt den Alkohol und mischt sich mit Paraffin', 'Fixiert das Gewebe', 'Entkalkt Knochen'], c: 1, ex: '자일렌은 알코올과 파라핀 사이의 중간제예요.' },
    { q: 'Wie werden Hautproben eingebettet?', a: ['flach', 'senkrecht', 'gar nicht', 'schräg in mehreren Ebenen'], c: 1, ex: '피부·점막은 모든 층이 보이도록 세로로 세워요.' },
  ],
},
{
  id: 'schneiden', icon: '🔪', de: 'Schneiden und Artefakte', ko: '박절과 아티팩트',
  sections: [
    { h: 'Am Mikrotom',
      de: `Am **Rotationsmikrotom** schneidet man normalerweise **2–4 µm** dicke Schnitte (Nierenbiopsien oft 1–2 µm). Der Block wird zuerst **angeschnitten**, bis das ganze Gewebe in der Fläche liegt. Gekühlte Blöcke lassen sich besser schneiden.

Das Schnittband kommt in das **Streckbad** (ca. 40–45 °C, unter dem Schmelzpunkt des Paraffins). Dort glättet sich der Schnitt. Dann wird er auf den beschrifteten **Objektträger** aufgezogen und auf der Wärmeplatte oder im Wärmeschrank getrocknet.`,
      ko: `회전식 마이크로톰에서 보통 2–4 µm 두께로 자릅니다 (신장 생검은 1–2 µm인 경우가 많음). 먼저 조직 전체가 단면에 나올 때까지 블록을 깎아 들어갑니다(트리밍). 차갑게 식힌 블록이 더 잘 잘립니다.

절편 리본은 워터배스(약 40–45°C, 파라핀 녹는점보다 낮게)에 띄웁니다. 거기서 절편이 펴집니다. 그다음 라벨이 붙은 슬라이드로 건져 올려 가온판이나 건조기에서 말립니다.` },
    { h: 'Typische Artefakte',
      de: `• **Falten**: Streckbad zu kalt oder Schnitt zu schnell aufgezogen
• **Risse und Löcher**: Kalk, zu hartes oder schlecht entwässertes Gewebe
• **Streifen** (Messerscharten): Kerbe in der Klinge → Klinge verschieben oder wechseln
• **Rattermarken** (wellige Dicke): Block oder Klinge nicht fest eingespannt, Gewebe zu hart
• **Schnitte zerfallen**: Block zu warm oder Gewebe schlecht infiltriert
• **Kontamination** (fremdes Gewebe): Streckbad nicht sauber – nach jedem Fall Wasser abziehen!

Kontamination ist besonders gefährlich, weil fremdes Tumorgewebe zu einer falschen Diagnose führen kann.`,
      ko: `• 주름: 워터배스가 너무 차갑거나 절편을 너무 빨리 건짐
• 찢어짐·구멍: 석회, 너무 단단하거나 탈수가 덜 된 조직
• 줄무늬(칼날 흠집): 칼날에 홈 → 칼날 위치 이동 또는 교체
• 채터(두께가 물결처럼): 블록이나 칼날이 단단히 고정되지 않음, 조직이 너무 단단함
• 절편이 부서짐: 블록이 너무 따뜻하거나 파라핀 침투 불량
• 오염(다른 조직 섞임): 워터배스가 깨끗하지 않음 – 한 건마다 수면을 닦아내기!

오염은 특히 위험합니다. 다른 환자의 종양 조직이 섞이면 잘못된 진단으로 이어질 수 있기 때문입니다.` },
  ],
  terms: [['das Schnittband', '절편 리본'], ['der Schmelzpunkt', '녹는점'], ['der Wärmeschrank', '건조기 (오븐)'], ['die Messerscharte', '칼날 흠집'], ['die Rattermarke', '채터 자국'], ['die Kontamination', '오염']],
  quiz: [
    { q: 'Der Schnitt hat viele Falten. Was ist eine mögliche Ursache?', a: ['Streckbad zu kalt', 'Zu viel Eosin', 'Formalin zu alt', 'Mikroskop defekt'], c: 0, ex: '워터배스가 차가우면 절편이 잘 펴지지 않아요.' },
    { q: 'Im Schnitt sieht man gerade Streifen. Was macht man?', a: ['Länger färben', 'Klinge verschieben oder wechseln', 'Block erwärmen', 'Nichts'], c: 1, ex: '칼날 흠집 때문이에요.' },
    { q: 'Warum ist Kontamination im Streckbad so gefährlich?', a: ['Das Wasser wird kalt', 'Fremdes Gewebe kann zu einer falschen Diagnose führen', 'Die Klinge wird stumpf', 'Das Paraffin schmilzt'], c: 1, ex: '다른 환자 조직이 섞이면 오진 위험이 있어요.' },
    { q: 'Welche Temperatur hat das Streckbad ungefähr?', a: ['4 °C', '20 °C', '40–45 °C', '80 °C'], c: 2, ex: '파라핀 녹는점보다 조금 낮게 맞춰요.' },
  ],
},
{
  id: 'he', icon: '🎨', de: 'Die HE-Färbung', ko: 'H&E 염색',
  sections: [
    { h: 'Prinzip',
      de: `Die **Hämatoxylin-Eosin-Färbung** ist die Übersichtsfärbung der Histologie. Fast jede Diagnose beginnt mit einem HE-Schnitt.

• **Hämatoxylin** (als Hämalaun, z. B. nach Mayer) färbt **basophile** Strukturen **blauviolett**: vor allem Zellkerne (DNA), aber auch Kalk und manche Schleime.
• **Eosin** ist ein saurer Farbstoff und färbt **eosinophile (azidophile)** Strukturen **rosa bis rot**: Zytoplasma, Kollagen, Muskulatur, Erythrozyten.

Hämatoxylin ist nach dem Färben zuerst rötlich. Erst im leicht alkalischen Leitungswasser schlägt es nach Blau um – das nennt man **Bläuen**.`,
      ko: `헤마톡실린-에오신 염색은 조직학의 기본(개요) 염색입니다. 거의 모든 진단이 H&E 슬라이드에서 시작합니다.

• 헤마톡실린 (헤마럼 형태, 예: Mayer)은 호염기성 구조를 청자색으로 염색: 주로 세포핵(DNA), 석회와 일부 점액도.
• 에오신은 산성 염료로, 호산성 구조를 분홍~빨강으로 염색: 세포질, 콜라겐, 근육, 적혈구.

헤마톡실린은 염색 직후에는 붉은빛입니다. 약알칼리성 수돗물에서 비로소 파랗게 변하는데, 이것을 블루잉(Bläuen)이라고 합니다.` },
    { h: 'Ablauf',
      de: `• **Entparaffinieren** in Xylol
• **Absteigende Alkoholreihe** bis Wasser
• **Hämalaun** (Kerne)
• **Bläuen** in fließendem Leitungswasser
• **Eosin** (Zytoplasma)
• **Aufsteigende Alkoholreihe** (entwässern)
• **Xylol**, dann **eindecken**

Bei der **progressiven** Methode (Hämalaun nach Mayer) färbt man nur so lange, bis die Kerne richtig gefärbt sind. Bei der **regressiven** Methode (z. B. nach Harris) überfärbt man und **differenziert** danach mit Salzsäure-Alkohol.`,
      ko: `• 자일렌으로 탈파라핀
• 하강 알코올 계열로 물까지
• 헤마럼 (핵)
• 흐르는 수돗물로 블루잉
• 에오신 (세포질)
• 상승 알코올 계열 (탈수)
• 자일렌, 그다음 봉입

진행성(progressiv) 방법(Mayer 헤마럼)은 핵이 알맞게 염색될 때까지만 염색합니다. 퇴행성(regressiv) 방법(예: Harris)은 일부러 과염색한 뒤 염산 알코올로 분별(differenzieren)합니다.` },
    { h: 'Fehler erkennen',
      de: `• **Kerne zu blass**: Hämatoxylin erschöpft, zu kurz gefärbt oder zu stark differenziert
• **Kerne rötlich statt blau**: nicht genug gebläut
• **Alles zu rot**: Eosin zu lange oder zu konzentriert
• **Milchig-trüber Schnitt**: Wasser nicht vollständig entfernt (Alkohol- oder Xylolbad verbraucht)

Deshalb gehört zur Qualitätskontrolle: Lösungen regelmäßig wechseln und den Wechsel dokumentieren.`,
      ko: `• 핵이 너무 흐림: 헤마톡실린 소진, 염색 시간 부족, 또는 분별 과다
• 핵이 파랗지 않고 붉음: 블루잉 부족
• 전체가 너무 빨감: 에오신이 너무 길거나 진함
• 절편이 뿌옇게 흐림: 물이 완전히 제거되지 않음 (알코올·자일렌 통이 오래됨)

그래서 품질 관리에는 용액을 정기적으로 교체하고 그 교체를 기록하는 일이 포함됩니다.` },
  ],
  terms: [['basophil', '호염기성'], ['eosinophil / azidophil', '호산성'], ['das Hämalaun', '헤마럼'], ['umschlagen', '(색이) 바뀌다'], ['progressiv / regressiv', '진행성 / 퇴행성'], ['trüb', '뿌연']],
  quiz: [
    { q: 'Was färbt Hämatoxylin?', a: ['Zytoplasma rosa', 'Zellkerne blauviolett', 'Fett rot', 'Pilze schwarz'], c: 1, ex: '헤마톡실린 = 핵 = 청자색.' },
    { q: 'Was passiert beim Bläuen?', a: ['Eosin wird entfernt', 'Hämatoxylin schlägt im Leitungswasser nach Blau um', 'Der Schnitt wird entparaffiniert', 'Das Deckglas wird aufgelegt'], c: 1, ex: '약알칼리성 수돗물에서 파랗게 변해요.' },
    { q: 'Der Schnitt ist nach dem Eindecken milchig trüb. Warum?', a: ['Zu viel Hämatoxylin', 'Wasser wurde nicht vollständig entfernt', 'Zu kurz fixiert', 'Klinge stumpf'], c: 1, ex: '탈수가 덜 되어 물이 남았어요. 알코올·자일렌 교체!' },
    { q: 'Was macht man bei der regressiven Methode nach dem Hämatoxylin?', a: ['Differenzieren mit HCl-Alkohol', 'Sofort eindecken', 'Entkalken', 'Nochmal fixieren'], c: 0, ex: '과염색 후 염산 알코올로 분별해요.' },
  ],
},
{
  id: 'spezial', icon: '🌈', de: 'Spezialfärbungen', ko: '특수 염색',
  sections: [
    { h: 'Die wichtigsten Färbungen',
      de: `• **PAS**: Glykogen, neutrale Schleime, Basalmembranen, Pilze → **magenta**. Mit Diastase-Vorbehandlung (PAS-D) wird Glykogen abgebaut.
• **Alcianblau**: saure Muzine → **blau** (z. B. Becherzellen bei Barrett)
• **Berliner Blau**: Eisen (Hämosiderin) → **blau**
• **Elastica van Gieson (EvG)**: elastische Fasern **schwarz**, Kollagen **rot**, Muskulatur **gelb**
• **Masson-Goldner (Trichrom)**: Kollagen **grün**, Muskulatur und Zytoplasma **rot**
• **Versilberung** (z. B. Gomori): Retikulinfasern **schwarz**
• **Kongorot**: Amyloid **rot**, im polarisierten Licht **apfelgrün**
• **Ziehl-Neelsen**: säurefeste Stäbchen (Mykobakterien) **rot**
• **Grocott**: Pilze (auch Pneumocystis) **schwarz**
• **Giemsa**: Helicobacter, Blut- und Knochenmarkzellen
• **Sudan / Ölrot**: Fett → braucht **Gefrierschnitte**, weil Fett bei der Entwässerung herausgelöst wird`,
      ko: `• PAS: 글리코겐, 중성 점액, 기저막, 진균 → 자홍색. 디아스타제 전처리(PAS-D)를 하면 글리코겐이 분해됨.
• 알시안 블루: 산성 점액 → 파랑 (예: 바렛의 배상세포)
• 프러시안 블루(베를린 블루): 철(헤모시데린) → 파랑
• EvG: 탄력섬유 검정, 콜라겐 빨강, 근육 노랑
• Masson-Goldner(트리크롬): 콜라겐 초록, 근육·세포질 빨강
• 은 염색(예: Gomori): 레티큘린 섬유 검정
• 콩고 레드: 아밀로이드 빨강, 편광에서 사과녹색
• 지엘-닐슨: 항산균(마이코박테리아) 빨강
• 그로콧: 진균(뉴모시스티스 포함) 검정
• 김자: 헬리코박터, 혈액·골수 세포
• 수단/오일레드: 지방 → 동결 절편 필요 (탈수 과정에서 지방이 녹아 빠지기 때문)` },
    { h: 'Wann braucht man was?',
      de: `Die Ärztin oder der Arzt bestellt Spezialfärbungen je nach Fragestellung, zum Beispiel:

• **Granulome in der Lunge** → Ziehl-Neelsen (Tuberkulose?) und Grocott/PAS (Pilze?)
• **Leberbiopsie** → Trichrom (Fibrose), Berliner Blau (Eisen), PAS/PAS-D, Versilberung
• **Magenbiopsie** → Giemsa (Helicobacter)
• **Lungentransplantat** → EvG (Bronchiolitis obliterans), Grocott (Pilze, Pneumocystis)
• **Verdacht auf Amyloidose** → Kongorot

Bei jeder Spezialfärbung läuft eine **Positivkontrolle** mit.`,
      ko: `의사는 의뢰 목적에 따라 특수 염색을 주문합니다. 예를 들어:

• 폐 육아종 → 지엘-닐슨(결핵?)과 그로콧/PAS(진균?)
• 간 생검 → 트리크롬(섬유화), 프러시안 블루(철), PAS/PAS-D, 은 염색
• 위 생검 → 김자(헬리코박터)
• 폐 이식편 → EvG(폐쇄성 세기관지염), 그로콧(진균, 뉴모시스티스)
• 아밀로이드증 의심 → 콩고 레드

모든 특수 염색에는 양성 대조가 함께 돌아갑니다.` },
  ],
  terms: [['säurefest', '항산성의'], ['die Muzine', '뮤신 (점액)'], ['der Abbau / abbauen', '분해 / 분해하다'], ['polarisiertes Licht', '편광'], ['herauslösen', '녹여 빼내다'], ['der Erreger', '병원체']],
  quiz: [
    { q: 'Welche Färbung zeigt Eisen?', a: ['Kongorot', 'Berliner Blau', 'Giemsa', 'PAS'], c: 1, ex: '철 = 프러시안(베를린) 블루, 파랑.' },
    { q: 'In welcher Farbe erscheinen elastische Fasern in der EvG?', a: ['rot', 'gelb', 'schwarz', 'grün'], c: 2, ex: 'EvG: 탄력섬유 검정, 콜라겐 빨강, 근육 노랑.' },
    { q: 'Amyloid leuchtet im polarisierten Licht ...', a: ['apfelgrün', 'blau', 'magenta', 'gar nicht'], c: 0, ex: '콩고 레드 + 편광 = 사과녹색.' },
    { q: 'Warum braucht man für eine Fettfärbung Gefrierschnitte?', a: ['Weil sie schneller sind', 'Weil Fett bei der Entwässerung herausgelöst wird', 'Weil Fett sonst blau wird', 'Weil Paraffin zu teuer ist'], c: 1, ex: '알코올·자일렌이 지방을 녹여 버려요.' },
    { q: 'Granulome in der Lunge: Welche Färbung sucht nach Tuberkulose?', a: ['Ziehl-Neelsen', 'Alcianblau', 'Berliner Blau', 'Trichrom'], c: 0, ex: '항산균(결핵균)은 지엘-닐슨에서 빨강.' },
  ],
},
{
  id: 'ihc', icon: '🔬', de: 'Immunhistochemie', ko: '면역조직화학',
  sections: [
    { h: 'Wie funktioniert die IHC?',
      de: `Bei der Immunhistochemie bindet ein **Primärantikörper** ganz gezielt an ein **Antigen** im Gewebe. Ein Nachweissystem mit einem Enzym (meist Peroxidase) macht die Bindung mit einem **Chromogen** sichtbar: **DAB** ergibt eine **braune** Farbe. Die **Gegenfärbung** mit Hämatoxylin färbt die übrigen Kerne blau.

Formalin vernetzt Eiweiße und **maskiert** dabei viele Antigene. Deshalb braucht man eine **Vorbehandlung**: Die Schnitte werden in einem Puffer erhitzt (z. B. Citrat pH 6 oder EDTA/Tris pH 9). Das nennt man **hitzeinduzierte Antigendemaskierung (HIER)**.

Jeder Lauf braucht **Kontrollen**: eine Positivkontrolle (z. B. Tonsille, Appendix) und bei Bedarf eine Negativkontrolle.`,
      ko: `면역조직화학에서는 1차 항체가 조직 속 특정 항원에 정확하게 결합합니다. 효소(주로 퍼옥시다제)가 있는 검출 시스템이 발색제로 이 결합을 보이게 만듭니다: DAB는 갈색이 됩니다. 헤마톡실린 대조 염색은 나머지 핵을 파랗게 합니다.

포르말린은 단백질을 가교해서 많은 항원을 가립니다(마스킹). 그래서 전처리가 필요합니다: 슬라이드를 완충액(예: 구연산 pH 6 또는 EDTA/Tris pH 9)에서 가열합니다. 이것을 열유도 항원 회복(HIER)이라고 합니다.

모든 런에는 대조가 필요합니다: 양성 대조(예: 편도, 충수)와 필요하면 음성 대조.` },
    { h: 'Wo liegt die Färbung?',
      de: `Für die Beurteilung ist wichtig, **wo** in der Zelle die Färbung liegt:

• **nukleär** (im Kern): Ki-67, TTF-1, p40, Östrogenrezeptor (ER), SOX11
• **membranös** (an der Zellmembran): CD20, CD3, HER2, PD-L1
• **zytoplasmatisch**: Zytokeratin, Desmin, Synaptophysin, Chromogranin

Eine braune Farbe an der falschen Stelle ist oft **unspezifisch** – also kein echtes positives Ergebnis.`,
      ko: `판독에서는 세포의 어디에 염색되는지가 중요합니다.

• 핵: Ki-67, TTF-1, p40, 에스트로겐 수용체(ER), SOX11
• 세포막: CD20, CD3, HER2, PD-L1
• 세포질: 사이토케라틴, 데스민, 시냅토피신, 크로모그라닌

엉뚱한 위치의 갈색은 비특이적인 경우가 많습니다 – 즉 진짜 양성이 아닙니다.` },
    { h: 'Wichtige Marker',
      de: `• **Zytokeratin (z. B. CK AE1/AE3)**: Epithel → Karzinom
• **CD45 (LCA)**: alle Leukozyten → Lymphom
• **CD20 / CD3**: B-Zellen / T-Zellen
• **S100, SOX10**: Melanom, Nervengewebe
• **Desmin**: Muskulatur
• **TTF-1, Napsin A**: Lungen-Adenokarzinom
• **p40, CK5/6**: Plattenepithelkarzinom
• **Synaptophysin, Chromogranin, INSM1**: neuroendokrine Tumoren
• **Ki-67**: Proliferation
• **ER, PR, HER2**: Mammakarzinom (Therapieentscheidung)
• **PD-L1**: Immuntherapie`,
      ko: `• 사이토케라틴 (예: CK AE1/AE3): 상피 → 암종
• CD45 (LCA): 모든 백혈구 → 림프종
• CD20 / CD3: B세포 / T세포
• S100, SOX10: 흑색종, 신경 조직
• 데스민: 근육
• TTF-1, Napsin A: 폐 선암
• p40, CK5/6: 편평상피세포암
• 시냅토피신, 크로모그라닌, INSM1: 신경내분비 종양
• Ki-67: 증식
• ER, PR, HER2: 유방암 (치료 결정)
• PD-L1: 면역치료` },
  ],
  terms: [['binden an', '~에 결합하다'], ['das Nachweissystem', '검출 시스템'], ['maskieren / demaskieren', '가리다 / 회복시키다'], ['der Puffer', '완충액'], ['unspezifisch', '비특이적인'], ['die Therapieentscheidung', '치료 결정']],
  quiz: [
    { q: 'Welche Farbe ergibt das Chromogen DAB?', a: ['rot', 'blau', 'braun', 'grün'], c: 2, ex: 'DAB = 갈색.' },
    { q: 'Warum braucht man eine Vorbehandlung (HIER)?', a: ['Formalin maskiert die Antigene', 'Damit der Schnitt trocknet', 'Um das Paraffin zu härten', 'Damit Eosin besser färbt'], c: 0, ex: '포르말린 가교로 가려진 항원을 열로 회복시켜요.' },
    { q: 'Wo liegt die Färbung bei Ki-67?', a: ['an der Membran', 'im Zellkern', 'im Zytoplasma', 'im Bindegewebe'], c: 1, ex: 'Ki-67은 핵 염색이에요.' },
    { q: 'Welcher Marker spricht für ein Plattenepithelkarzinom?', a: ['TTF-1', 'CD20', 'p40', 'Desmin'], c: 2, ex: 'p40, CK5/6 = 편평상피.' },
    { q: 'Ein Tumor ist CD45-positiv und Zytokeratin-negativ. Woran denkt man zuerst?', a: ['Karzinom', 'Lymphom', 'Melanom', 'Sarkom'], c: 1, ex: 'CD45(LCA)는 백혈구 표지자 → 림프종.' },
  ],
},
{
  id: 'tumor', icon: '🎯', de: 'Tumorpathologie', ko: '종양 병리 기초',
  sections: [
    { h: 'Benigne oder maligne?',
      de: `**Benigne** Tumoren wachsen langsam, verdrängend und oft mit Kapsel. Sie bilden **keine Metastasen**. **Maligne** Tumoren wachsen **invasiv** (zerstörend in das Nachbargewebe) und können **metastasieren** – über Lymphgefäße, Blutgefäße oder in Körperhöhlen.

Mikroskopische Zeichen der Malignität: Kern- und Zellatypie, **Pleomorphie**, viele (auch atypische) Mitosen, Nekrosen, Invasion.

• Vom **Epithel**: Adenom (benigne) – **Karzinom** (maligne)
• Vom **Binde- und Stützgewebe**: z. B. Lipom (benigne) – **Sarkom** (maligne)
• Von **Lymphozyten**: **Lymphom**`,
      ko: `양성 종양은 천천히, 밀어내듯 자라고 피막이 있는 경우가 많습니다. 전이하지 않습니다. 악성 종양은 침윤성으로(주변 조직을 파괴하며) 자라고, 림프관·혈관·체강을 통해 전이할 수 있습니다.

악성의 현미경 소견: 핵·세포 이형, 다형성, 많은 (비정형) 유사분열, 괴사, 침윤.

• 상피 유래: 선종(양성) – 암종(악성)
• 결합·지지 조직 유래: 예) 지방종(양성) – 육종(악성)
• 림프구 유래: 림프종` },
    { h: 'Grading, TNM und R-Status',
      de: `Das **Grading** beschreibt, wie ähnlich der Tumor dem Ursprungsgewebe ist: **G1** gut, **G2** mäßig, **G3** schlecht differenziert.

Die **TNM-Klassifikation** beschreibt die Ausbreitung. Das kleine **p** heißt „pathologisch bestimmt“:
• **pT**: Größe und Tiefe des Primärtumors
• **pN**: befallene regionäre Lymphknoten (z. B. pN1 = 2/15)
• **M**: Fernmetastasen

Dazu kommen: **L** (Lymphgefäßinvasion), **V** (Veneninvasion), **Pn** (Perineuralscheideninfiltration) und der **R-Status**:
• **R0**: kein Resttumor – im Gesunden entfernt
• **R1**: mikroskopisch Tumor am Rand
• **R2**: makroskopisch Tumor zurückgeblieben

Deshalb sind beim Zuschnitt Tusche, Abstände zum Rand und die Zahl der Lymphknoten so wichtig.`,
      ko: `그레이딩(Grading)은 종양이 원래 조직과 얼마나 닮았는지를 나타냅니다: G1 고분화, G2 중분화, G3 저분화.

TNM 분류는 퍼진 정도를 나타냅니다. 작은 p는 '병리학적으로 결정됨'이라는 뜻입니다.
• pT: 원발 종양의 크기와 깊이
• pN: 침범된 국소 림프절 (예: pN1 = 2/15)
• M: 원격 전이

여기에 L(림프관 침범), V(정맥 침범), Pn(신경주위 침범)과 R 상태가 더해집니다.
• R0: 잔존 종양 없음 – 건강한 조직까지 절제
• R1: 현미경상 절제연에 종양
• R2: 육안상 종양이 남음

그래서 그로싱 때 잉크, 절제연까지의 거리, 림프절 개수가 아주 중요합니다.` },
  ],
  terms: [['verdrängend', '밀어내며 자라는'], ['metastasieren', '전이하다'], ['die Ausbreitung', '퍼짐, 확산'], ['befallen', '침범된'], ['der Resttumor', '잔존 종양'], ['der Abstand', '거리']],
  quiz: [
    { q: 'Ein maligner Tumor des Epithels heißt ...', a: ['Sarkom', 'Adenom', 'Karzinom', 'Lipom'], c: 2, ex: '상피 악성 = 암종(Karzinom).' },
    { q: 'Was bedeutet R1?', a: ['Kein Resttumor', 'Mikroskopisch Tumor am Resektionsrand', 'Fernmetastasen', 'Gut differenziert'], c: 1, ex: 'R1 = 현미경상 절제연 양성.' },
    { q: 'Was beschreibt das Grading?', a: ['Die Tumorgröße', 'Die Zahl der Lymphknoten', 'Den Differenzierungsgrad', 'Die Fixierzeit'], c: 2, ex: '분화도: G1(고분화) ~ G3(저분화).' },
    { q: 'Wofür steht „L1“ im Befund?', a: ['Lymphgefäßinvasion', 'Lunge befallen', 'Lymphom', 'Leber'], c: 0, ex: 'L1 = 림프관 침범 있음.' },
  ],
},
{
  id: 'lymphom', icon: '🫧', de: 'Lymphknoten und Lymphome', ko: '림프절과 림프종',
  sections: [
    { h: 'Aufbau des Lymphknotens',
      de: `Ein Lymphknoten hat eine **Kapsel**, darunter den **Randsinus**. In der **Rinde** liegen die **Follikel** mit B-Zellen. Aktivierte Follikel haben ein helles **Keimzentrum** und eine dunkle **Mantelzone**. Zwischen den Follikeln, im **Parakortex**, liegen vor allem **T-Zellen**. Im **Mark** findet man Markstränge mit Plasmazellen.

Bei einer **reaktiven** Veränderung (z. B. Infektion) bleibt diese Architektur erhalten. Bei einem **Lymphom** ist sie oft teilweise oder ganz **zerstört**.`,
      ko: `림프절에는 피막이 있고, 그 아래에 변연동이 있습니다. 피질에는 B세포가 모인 소포(여포)가 있습니다. 활성화된 소포에는 밝은 배중심과 어두운 외투층이 있습니다. 소포 사이의 부피질에는 주로 T세포가 있습니다. 수질에는 형질세포가 있는 수질삭이 있습니다.

반응성 변화(예: 감염)에서는 이 구조가 유지됩니다. 림프종에서는 구조가 부분적으로 또는 완전히 파괴되는 경우가 많습니다.` },
    { h: 'Wichtige Lymphome',
      de: `• **Klassisches Hodgkin-Lymphom**: wenige große **Hodgkin- und Reed-Sternberg-Zellen** in vielen Begleitzellen; **CD30+, CD15+**, CD45 negativ
• **Diffus großzelliges B-Zell-Lymphom (DLBCL)**: häufigstes aggressives Lymphom; große Zellen, **CD20+**, hohe Ki-67-Rate
• **Follikuläres Lymphom**: Follikel überall; **CD10+, BCL6+, BCL2+** (in den Follikeln!), Translokation t(14;18)
• **Mantelzelllymphom**: **CD5+, Cyclin D1+, SOX11+**, t(11;14)
• **CLL / kleinzelliges lymphozytisches Lymphom**: kleine Zellen, **CD5+, CD23+**
• **MALT-Lymphom**: z. B. im Magen, oft durch Helicobacter
• **Burkitt-Lymphom**: **Sternhimmelbild**, Ki-67 fast **100 %**, MYC-Translokation`,
      ko: `• 고전적 호지킨 림프종: 많은 주변 세포 사이에 소수의 큰 호지킨·리드-스턴버그 세포; CD30+, CD15+, CD45 음성
• 미만성 거대 B세포 림프종(DLBCL): 가장 흔한 공격성 림프종; 큰 세포, CD20+, Ki-67 높음
• 여포성 림프종: 여포가 곳곳에; CD10+, BCL6+, BCL2+ (여포 안에서!), 전좌 t(14;18)
• 외투세포 림프종: CD5+, Cyclin D1+, SOX11+, t(11;14)
• CLL / 소림프구성 림프종: 작은 세포, CD5+, CD23+
• MALT 림프종: 예) 위, 헬리코박터와 관련 많음
• 버킷 림프종: 별하늘 모양, Ki-67 거의 100%, MYC 전좌` },
    { h: 'Für das Labor wichtig',
      de: `• Am besten wird ein **ganzer Lymphknoten** entnommen – eine Stanzbiopsie ist oft zu klein.
• Für **Durchflusszytometrie** oder Zytogenetik braucht man **frisches, unfixiertes** Material. Deshalb bei Lymphomverdacht schnell klären, ob Frischmaterial abgezweigt werden soll.
• Lymphome brauchen meist ein **großes IHC-Panel** – also dünne, gute Schnitte und manchmal viele Leerschnitte.
• Für die **Klonalität** (B- oder T-Zell-Rearrangement) und FISH geht Material in die Molekularpathologie.`,
      ko: `• 림프절 전체를 떼는 것이 가장 좋습니다 – 침생검은 너무 작은 경우가 많습니다.
• 유세포 분석이나 세포유전학에는 신선한(고정되지 않은) 검체가 필요합니다. 그래서 림프종이 의심되면 신선 검체를 따로 떼어 둘지 빨리 확인합니다.
• 림프종은 보통 큰 IHC 패널이 필요합니다 – 즉 얇고 좋은 절편과 때로는 많은 무염색 슬라이드.
• 클론성(B·T세포 재배열) 검사와 FISH를 위해 검체가 분자병리로 갑니다.` },
  ],
  terms: [['die Rinde / das Mark', '피질 / 수질'], ['die Mantelzone', '외투층'], ['der Parakortex', '부피질'], ['reaktiv', '반응성의'], ['die Translokation', '전좌'], ['abzweigen', '(일부를) 떼어 두다']],
  quiz: [
    { q: 'Wo liegen im Lymphknoten vor allem die T-Zellen?', a: ['im Keimzentrum', 'im Parakortex', 'in der Kapsel', 'im Randsinus'], c: 1, ex: 'B세포 = 여포, T세포 = 부피질.' },
    { q: 'Welche Marker sind typisch für Hodgkin- und Reed-Sternberg-Zellen?', a: ['CD30 und CD15', 'CD3 und CD5', 'Zytokeratin', 'TTF-1'], c: 0, ex: 'HRS 세포: CD30+, CD15+, CD45−.' },
    { q: 'CD5+ und Cyclin D1+ spricht für ...', a: ['Burkitt-Lymphom', 'Mantelzelllymphom', 'Hodgkin-Lymphom', 'MALT-Lymphom'], c: 1, ex: 'Cyclin D1 = 외투세포 림프종.' },
    { q: 'Wofür braucht man frisches, unfixiertes Material?', a: ['HE-Färbung', 'Durchflusszytometrie', 'Archivierung', 'EvG'], c: 1, ex: '유세포 분석은 살아있는 신선 세포가 필요해요.' },
  ],
},
{
  id: 'lunge', icon: '🫁', de: 'Lungenpathologie', ko: '폐 병리',
  sections: [
    { h: 'Aufbau und Biopsiearten',
      de: `Die Luft geht über die **Bronchien** (mit Knorpel) und **Bronchiolen** (ohne Knorpel) bis in die **Alveolen**. Die Alveolen sind mit **Pneumozyten Typ I** (flach, Gasaustausch) und **Typ II** (bilden Surfactant, können sich teilen) ausgekleidet. Die Lunge ist von der **Pleura** überzogen.

Häufige Materialien:
• **Bronchusbiopsie** (Zangenbiopsie aus der Schleimhaut)
• **Transbronchiale Biopsie (TBB)** und **Kryobiopsie**: Lungengewebe mit Alveolen
• **EBUS-TBNA**: Punktion von Lymphknoten → Zytologie und Zellblock
• **BAL**: Zellen aus der Spülflüssigkeit
• **Resektate**: Keil, Segment, **Lobektomie**, Pneumektomie`,
      ko: `공기는 기관지(연골 있음)와 세기관지(연골 없음)를 지나 폐포까지 갑니다. 폐포는 1형 폐포세포(납작함, 가스 교환)와 2형 폐포세포(표면활성제 생성, 분열 가능)로 덮여 있습니다. 폐는 흉막으로 싸여 있습니다.

흔한 검체:
• 기관지 생검 (점막 겸자 생검)
• 경기관지 생검(TBB)과 냉동 생검: 폐포가 있는 폐 조직
• EBUS-TBNA: 림프절 천자 → 세포검사와 셀블록
• BAL: 세척액 속 세포
• 절제 표본: 쐐기, 구역, 폐엽 절제, 전폐 절제` },
    { h: 'Lungentumoren',
      de: `• **Adenokarzinom** (häufigster Lungenkrebs): Drüsen, Schleim; **TTF-1+, Napsin A+**
• **Plattenepithelkarzinom**: Verhornung, Interzellularbrücken; **p40+, CK5/6+**
• **Kleinzelliges Karzinom (SCLC)**: kleine Zellen, wenig Zytoplasma, Quetschartefakte, viele Nekrosen; **Synaptophysin, Chromogranin, INSM1**, Ki-67 sehr hoch
• **Metastasen** sind in der Lunge häufig (z. B. Kolon, Mamma, Niere)

Beim **nicht-kleinzelligen Karzinom (NSCLC)** ist die **Molekularpathologie** entscheidend für die Therapie: **EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, NTRK** und die **PD-L1**-Immunhistochemie. Weil Biopsien oft klein sind, soll man **sparsam schneiden** und genug Gewebe für diese Tests übrig lassen.`,
      ko: `• 선암(가장 흔한 폐암): 샘 구조, 점액; TTF-1+, Napsin A+
• 편평상피세포암: 각화, 세포간교; p40+, CK5/6+
• 소세포암(SCLC): 작은 세포, 세포질 적음, 압궤(찌그러짐) 아티팩트, 괴사 많음; 시냅토피신, 크로모그라닌, INSM1, Ki-67 매우 높음
• 전이암도 폐에서 흔함 (예: 대장, 유방, 신장)

비소세포암(NSCLC)에서는 분자병리가 치료에 결정적입니다: EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, NTRK와 PD-L1 면역염색. 생검이 작은 경우가 많아서 아껴서 자르고, 이 검사들을 위한 조직을 충분히 남겨야 합니다.` },
    { h: 'Entzündliche Erkrankungen',
      de: `• **Pneumonie**: Alveolen voller Granulozyten und Fibrin
• **Granulome**: verkäsend → an **Tuberkulose** denken (Ziehl-Neelsen); nicht verkäsend → z. B. **Sarkoidose**
• **Pilzinfektionen** (Aspergillus, Pneumocystis): Grocott, PAS
• **Lungenfibrose** (z. B. UIP-Muster): Vernarbung, Honigwabenumbau
• **Emphysem**: zerstörte, erweiterte Alveolen

Bei Verdacht auf Tuberkulose wird mit besonderem **Infektionsschutz** gearbeitet.`,
      ko: `• 폐렴: 폐포가 과립구와 섬유소로 가득
• 육아종: 건락성 → 결핵 생각 (지엘-닐슨); 비건락성 → 예) 사르코이드증
• 진균 감염 (아스페르길루스, 뉴모시스티스): 그로콧, PAS
• 폐섬유증 (예: UIP 패턴): 흉터화, 벌집 모양 변화
• 폐기종: 파괴되고 늘어난 폐포

결핵이 의심되면 특별한 감염 방지 조치를 하고 작업합니다.` },
  ],
  terms: [['der Knorpel', '연골'], ['auskleiden', '안쪽을 덮다'], ['die Verhornung', '각화'], ['das Quetschartefakt', '압궤 아티팩트'], ['sparsam', '아껴서'], ['der Honigwabenumbau', '벌집 모양 변화']],
  quiz: [
    { q: 'Welche Marker sind typisch für ein Lungen-Adenokarzinom?', a: ['p40 und CK5/6', 'TTF-1 und Napsin A', 'CD20 und CD3', 'Desmin'], c: 1, ex: '선암 = TTF-1, Napsin A.' },
    { q: 'Was unterscheidet Bronchiolen von Bronchien?', a: ['Bronchiolen haben keinen Knorpel', 'Bronchiolen sind größer', 'Bronchiolen haben Alveolen innen', 'Kein Unterschied'], c: 0, ex: '세기관지에는 연골이 없어요.' },
    { q: 'Warum soll man kleine Lungenbiopsien sparsam schneiden?', a: ['Um Klingen zu sparen', 'Damit genug Gewebe für Molekularpathologie bleibt', 'Weil das Mikrotom langsam ist', 'Wegen der Färbung'], c: 1, ex: 'EGFR, ALK, PD-L1 등 검사용 조직을 남겨야 해요.' },
    { q: 'Ein kleinzelliges Karzinom ist typisch positiv für ...', a: ['Synaptophysin und INSM1', 'CD30', 'HER2', 'Kongorot'], c: 0, ex: 'SCLC는 신경내분비 표지자 양성.' },
  ],
},
{
  id: 'abstossung', icon: '🫀', de: 'Abstoßung nach Lungentransplantation', ko: '폐 이식 후 거부반응',
  sections: [
    { h: 'Warum Biopsien nach der Transplantation?',
      de: `Nach einer Lungentransplantation kann das Immunsystem des **Empfängers** das Organ des **Spenders** angreifen – das ist die **Abstoßung**. Trotz **Immunsuppression** passiert das relativ häufig. Gleichzeitig sind **Infektionen** wegen der Immunsuppression häufig und sehen manchmal ähnlich aus.

Deshalb werden regelmäßig oder bei Beschwerden **transbronchiale Biopsien** entnommen. Die Beurteilung erfolgt nach der **ISHLT-Klassifikation** (International Society for Heart and Lung Transplantation).

Für eine gute Beurteilung braucht man mindestens **5 Stückchen** mit gut entfaltetem Alveolargewebe. Üblich sind **mehrere Stufen in HE** sowie eine **Bindegewebsfärbung** (z. B. EvG) und Färbungen für Erreger (z. B. Grocott).`,
      ko: `폐 이식 후 수혜자의 면역계가 공여자의 장기를 공격할 수 있습니다 – 이것이 거부반응입니다. 면역억제에도 불구하고 비교적 자주 일어납니다. 동시에 면역억제 때문에 감염도 흔하고, 때로는 비슷해 보입니다.

그래서 정기적으로 또는 증상이 있을 때 경기관지 생검을 합니다. 판독은 ISHLT 분류(국제 심폐이식학회)에 따릅니다.

제대로 판독하려면 잘 펴진 폐포 조직이 있는 조각이 최소 5개 필요합니다. 보통 H&E 단계 절편 여러 장과 결합조직 염색(예: EvG), 병원체 염색(예: 그로콧)을 합니다.` },
    { h: 'Die ISHLT-Grade',
      de: `**A – akute zelluläre Abstoßung**: **perivaskuläre** lymphozytäre Infiltrate um kleine Gefäße
• **A0** keine · **A1** minimal · **A2** leicht · **A3** mäßig · **A4** schwer
Je höher der Grad, desto dichter und breiter das Infiltrat; bei A3/A4 dringen die Zellen ins Alveolargewebe ein.

**B – Atemwegsentzündung (lymphozytäre Bronchiolitis)**
• **B0** keine · **B1R** niedriggradig · **B2R** hochgradig · **BX** nicht beurteilbar (keine Bronchiole getroffen)

**C – chronische Atemwegsabstoßung (Bronchiolitis obliterans)**
• **C0** nicht vorhanden · **C1** vorhanden – Narbengewebe verschließt die Bronchiolen; in der **EvG** gut sichtbar

**D – chronische vaskuläre Abstoßung**: Verdickung der Gefäßwände

Ein Befund lautet dann z. B.: „**A2, B1R**, kein Anhalt für Infektion“.`,
      ko: `A – 급성 세포성 거부반응: 작은 혈관 주위의 림프구 침윤
• A0 없음 · A1 최소 · A2 경도 · A3 중등도 · A4 중증
등급이 높을수록 침윤이 더 빽빽하고 넓으며, A3/A4에서는 세포가 폐포 조직으로 퍼집니다.

B – 기도 염증 (림프구성 세기관지염)
• B0 없음 · B1R 저등급 · B2R 고등급 · BX 판독 불가 (세기관지가 안 잡힘)

C – 만성 기도 거부반응 (폐쇄성 세기관지염)
• C0 없음 · C1 있음 – 흉터 조직이 세기관지를 막음; EvG에서 잘 보임

D – 만성 혈관 거부반응: 혈관벽 비후

그래서 소견은 예를 들어 "A2, B1R, 감염 소견 없음"처럼 씁니다.` },
    { h: 'Antikörpervermittelte Abstoßung und Differenzialdiagnosen',
      de: `Bei der **antikörpervermittelten Abstoßung (AMR)** bildet der Empfänger **donorspezifische Antikörper (DSA)**. Histologisch sieht man z. B. eine **neutrophile Kapillaritis** in den Alveolarsepten. Die **C4d**-Immunhistochemie kann helfen, ist in der Lunge aber weniger zuverlässig als in der Niere. Die Diagnose wird **interdisziplinär** gestellt (Klinik + Labor + Pathologie).

Wichtige **Differenzialdiagnosen**:
• **Infektionen**: CMV (CMV-IHC), Pilze und Pneumocystis (Grocott), Bakterien
• **PTLD** (lymphoproliferative Erkrankung nach Transplantation, oft EBV-assoziiert)
• **Aspiration**, Medikamentenschäden

Zum Vergleich: Bei **Nierentransplantaten** gilt die **Banff-Klassifikation**; dort ist **C4d in den peritubulären Kapillaren** ein wichtiger Marker.`,
      ko: `항체매개 거부반응(AMR)에서는 수혜자가 공여자 특이 항체(DSA)를 만듭니다. 조직에서는 예를 들어 폐포 중격의 호중구성 모세혈관염이 보입니다. C4d 면역염색이 도움이 될 수 있지만, 폐에서는 신장보다 덜 믿을 만합니다. 진단은 여러 분야가 함께(임상 + 검사실 + 병리) 내립니다.

중요한 감별 진단:
• 감염: CMV (CMV 면역염색), 진균과 뉴모시스티스 (그로콧), 세균
• PTLD (이식 후 림프증식성 질환, EBV 관련이 많음)
• 흡인, 약물 손상

비교: 신장 이식편에는 반프(Banff) 분류를 쓰고, 거기서는 세뇨관 주위 모세혈관의 C4d가 중요한 표지자입니다.` },
  ],
  terms: [['angreifen', '공격하다'], ['entfaltet', '(잘) 펴진'], ['nicht beurteilbar', '판독 불가'], ['verschließen', '막다'], ['donorspezifisch', '공여자 특이적'], ['interdisziplinär', '다학제의']],
  quiz: [
    { q: 'Was sieht man bei der akuten zellulären Abstoßung (A-Grad)?', a: ['Perivaskuläre lymphozytäre Infiltrate', 'Verkäsende Granulome', 'Amyloid', 'Pilzhyphen'], c: 0, ex: 'A 등급 = 혈관 주위 림프구 침윤.' },
    { q: 'Was bedeutet „BX“?', a: ['Schwere Bronchiolitis', 'Nicht beurteilbar, keine Bronchiole getroffen', 'Bronchiolitis obliterans', 'Keine Abstoßung'], c: 1, ex: 'BX = 세기관지가 없어서 B 등급 판독 불가.' },
    { q: 'Mit welcher Färbung sieht man eine Bronchiolitis obliterans besonders gut?', a: ['Giemsa', 'EvG (Bindegewebsfärbung)', 'Kongorot', 'Alcianblau'], c: 1, ex: '흉터(결합조직)가 EvG에서 잘 보여요.' },
    { q: 'Wie viele Stückchen mit Alveolargewebe braucht man mindestens?', a: ['1', '2', '5', '20'], c: 2, ex: 'ISHLT 기준: 폐포 조직이 있는 조각 최소 5개.' },
    { q: 'Warum macht man bei Transplantatbiopsien eine Grocott-Färbung?', a: ['Um Pilze und Pneumocystis auszuschließen', 'Um Eisen zu zeigen', 'Für das Grading', 'Für PD-L1'], c: 0, ex: '면역억제 환자라 진균 감염을 꼭 배제해요.' },
  ],
},
{
  id: 'schnellschnitt', icon: '⏱️', de: 'Der Schnellschnitt', ko: '수술 중 신속 동결절편',
  sections: [
    { h: 'Ablauf',
      de: `Während einer Operation möchte der Chirurg schnell wissen, ob ein Tumor bösartig ist oder ob der **Resektionsrand** frei ist. Dafür gibt es den **Schnellschnitt**:

• Das **native** (unfixierte) Gewebe kommt sofort ins Labor – **Vorrang vor allem anderen!**
• Das Gewebe wird auf einen Objekthalter mit **Einbettmedium** (z. B. OCT) gefroren
• Schneiden im **Kryostaten** bei etwa **−20 °C** (Fett braucht es kälter)
• Kurze Fixierung und **Schnell-HE** (wenige Minuten)
• Die Ärztin oder der Arzt beurteilt den Schnitt und **ruft im OP an**

Vom Eingang bis zum Anruf sollen meist nicht mehr als **etwa 20 Minuten** vergehen.`,
      ko: `수술 중에 외과의는 종양이 악성인지, 절제연이 깨끗한지 빨리 알고 싶어 합니다. 그래서 신속 동결절편 검사가 있습니다.

• 고정하지 않은 신선 조직이 즉시 검사실로 옴 – 다른 모든 일보다 우선!
• 조직을 포매제(예: OCT)와 함께 시료대에 얼림
• 크라이오스탯에서 약 −20°C로 박절 (지방은 더 차갑게)
• 짧게 고정하고 신속 H&E (몇 분)
• 의사가 판독하고 수술실에 전화

접수부터 전화까지 보통 약 20분을 넘지 않아야 합니다.` },
    { h: 'Danach',
      de: `Das Restgewebe des Schnellschnitts wird anschließend in Formalin fixiert und normal in **Paraffin** aufgearbeitet (**Paraffinkontrolle**). Der endgültige Befund kann sich vom Schnellschnitt unterscheiden, weil Gefrierschnitte mehr Artefakte haben.

Wegen möglicher **Infektionsgefahr** (natives Gewebe!) trägt man Handschuhe, und der Kryostat wird regelmäßig **desinfiziert**.`,
      ko: `동결절편의 남은 조직은 그 후 포르말린에 고정해서 정상적으로 파라핀 처리합니다(파라핀 대조). 동결 절편에는 아티팩트가 더 많아서 최종 소견이 동결절편 결과와 다를 수 있습니다.

신선 조직이라 감염 위험이 있으므로 장갑을 끼고, 크라이오스탯은 정기적으로 소독합니다.` },
  ],
  terms: [['nativ', '신선한 (고정 안 된)'], ['das Einbettmedium', '포매제'], ['der Objekthalter', '시료대'], ['vergehen', '(시간이) 지나다'], ['endgültig', '최종적인'], ['desinfizieren', '소독하다']],
  quiz: [
    { q: 'Bei welcher Temperatur schneidet man ungefähr im Kryostaten?', a: ['+4 °C', '−20 °C', '−80 °C', '+20 °C'], c: 1, ex: '약 −20°C, 지방 조직은 더 차갑게.' },
    { q: 'In welchem Zustand kommt Schnellschnitt-Gewebe ins Labor?', a: ['in Formalin', 'nativ (unfixiert)', 'in Paraffin', 'entkalkt'], c: 1, ex: '고정하지 않은 신선 조직으로 와요.' },
    { q: 'Was passiert mit dem Restgewebe nach dem Schnellschnitt?', a: ['Es wird weggeworfen', 'Es wird fixiert und in Paraffin aufgearbeitet', 'Es bleibt im Kryostaten', 'Es geht zurück in den OP'], c: 1, ex: '파라핀 대조 슬라이드를 만들어요.' },
  ],
},
{
  id: 'sicherheit', icon: '🦺', de: 'Sicherheit und Qualität', ko: '안전과 품질 관리',
  sections: [
    { h: 'Arbeitsschutz',
      de: `**Formaldehyd** ist **krebserzeugend** und reizt Augen und Atemwege. **Xylol** ist gesundheitsschädlich und entzündlich. Deshalb:

• Mit Gefahrstoffen nur unter dem **Abzug** arbeiten
• **Persönliche Schutzausrüstung (PSA)**: Kittel, Handschuhe (z. B. Nitril), Schutzbrille
• Chemikalien richtig **entsorgen**, nie in den Ausguss
• Bei Spritzern ins Auge: sofort an der **Augendusche** spülen
• Natives Gewebe ist potenziell **infektiös**

Die **Betriebsanweisungen** und **Sicherheitsdatenblätter** zeigen, wie man mit jedem Stoff umgeht.`,
      ko: `포름알데히드는 발암성이고 눈과 호흡기를 자극합니다. 자일렌은 건강에 해롭고 인화성입니다. 그래서:

• 유해 물질은 흄 후드 안에서만 다루기
• 개인 보호구(PSA): 가운, 장갑(예: 니트릴), 보안경
• 화학물질은 올바르게 폐기, 절대 싱크대에 버리지 않기
• 눈에 튀면: 즉시 세안기로 씻기
• 신선 조직은 감염성일 수 있음

작업 지침(Betriebsanweisung)과 안전보건자료(MSDS)에 각 물질을 다루는 방법이 나와 있습니다.` },
    { h: 'Qualitätssicherung',
      de: `• **Arbeitsanweisungen (SOPs)** beschreiben jeden Arbeitsschritt
• Bei jedem Färbelauf läuft eine **Kontrolle** mit
• Reagenzien mit **Charge** und Ablaufdatum dokumentieren
• Geräte regelmäßig **warten** und Störungen dokumentieren
• **Ringversuche** (z. B. QuIP für die IHC) vergleichen die Qualität mit anderen Instituten
• Die **Akkreditierung** (nach DIN EN ISO 15189) prüft das ganze System

Ein Grundsatz: **Was nicht dokumentiert ist, gilt als nicht gemacht.**`,
      ko: `• 작업 지침서(SOP)가 모든 작업 단계를 설명
• 매 염색 런마다 대조를 함께 돌림
• 시약은 로트 번호와 유효기간을 기록
• 기기는 정기적으로 정비하고 고장을 기록
• 외부 정도관리(예: IHC는 QuIP)로 다른 기관과 품질 비교
• 인증(DIN EN ISO 15189)이 전체 시스템을 점검

원칙 하나: "기록되지 않은 것은 하지 않은 것으로 간주한다."` },
  ],
  terms: [['krebserzeugend', '발암성의'], ['reizen', '자극하다'], ['entzündlich', '인화성의 / 염증성의'], ['der Ausguss', '싱크대 배수구'], ['das Sicherheitsdatenblatt', '안전보건자료 (MSDS)'], ['das Ablaufdatum', '유효기간']],
  quiz: [
    { q: 'Wo arbeitet man mit Formalin und Xylol?', a: ['am Schreibtisch', 'unter dem Abzug', 'im Kühlschrank', 'am Mikroskop'], c: 1, ex: '증기가 해로워서 흄 후드 안에서 작업해요.' },
    { q: 'Was bedeutet der Grundsatz zur Dokumentation?', a: ['Dokumentieren ist freiwillig', 'Was nicht dokumentiert ist, gilt als nicht gemacht', 'Nur Fehler dokumentieren', 'Nur die Ärzte dokumentieren'], c: 1, ex: '기록이 없으면 안 한 것과 같아요.' },
    { q: 'Wozu dienen Ringversuche?', a: ['Zum Reinigen der Geräte', 'Zum Qualitätsvergleich mit anderen Laboren', 'Zur Einarbeitung', 'Zum Bestellen'], c: 1, ex: '같은 검체로 여러 기관의 품질을 비교해요.' },
  ],
},
];
