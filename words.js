// 단어장 데이터. 한 줄에 단어 하나: 관사|단어|복수형(동사는 과거·현재완료)|한국어|독일어 설명|예문
// '# 이름 | 한국어' 줄은 분야 제목. 복수형 '-n' 처럼 쓰면 단어 뒤에 붙임, '-' 혼자면 단수와 같음, 빈칸이면 복수 없음.
// 순서대로 하루 10개씩 나옴 (앞쪽 = 실험실에서 매일 쓰는 말).
const WORDS_RAW = `
# Probeneingang | 검체 접수
die|Probe|-n|검체, 샘플|Material vom Patienten, das im Labor untersucht wird.|Die Probe ist ohne Beschriftung bei uns angekommen.
das|Präparat|-e|표본 (조직·슬라이드)|Vorbereitetes Untersuchungsmaterial, z. B. ein Organ oder ein gefärbter Schnitt.|Kannst du mir bitte das Präparat von Herrn Müller geben?
der|Einsender|-|의뢰처 (보낸 병원·의사)|Die Klinik oder Praxis, die das Material zur Untersuchung schickt.|Der Einsender hat keine Telefonnummer angegeben.
der|Untersuchungsauftrag|Untersuchungsaufträge|검사 의뢰서|Formular mit Patientendaten, klinischen Angaben und der gewünschten Untersuchung.|Auf dem Untersuchungsauftrag fehlt die Entnahmestelle.
die|Eingangsnummer|-n|접수 번호|Nummer, die jede Probe beim Eingang im Institut bekommt (z. B. E-Nummer).|Bitte schreib die Eingangsnummer auf jede Kassette.
die|Biopsie|-n|생검|Entnahme einer kleinen Gewebeprobe zur Diagnose.|Aus der Endoskopie kamen heute zwanzig Biopsien.
die|Stanzbiopsie|-n|침생검 (코어 생검)|Biopsie mit einer Hohlnadel, die einen dünnen Gewebezylinder entnimmt.|Die Stanzbiopsien der Prostata werden einzeln eingebettet.
das|Resektat|-e|절제 표본|Chirurgisch entferntes, meist größeres Gewebestück oder Organ.|Das Lungenresektat wird morgen früh zugeschnitten.
das|Exzisat|-e|절제 조직 (작은 절제)|Vollständig herausgeschnittenes Gewebestück, z. B. aus der Haut.|Das Exzisat ist an der Spitze mit einem Faden markiert.
die|Entnahmestelle|-n|채취 부위|Der Ort im Körper, von dem die Probe stammt.|Als Entnahmestelle steht „rechter Unterlappen“ auf dem Auftrag.
das|Gefäß|-e|검체 용기 / 혈관|Behälter für die Probe; in der Anatomie auch ein Blutgefäß.|Das Gefäß ist ausgelaufen, es ist kaum noch Formalin drin.
die|Beschriftung|-en|라벨 (이름 표기)|Name, Geburtsdatum und Nummer auf Gefäß, Kassette oder Objektträger.|Die Beschriftung auf dem Gefäß stimmt nicht mit dem Auftrag überein.
die|Verwechslung|-en|(검체) 뒤바뀜|Fehler, bei dem zwei Proben oder Patienten vertauscht werden.|Wir haben immer nur einen Fall offen, um Verwechslungen zu vermeiden.
der|Befund|-e|소견서 (판독 결과)|Das schriftliche Ergebnis der Untersuchung durch die Pathologin oder den Pathologen.|Der Befund geht heute noch an die Klinik raus.
die|Diagnose|-n|진단|Feststellung einer Krankheit durch die Ärztin oder den Arzt.|Die endgültige Diagnose kommt erst nach der Immunhistochemie.
die|Fragestellung|-en|의뢰 목적 (임상 질문)|Was die Klinik mit der Untersuchung klären möchte.|Die Fragestellung lautet: Malignität? Lymphom?
der|Eilfall|Eilfälle|긴급 건|Fall, der besonders schnell bearbeitet werden muss.|Das ist ein Eilfall, bitte heute noch schneiden und färben.
das|Konsil|-e|외부 자문 (컨설트)|Zweite Meinung durch Experten oder ein anderes Institut.|Der Fall geht als Konsil an das Referenzzentrum.
die|Nachforderung|-en|추가 검사 요청|Wenn die Ärztin oder der Arzt zusätzliche Schnitte oder Färbungen bestellt.|Für den Fall gibt es eine Nachforderung: drei Stufen und eine PAS.
das|Restmaterial|-ien|잔여 검체|Gewebe, das beim Zuschnitt nicht eingebettet und noch aufbewahrt wird.|Das Restmaterial wird mindestens vier Wochen aufbewahrt.

# Zuschnitt | 그로싱·고정
der|Zuschnitt|-e|그로싱 (육안 검사·절출)|Makroskopische Beurteilung und Zuschneiden des Gewebes vor der Einbettung.|Der Zuschnitt fängt heute um acht Uhr an.
die|Makroskopie||육안 소견|Beschreibung des Gewebes mit bloßem Auge: Größe, Farbe, Konsistenz.|Die Makroskopie wird beim Zuschnitt diktiert.
die|Fixierung|-en|고정|Gewebe wird mit Chemikalien (meist Formalin) haltbar gemacht, damit es sich nicht zersetzt.|Die Fixierung sollte mindestens sechs Stunden dauern.
das|Formalin||포르말린|Gepufferte 4 %ige Formaldehydlösung, das Standard-Fixiermittel.|Bitte die Gefäße mit frischem Formalin auffüllen.
die|Kassette|-n|조직 카세트|Kleiner Kunststoffbehälter, in dem das Gewebe die Entwässerung durchläuft.|In eine Kassette passen höchstens drei Gewebestücke.
der|Schwamm|Schwämme|스펀지 (바이옵시 패드)|Kleines Schaumstoffkissen, damit winzige Biopsien nicht aus der Kassette fallen.|Leg die kleinen Biopsien zwischen zwei Schwämme.
die|Tusche|-n|잉크 (절제연 표시용)|Farbe, mit der die Ränder des Präparats markiert werden.|Der dorsale Rand wird mit grüner Tusche markiert.
der|Resektionsrand|Resektionsränder|절제연|Schnittfläche, an der das Gewebe operativ entfernt wurde.|Der Tumor reicht bis an den Resektionsrand.
|im Gesunden||건강한 조직까지 (완전 절제)|Der Tumor wurde mit einem Saum aus gesundem Gewebe entfernt.|Das Karzinom ist im Gesunden entfernt, der Abstand beträgt 5 mm.
die|Lamelle|-n|박편 (슬라이스)|Dünne Scheibe beim Aufschneiden eines Organs.|Das Präparat wird in fünf Millimeter dicke Lamellen geschnitten.
die|Schnittfläche|-n|절단면|Die Fläche, die man nach dem Aufschneiden sieht.|Auf der Schnittfläche sieht man einen gelblichen Knoten.
die|Konsistenz|-en|경도 (만졌을 때 느낌)|Wie sich das Gewebe anfühlt: weich, fest, derb oder elastisch.|Der Knoten hat eine feste Konsistenz.
|derb||단단하고 질긴|Fest und hart beim Tasten.|Die Schnittfläche ist grauweiß und derb.
der|Lymphknoten|-|림프절|Kleines, bohnenförmiges Organ des Immunsystems.|Im Fettgewebe wurden zwölf Lymphknoten gefunden.
die|Entkalkung|-en|탈회|Entfernung von Kalk aus Knochen oder verkalktem Gewebe, damit man es schneiden kann.|Der Hüftkopf muss noch zwei Tage in die Entkalkung.
|zuschneiden|schnitt zu, hat zugeschnitten|그로싱하다, 절출하다|Gewebe makroskopisch beurteilen und in passende Stücke schneiden.|Wer schneidet heute die Mammapräparate zu?
|aufarbeiten|arbeitete auf, hat aufgearbeitet|(검체를) 처리하다|Eine Probe vollständig für die Untersuchung vorbereiten.|Das Material wurde komplett aufgearbeitet.
|einlegen|legte ein, hat eingelegt|(카세트에) 넣다, 담그다|Gewebe in eine Kassette oder eine Lösung legen.|Die Biopsien sind schon eingelegt.

# Anatomie | 해부학 (장기)
der|Magen|Mägen|위|Hohlorgan, in dem die Nahrung verdaut wird. Fachsprache: Gaster, Adj. gastral.|Aus dem Magen kommen heute Biopsien aus Antrum und Korpus.
die|Speiseröhre|-n|식도|Muskulärer Schlauch vom Rachen zum Magen. Fachsprache: Ösophagus.|Die Biopsie aus der Speiseröhre zeigt eine Refluxösophagitis.
der|Zwölffingerdarm|Zwölffingerdärme|십이지장|Erster Abschnitt des Dünndarms direkt nach dem Magen. Fachsprache: Duodenum.|In der Biopsie aus dem Zwölffingerdarm suchen wir nach Zeichen einer Zöliakie.
der|Dünndarm|Dünndärme|소장|Langer Darmabschnitt, in dem die Nährstoffe aufgenommen werden.|Die Zotten im Dünndarm sind abgeflacht.
der|Dickdarm|Dickdärme|대장|Darmabschnitt vom Blinddarm bis zum Mastdarm. Fachsprache: Kolon.|Das Dickdarmresektat enthält ein Karzinom.
der|Mastdarm|Mastdärme|직장|Letzter Abschnitt des Dickdarms. Fachsprache: Rektum.|Beim Karzinom im Mastdarm ist der zirkumferenzielle Rand besonders wichtig.
der|Wurmfortsatz|Wurmfortsätze|충수|Kleiner, blind endender Anhang am Blinddarm. Fachsprache: Appendix.|Der Wurmfortsatz zeigt eine akute eitrige Entzündung.
die|Leber|-n|간|Größtes Stoffwechselorgan des Körpers. Fachsprache: Hepar, Adj. hepatisch.|Die Leberbiopsie ist sehr dünn, bitte vorsichtig einbetten.
die|Gallenblase|-n|담낭|Kleines Organ unter der Leber, das die Galle speichert.|Die Gallenblase enthält mehrere Steine.
die|Bauchspeicheldrüse|-n|췌장|Drüse, die Verdauungsenzyme und Insulin bildet. Fachsprache: Pankreas.|Das Resektat der Bauchspeicheldrüse (Whipple) wird heute zugeschnitten.
die|Milz|-en|비장|Organ des Immunsystems im linken Oberbauch; baut alte Blutzellen ab.|Die Milz wurde nach einem Unfall entfernt.
die|Niere|-n|신장|Organ, das das Blut filtert und Harn bildet. Fachsprache: Ren, Adj. renal.|Von der Nierenbiopsie schneiden wir Schnitte mit 2 µm.
der|Harnleiter|-|요관|Schlauch, der den Harn von der Niere zur Blase leitet. Fachsprache: Ureter.|Der Harnleiterrand ist tumorfrei.
die|Harnblase|-n|방광|Hohlorgan, das den Harn sammelt.|Die TUR-Späne aus der Harnblase werden komplett eingebettet.
die|Prostata||전립선|Drüse beim Mann direkt unter der Harnblase.|Die Prostatastanzen werden nach Lokalisation getrennt eingebettet.
der|Hoden|-|고환|Männliche Keimdrüse. Fachsprache: Testis.|Der Hoden wird in Lamellen aufgeschnitten.
die|Gebärmutter|Gebärmütter|자궁|Hohlorgan der Frau, in dem das Kind wächst. Fachsprache: Uterus.|Die Gebärmutter enthält mehrere Myome.
der|Gebärmutterhals|Gebärmutterhälse|자궁경부|Unterer, enger Teil der Gebärmutter. Fachsprache: Zervix.|Der Konus aus dem Gebärmutterhals wird wie ein Ziffernblatt eingeteilt.
das|Endometrium|Endometrien|자궁내막|Schleimhaut, die die Gebärmutter innen auskleidet.|Die Abrasio enthält Endometrium in der Sekretionsphase.
der|Eierstock|Eierstöcke|난소|Weibliche Keimdrüse. Fachsprache: Ovar.|Am rechten Eierstock findet sich eine Zyste.
der|Eileiter|-|난관|Verbindung zwischen Eierstock und Gebärmutter. Fachsprache: Tube.|Der Eileiter wird komplett eingebettet.
die|Plazenta|Plazenten|태반|Organ, das das Kind während der Schwangerschaft versorgt.|Die Plazenta wird gewogen und vermessen.
die|Brustdrüse|-n|유선 (유방)|Drüsengewebe der Brust. Fachsprache: Mamma.|Beim Mammakarzinom ist die Fixierzeit wegen HER2 wichtig.
die|Schilddrüse|-n|갑상선|Hormondrüse vorne am Hals.|Die Schilddrüse zeigt mehrere Knoten.
die|Nebenniere|-n|부신|Hormondrüse, die oben auf der Niere sitzt.|In der Nebenniere liegt ein kleines Adenom.
die|Speicheldrüse|-n|침샘|Drüse, die Speichel bildet, z. B. die Ohrspeicheldrüse (Parotis).|Der Tumor der Speicheldrüse ist ein pleomorphes Adenom.
die|Mandel|-n|편도|Lymphatisches Gewebe im Rachen. Fachsprache: Tonsille.|Mandelgewebe nehmen wir oft als Positivkontrolle.
das|Herz|-en|심장|Muskuläres Organ, das das Blut pumpt. Adj. kardial.|Die Herzbiopsie kommt von einer Patientin nach Herztransplantation.
das|Gehirn|-e|뇌|Zentrales Organ des Nervensystems. Adj. zerebral.|Beim Schnellschnitt aus dem Gehirn macht man oft zusätzlich ein Quetschpräparat.
die|Haut|Häute|피부|Äußere Hülle des Körpers aus Epidermis, Dermis und Subkutis.|Die Hautexzisate werden mit Tusche markiert.
das|Bauchfell|-e|복막|Dünne Haut, die die Bauchhöhle auskleidet. Fachsprache: Peritoneum.|Am Bauchfell finden sich kleine Tumorknötchen.
das|große Netz||대망|Fettgewebsschürze im Bauch, die vor dem Darm hängt. Fachsprache: Omentum majus.|Beim Ovarialkarzinom wird auch das große Netz entfernt.
|proximal||근위의|Näher am Ursprung oder an der Körpermitte.|Der proximale Resektionsrand ist tumorfrei.
|distal||원위의|Weiter entfernt vom Ursprung oder von der Körpermitte.|Der distale Rand wird mit blauer Tusche markiert.

# Einbetten und Schneiden | 탈수·포매·박절
die|Entwässerung|-en|탈수 (조직 처리)|Wasser wird über eine aufsteigende Alkoholreihe aus dem Gewebe entfernt.|Die Kassetten laufen über Nacht im Entwässerungsautomaten.
die|Alkoholreihe|-n|알코올 단계 (농도별)|Mehrere Alkoholbäder mit steigender oder fallender Konzentration, z. B. 70 %, 96 %, 100 %.|Nach dem Färben kommen die Schnitte durch die aufsteigende Alkoholreihe.
das|Xylol||자일렌|Lösungsmittel, das Alkohol entfernt und Paraffin löst.|Xylol bitte nur unter dem Abzug benutzen.
das|Paraffin|-e|파라핀|Wachs, mit dem das Gewebe durchtränkt und eingebettet wird.|Das Paraffin in der Ausgießstation hat ungefähr 60 Grad.
die|Einbettung|-en|포매|Gewebe wird in eine Form mit flüssigem Paraffin gelegt, das dann fest wird.|Bei der Einbettung muss die Haut senkrecht stehen.
|einbetten|bettete ein, hat eingebettet|포매하다|Gewebe in Paraffin eingießen und richtig ausrichten.|Kleine Biopsien bettet man ganz flach ein.
der|Paraffinblock|Paraffinblöcke|파라핀 블록|Fester Block aus Paraffin mit dem Gewebe darin.|Die Paraffinblöcke werden zehn Jahre archiviert.
die|Ausgießstation|-en|포매 장비 (임베딩 스테이션)|Gerät mit warmem Paraffin und Kühlplatte zum Einbetten.|Die Ausgießstation muss morgens als Erstes eingeschaltet werden.
die|Kühlplatte|-n|냉각판|Kalte Platte, auf der die Blöcke fest werden oder vor dem Schneiden abkühlen.|Leg die Blöcke vor dem Schneiden kurz auf die Kühlplatte.
das|Mikrotom|-e|마이크로톰|Gerät, mit dem man sehr dünne Schnitte (2–4 µm) vom Block schneidet.|Am Mikrotom drei ist die Klinge stumpf.
die|Klinge|-n|칼날 (블레이드)|Das Einmalmesser im Mikrotom.|Bitte die Klinge wechseln, die Schnitte reißen.
der|Schnitt|-e|절편|Sehr dünne Gewebescheibe, die auf den Objektträger kommt.|Der Schnitt hat Falten, kannst du ihn neu machen?
|anschneiden|schnitt an, hat angeschnitten|(블록을) 깎아 들어가다, 트리밍|Den Block abtragen, bis das ganze Gewebe in der Schnittfläche liegt.|Bitte vorsichtig anschneiden, die Biopsie ist sehr klein.
die|Stufe|-n|단계 절편 (레벨)|Schnitte aus verschiedenen Tiefen desselben Blocks.|Die Pathologin möchte drei Stufen in HE.
der|Leerschnitt|-e|무염색 슬라이드|Ungefärbter Schnitt, z. B. für Immunhistochemie oder Molekularpathologie.|Für die Molekularpathologie brauchen wir zehn Leerschnitte.
das|Streckbad|Streckbäder|워터배스 (절편 펴는 수조)|Warmes Wasserbad, in dem sich der Schnitt glatt streckt.|Das Streckbad hat etwa 42 Grad.
|aufziehen|zog auf, hat aufgezogen|(절편을 슬라이드에) 건져 붙이다|Den Schnitt aus dem Wasserbad auf den Objektträger nehmen.|Zieh den Schnitt bitte in die Mitte des Objektträgers auf.
der|Objektträger|-|슬라이드 글라스|Glasplättchen, auf dem der Schnitt liegt.|Die Objektträger sind schon beschriftet.
das|Deckglas|Deckgläser|커버 글라스|Dünnes Glas, das den gefärbten Schnitt abdeckt.|Unter dem Deckglas sind Luftblasen.
|eindecken|deckte ein, hat eingedeckt|봉입하다|Den gefärbten Schnitt mit Eindeckmittel und Deckglas dauerhaft schützen.|Die HE-Schnitte werden im Automaten eingedeckt.
das|Artefakt|-e|인공물 (아티팩트)|Veränderung im Schnitt, die durch die Bearbeitung entsteht und nicht durch die Krankheit.|Die Risse sind ein Schneideartefakt.
die|Falte|-n|주름|Stelle, an der der Schnitt übereinanderliegt.|Der Schnitt hat eine Falte genau im Tumor.
der|Riss|-e|찢어짐|Stelle, an der der Schnitt eingerissen ist.|Durch die Kalkablagerung entstehen Risse im Schnitt.
der|Gefrierschnitt|-e|동결 절편|Schnitt von gefrorenem, nicht eingebettetem Gewebe.|Für eine Fettfärbung braucht man Gefrierschnitte.
der|Schnellschnitt|-e|수술 중 신속 동결절편 검사|Schnelle Untersuchung während einer Operation, Ergebnis in etwa 15–20 Minuten.|Achtung, gleich kommt ein Schnellschnitt aus OP 4!
der|Kryostat|-e|크라이오스탯 (동결 박절기)|Gekühltes Mikrotom für Gefrierschnitte bei etwa −20 °C.|Der Kryostat muss vor dem Schnellschnitt kalt sein.
|entparaffinieren|entparaffinierte, hat entparaffiniert|탈파라핀하다|Paraffin mit Xylol aus dem Schnitt entfernen, damit man färben kann.|Vor dem Färben werden die Schnitte entparaffiniert.
der|Abzug|Abzüge|흄 후드|Arbeitsplatz mit Absaugung für gefährliche Dämpfe.|Formalin bitte nur unter dem Abzug umfüllen.

# Färbungen | 염색
die|Färbung|-en|염색|Gewebe wird mit Farbstoffen behandelt, damit man Strukturen unter dem Mikroskop sieht.|Welche Färbung hat der Arzt bestellt?
die|HE-Färbung|-en|H&E 염색|Übersichtsfärbung mit Hämatoxylin und Eosin, der Standard in der Histologie.|Von jedem Block wird zuerst eine HE-Färbung gemacht.
das|Hämatoxylin||헤마톡실린|Farbstoff, der die Zellkerne blauviolett färbt.|Die Kerne sind zu blass, vielleicht ist das Hämatoxylin zu alt.
das|Eosin||에오신|Farbstoff, der Zytoplasma und Bindegewebe rosa bis rot färbt.|Das Eosin ist zu kräftig, alles sieht sehr rot aus.
die|Spezialfärbung|-en|특수 염색|Färbung, die bestimmte Strukturen gezielt sichtbar macht.|Für die Leberbiopsie brauchen wir mehrere Spezialfärbungen.
die|PAS-Reaktion|-en|PAS 염색|Färbt Glykogen, Schleim, Basalmembranen und Pilze magenta.|In der PAS-Reaktion sieht man die Pilze gut.
die|Berliner-Blau-Reaktion|-en|프러시안 블루 (철 염색)|Weist Eisen (Hämosiderin) blau nach.|In der Berliner-Blau-Reaktion sieht man viele eisenhaltige Makrophagen.
die|Elastica-van-Gieson-Färbung|-en|EvG 염색 (탄력섬유)|Färbt elastische Fasern schwarz und Kollagen rot.|Mit der EvG sieht man die Gefäßinvasion besser.
die|Giemsa-Färbung|-en|김자 염색|Färbung für Blutzellen und Bakterien wie Helicobacter.|Bei Magenbiopsien machen wir zusätzlich eine Giemsa.
die|Kongorot-Färbung|-en|콩고 레드 (아밀로이드)|Weist Amyloid nach; im polarisierten Licht leuchtet es apfelgrün.|Die Kongorot-Färbung ist positiv, also liegt Amyloid vor.
die|Ziehl-Neelsen-Färbung|-en|지엘-닐슨 (항산균 염색)|Färbt säurefeste Stäbchen, z. B. Tuberkulose-Erreger, rot.|Bei verkäsenden Granulomen machen wir eine Ziehl-Neelsen.
die|Grocott-Färbung|-en|그로콧 (GMS, 진균 염색)|Silberfärbung, die Pilze schwarz darstellt.|In der Grocott sieht man Aspergillus-Hyphen.
die|Trichromfärbung|-en|트리크롬 염색 (섬유화)|Färbt Kollagen grün oder blau und Muskulatur rot, z. B. Masson-Goldner.|Für die Fibrose der Leber machen wir eine Trichromfärbung.
die|Versilberung|-en|은 염색 (레티큘린)|Silberfärbung, die retikuläre Fasern schwarz darstellt.|Die Versilberung zeigt das Fasernetz im Knochenmark.
die|Alcianblau-Färbung|-en|알시안 블루 염색|Färbt saure Muzine (Schleim) blau, z. B. Becherzellen.|Die Alcianblau-Färbung zeigt die Becherzellen im Barrett.
der|Färbeautomat|-en|자동 염색기|Gerät, das die Objektträger automatisch durch die Lösungen führt.|Der Färbeautomat zeigt schon wieder eine Fehlermeldung.
die|Gegenfärbung|-en|대조 염색|Zweite Färbung, die den Hintergrund sichtbar macht, z. B. Hämatoxylin bei der IHC.|Die Gegenfärbung ist zu stark, man sieht die Reaktion schlecht.
|differenzieren|differenzierte, hat differenziert|분별하다 (과잉 염색 빼기)|Überschüssige Farbe gezielt entfernen, z. B. mit Salzsäure-Alkohol.|Nach dem Hämatoxylin wird kurz in HCl-Alkohol differenziert.
|bläuen|bläute, hat gebläut|블루잉하다|Hämatoxylin in Leitungswasser blau umschlagen lassen.|Die Schnitte zehn Minuten in fließendem Wasser bläuen.
die|Positivkontrolle|-n|양성 대조|Gewebe, das sicher positiv ist, um zu prüfen, ob die Färbung funktioniert hat.|Die Positivkontrolle ist negativ, wir müssen die Färbung wiederholen.
|blass||(염색이) 흐린|Zu schwach gefärbt.|Die Kerne sind sehr blass, bitte nachfärben.
|überfärbt||과염색된|Zu stark gefärbt, Details sind schlecht zu erkennen.|Der Schnitt ist überfärbt, man sieht keine Kernstruktur.

# Gewebe und Mikroskopie | 조직·현미경
das|Gewebe|-|조직|Verband aus gleichartigen Zellen mit derselben Aufgabe.|Das Gewebe ist schlecht fixiert.
die|Zelle|-n|세포|Kleinste Einheit des Lebens.|Die Zellen liegen in kleinen Gruppen.
der|Zellkern|-e|세포핵|Teil der Zelle, der die DNA enthält.|Die Zellkerne sind vergrößert und hyperchromatisch.
das|Zytoplasma|Zytoplasmen|세포질|Inhalt der Zelle um den Kern herum.|Die Tumorzellen haben ein helles Zytoplasma.
das|Epithel|-ien|상피|Gewebe, das innere und äußere Oberflächen bedeckt.|Das Epithel ist an einer Stelle abgelöst.
das|Plattenepithel|-ien|편평상피|Epithel aus flachen Zellen, z. B. in Haut, Speiseröhre und Zervix.|Die Biopsie zeigt unauffälliges Plattenepithel.
das|Zylinderepithel|-ien|원주상피|Epithel aus hohen Zellen, z. B. im Magen und Darm.|Im Ösophagus findet sich Zylinderepithel mit Becherzellen.
die|Drüse|-n|샘 (선)|Organ oder Struktur, die ein Sekret bildet.|Die Drüsen liegen dicht nebeneinander.
das|Bindegewebe|-|결합조직|Gewebe, das Organe verbindet und stützt, mit vielen Fasern.|Der Tumor wächst ins umgebende Bindegewebe.
das|Fettgewebe|-|지방조직|Gewebe aus Fettzellen.|Die Lymphknoten liegen im Fettgewebe.
die|Muskulatur|-en|근육층|Muskelgewebe, z. B. die Wandschicht des Darms (Muscularis propria).|Der Tumor infiltriert die Muskulatur.
das|Stroma|Stromata|간질 (기질)|Bindegewebiges Stützgerüst eines Organs oder Tumors.|Das Stroma ist ödematös aufgelockert.
die|Schleimhaut|Schleimhäute|점막|Innere Auskleidung von Hohlorganen wie Magen oder Bronchus.|Die Schleimhaut ist entzündlich verändert.
die|Basalmembran|-en|기저막|Dünne Schicht unter dem Epithel, die es vom Bindegewebe trennt.|Die Tumorzellen haben die Basalmembran durchbrochen.
die|Kapsel|-n|피막|Bindegewebige Hülle um ein Organ oder einen Tumor.|Der Tumor ist von einer Kapsel umgeben.
das|Mikroskop|-e|현미경|Gerät zur vergrößerten Betrachtung kleiner Strukturen.|Das Mikroskop im Labor zwei ist frei.
die|Vergrößerung|-en|배율|Wie stark das Bild vergrößert wird, z. B. 40-fach.|In starker Vergrößerung sieht man die Mitosen.
der|Objektträgerscanner|-|슬라이드 스캐너|Gerät, das Schnitte für die digitale Pathologie einscannt.|Die Schnitte sind gescannt und im System sichtbar.
die|Zytologie||세포병리 (세포 검사)|Untersuchung einzelner Zellen statt ganzer Gewebestücke.|Die Zytologie ist auf derselben Etage.
der|Ausstrich|-e|도말|Zellmaterial, das dünn auf einem Objektträger verteilt ist.|Der Ausstrich ist zu dick, man sieht die Zellen schlecht.
der|Erguss|Ergüsse|삼출액 (흉수·복수 등)|Flüssigkeitsansammlung in einer Körperhöhle, z. B. Pleuraerguss.|Aus dem Pleuraerguss machen wir einen Zellblock.
der|Zellblock|Zellblöcke|셀블록|Zellmaterial aus Flüssigkeit, das wie Gewebe in Paraffin eingebettet wird.|Am Zellblock kann man auch Immunhistochemie machen.

# Allgemeine Pathologie | 일반 병리 소견
die|Entzündung|-en|염증|Abwehrreaktion des Körpers auf Schaden oder Erreger.|Die Schleimhaut zeigt eine chronische Entzündung.
|akut||급성의|Plötzlich und kurz dauernd.|Es liegt eine akute, eitrige Entzündung vor.
|chronisch||만성의|Lange dauernd.|Man sieht eine chronische Gastritis.
die|Nekrose|-n|괴사|Absterben von Zellen oder Gewebe im lebenden Körper.|Im Zentrum des Tumors liegt eine ausgedehnte Nekrose.
das|Granulom|-e|육아종|Knötchen aus Makrophagen (Epitheloidzellen), oft mit Riesenzellen.|In der Lunge finden sich mehrere Granulome.
|verkäsend||건락성 (치즈 모양 괴사)|Zentrale, käseartige Nekrose, typisch für Tuberkulose.|Die Granulome sind verkäsend, bitte Ziehl-Neelsen machen.
die|Riesenzelle|-n|거대세포|Sehr große Zelle mit vielen Kernen.|Im Granulom liegen mehrkernige Riesenzellen.
die|Fibrose|-n|섬유화|Vermehrung von Bindegewebe (Kollagen), oft nach Entzündung.|Die Leber zeigt eine fortgeschrittene Fibrose.
das|Ödem|-e|부종|Ansammlung von Flüssigkeit im Gewebe.|Das Stroma zeigt ein deutliches Ödem.
die|Blutung|-en|출혈|Austritt von Blut aus den Gefäßen.|In den Alveolen sieht man eine frische Blutung.
der|Thrombus|Thromben|혈전|Blutgerinnsel in einem Gefäß.|In der Vene liegt ein frischer Thrombus.
der|Infarkt|-e|경색|Absterben von Gewebe, weil die Blutversorgung unterbrochen ist.|Der Lungeninfarkt ist keilförmig.
das|Ulkus|Ulzera|궤양|Tiefer Defekt in Haut oder Schleimhaut.|Die Biopsie stammt vom Rand eines Magenulkus.
der|Abszess|-e|농양|Abgekapselte Ansammlung von Eiter.|Es handelt sich um einen Abszess mit vielen Granulozyten.
die|Zyste|-n|낭종|Hohlraum mit Flüssigkeit, von Epithel ausgekleidet.|Die Niere enthält eine einfache Zyste.
der|Polyp|-en|용종|Vorwölbung der Schleimhaut in ein Hohlorgan.|Aus dem Kolon kommen heute fünf Polypen.
die|Hyperplasie|-n|과형성|Vergrößerung eines Gewebes durch mehr Zellen.|Die Prostata zeigt eine noduläre Hyperplasie.
die|Metaplasie|-n|화생|Umwandlung eines Gewebetyps in einen anderen.|Im Ösophagus findet sich eine intestinale Metaplasie.
die|Dysplasie|-n|이형성 (전암 병변)|Krankhafte Veränderung des Epithels, eine Vorstufe von Krebs.|Der Polyp zeigt eine niedriggradige Dysplasie.
die|Atrophie|-n|위축|Verkleinerung eines Gewebes oder Organs.|Die Magenschleimhaut zeigt eine Atrophie.
die|Verkalkung|-en|석회화|Ablagerung von Kalk im Gewebe.|Wegen der Verkalkung muss der Block entkalkt werden.
das|Amyloid|-e|아밀로이드|Krankhaftes Eiweiß, das sich im Gewebe ablagert.|Amyloid sieht in der HE homogen und rosa aus.
das|Infiltrat|-e|(세포) 침윤|Ansammlung von Entzündungs- oder Tumorzellen im Gewebe.|Man sieht ein dichtes lymphozytäres Infiltrat.
die|Narbe|-n|흉터 (반흔)|Bindegewebe, das nach einer Verletzung zurückbleibt.|Im Resektat liegt eine alte Narbe.
|unauffällig||특이 소견 없는|Normal, ohne krankhafte Veränderung.|Die übrige Schleimhaut ist unauffällig.

# Tumorpathologie | 종양 병리
der|Tumor|Tumoren|종양|Gewebewucherung; kann gutartig oder bösartig sein.|Der Tumor misst 2,3 cm.
|benigne||양성의|Gutartig, wächst nicht zerstörend und metastasiert nicht.|Es handelt sich um eine benigne Läsion.
|maligne||악성의|Bösartig, kann eindringen und Metastasen bilden.|Die Zellen sind eindeutig maligne.
das|Karzinom|-e|암종|Bösartiger Tumor, der vom Epithel ausgeht.|Im Kolon findet sich ein Karzinom.
das|Adenokarzinom|-e|선암|Karzinom, das Drüsen bildet.|Das Adenokarzinom der Lunge ist TTF-1-positiv.
das|Plattenepithelkarzinom|-e|편평상피세포암|Karzinom mit Plattenepithel-Differenzierung, oft mit Verhornung.|Das Plattenepithelkarzinom ist p40-positiv.
das|Sarkom|-e|육종|Bösartiger Tumor des Binde- und Stützgewebes.|Sarkome sind viel seltener als Karzinome.
das|Adenom|-e|선종|Gutartiger Tumor aus Drüsengewebe.|Der Polyp ist ein tubuläres Adenom.
die|Metastase|-n|전이|Absiedlung von Tumorzellen an einem anderen Ort im Körper.|In zwei Lymphknoten finden sich Metastasen.
der|Primärtumor|-en|원발 종양|Der Tumor, von dem die Metastasen ausgehen.|Der Primärtumor ist noch unbekannt.
das|Rezidiv|-e|재발|Wiederauftreten einer Krankheit nach der Behandlung.|Klinisch besteht der Verdacht auf ein Rezidiv.
|invasiv||침윤성의|Der Tumor wächst in das umgebende Gewebe hinein.|Es handelt sich um ein invasives Karzinom.
das|Carcinoma in situ||상피내암|Krebszellen, die die Basalmembran noch nicht durchbrochen haben.|Am Rand liegt zusätzlich ein Carcinoma in situ.
das|Grading|-s|등급 (분화도)|Einteilung nach dem Differenzierungsgrad, z. B. G1 bis G3.|Das Grading ist G2, also mäßig differenziert.
das|Staging|-s|병기 결정|Bestimmung der Ausbreitung eines Tumors.|Für das Staging brauchen wir alle Lymphknoten.
die|TNM-Klassifikation|-en|TNM 분류|Einteilung nach Tumorgröße (T), Lymphknoten (N) und Fernmetastasen (M).|Nach TNM ist das pT2 pN1.
die|Lymphgefäßinvasion|-en|림프관 침범 (L1)|Tumorzellen in Lymphgefäßen.|Eine Lymphgefäßinvasion ist nachweisbar: L1.
die|Veneninvasion|-en|정맥 침범 (V1)|Tumorzellen in Venen.|Keine Veneninvasion: V0.
die|Perineuralscheideninfiltration|-en|신경주위 침범 (Pn1)|Tumorzellen wachsen entlang von Nerven.|Es findet sich eine Perineuralscheideninfiltration.
die|Mitose|-n|유사분열|Zellteilung; viele Mitosen sprechen für schnelles Wachstum.|Man zählt zehn Mitosen pro Quadratmillimeter.
die|Atypie|-n|(세포) 이형|Abweichung der Zellen vom normalen Aussehen.|Die Zellen zeigen eine deutliche Kernatypie.
|pleomorph||다형성의|Zellen oder Kerne sehen sehr unterschiedlich aus.|Die Tumorzellkerne sind stark pleomorph.
|undifferenziert||미분화의|Ohne erkennbare Ähnlichkeit zum Ursprungsgewebe.|Der Tumor ist undifferenziert, wir brauchen eine Immunhistochemie.

# Immunhistochemie | 면역조직화학·분자병리
die|Immunhistochemie||면역조직화학 (IHC)|Nachweis bestimmter Eiweiße im Gewebe mit markierten Antikörpern.|Die Immunhistochemie läuft über Nacht im Automaten.
der|Antikörper|-|항체|Eiweiß, das ganz gezielt an ein bestimmtes Antigen bindet.|Der Antikörper gegen CD20 ist fast leer.
das|Antigen|-e|항원|Struktur, an die der Antikörper bindet.|Durch die Formalinfixierung ist das Antigen maskiert.
der|Marker|-|표지자 (마커)|Merkmal, mit dem man einen Zelltyp erkennt.|TTF-1 ist ein Marker für Lunge und Schilddrüse.
die|Vorbehandlung|-en|전처리 (항원 회복)|Erhitzen in Puffer, damit der Antikörper das Antigen wieder erkennt.|Ohne Vorbehandlung bleibt die Färbung negativ.
das|Chromogen|-e|발색제 (DAB 등)|Stoff, der die Reaktion sichtbar macht, z. B. DAB (braun).|Das Chromogen DAB färbt die positiven Zellen braun.
|nukleär||핵에 (염색되는)|Die Färbung liegt im Zellkern, z. B. bei Ki-67 oder TTF-1.|Ki-67 zeigt eine nukleäre Färbung.
|membranös||세포막에 (염색되는)|Die Färbung liegt an der Zellmembran, z. B. bei CD20 oder HER2.|HER2 zeigt eine kräftige membranöse Färbung.
die|Proliferationsrate|-n|증식률 (Ki-67)|Anteil der Zellen, die sich gerade teilen.|Die Proliferationsrate liegt bei 80 %.
|Ki-67||증식 표지자|Marker für Zellen im Zellzyklus; zeigt die Proliferation.|Ki-67 ist in fast allen Tumorzellen positiv.
das|Zytokeratin|-e|사이토케라틴 (상피 표지자)|Marker für Epithelzellen, also auch für Karzinome.|Die Tumorzellen sind Zytokeratin-positiv.
|CD20||B세포 표지자|Marker für B-Lymphozyten.|Die großen Zellen sind CD20-positiv.
|CD3||T세포 표지자|Marker für T-Lymphozyten.|Die kleinen Lymphozyten sind überwiegend CD3-positiv.
|TTF-1||폐·갑상선 표지자|Marker für Lungen-Adenokarzinome und Schilddrüse.|TTF-1 ist positiv, das passt zur Lunge.
|p40||편평상피 표지자|Marker für Plattenepithelkarzinome.|p40 ist diffus positiv.
|PD-L1||PD-L1 (면역치료 지표)|Marker, der zeigt, ob eine Immuntherapie wirken könnte.|Für die Onkologie bestimmen wir den PD-L1-Wert.
die|Molekularpathologie||분자병리|Untersuchung von DNA und RNA aus dem Gewebe.|Die Molekularpathologie braucht zehn Leerschnitte.
die|Mutation|-en|돌연변이|Veränderung im Erbgut.|Im Tumor wurde eine EGFR-Mutation gefunden.
die|Sequenzierung|-en|시퀀싱 (NGS)|Bestimmung der Basenfolge der DNA, z. B. mit NGS.|Die Sequenzierung dauert etwa eine Woche.
der|Tumorzellgehalt|-e|종양세포 함량|Anteil der Tumorzellen im Gewebe; wichtig für die Molekularpathologie.|Der Tumorzellgehalt liegt bei etwa 40 %, das reicht.
|markieren|markierte, hat markiert|표시하다 (마킹)|Ein Areal kennzeichnen, z. B. das Tumorareal auf dem Objektträger.|Die Ärztin hat das Tumorareal mit einem Stift markiert.

# Lymphome | 림프종
das|Lymphom|-e|림프종|Bösartiger Tumor der Lymphozyten.|Klinisch besteht der Verdacht auf ein Lymphom.
das|Hodgkin-Lymphom|-e|호지킨 림프종|Lymphom mit wenigen großen Tumorzellen (Hodgkin- und Reed-Sternberg-Zellen) in vielen Begleitzellen.|Beim Hodgkin-Lymphom sind die Tumorzellen CD30-positiv.
das|Non-Hodgkin-Lymphom|-e|비호지킨 림프종|Alle Lymphome, die kein Hodgkin-Lymphom sind.|Die meisten Non-Hodgkin-Lymphome sind B-Zell-Lymphome.
die|Reed-Sternberg-Zelle|-n|리드-스턴버그 세포|Große, oft zweikernige Tumorzelle des Hodgkin-Lymphoms.|Man sieht einzelne Reed-Sternberg-Zellen.
das|diffuse großzellige B-Zell-Lymphom||미만성 거대 B세포 림프종 (DLBCL)|Häufigstes aggressives Lymphom aus großen B-Zellen.|Das DLBCL hat eine hohe Proliferationsrate.
das|follikuläre Lymphom||여포성 림프종|Lymphom aus Keimzentrumszellen; CD10, BCL6 und BCL2 positiv.|Beim follikulären Lymphom ist BCL2 in den Follikeln positiv.
das|Mantelzelllymphom|-e|외투세포 림프종|B-Zell-Lymphom, typisch positiv für CD5 und Cyclin D1.|Cyclin D1 ist positiv, das spricht für ein Mantelzelllymphom.
das|MALT-Lymphom|-e|MALT 림프종|Lymphom der Randzone im Schleimhautgewebe, oft im Magen.|Das MALT-Lymphom im Magen ist mit Helicobacter assoziiert.
das|Burkitt-Lymphom|-e|버킷 림프종|Sehr schnell wachsendes Lymphom; Ki-67 fast 100 %.|Das Burkitt-Lymphom zeigt ein Sternhimmelbild.
das|Sternhimmelbild|-er|별하늘 모양 (Starry sky)|Helle Makrophagen zwischen dunklen Tumorzellen, wie Sterne am Himmel.|Das Sternhimmelbild ist typisch für das Burkitt-Lymphom.
der|Follikel|-|림프소포 (여포)|Runde Ansammlung von B-Zellen im Lymphknoten.|Die Follikel sind vergrößert.
das|Keimzentrum|Keimzentren|배중심|Heller Teil des Follikels, in dem sich B-Zellen vermehren.|Die Keimzentren sind reaktiv vergrößert.
die|B-Zelle|-n|B세포|Lymphozyt, der Antikörper bildet.|Die B-Zellen liegen vor allem in den Follikeln.
die|T-Zelle|-n|T세포|Lymphozyt der zellulären Abwehr.|T-Zellen findet man vor allem im Parakortex.
die|Plasmazelle|-n|형질세포|Ausgereifte B-Zelle, die Antikörper produziert.|Im Stroma liegen viele Plasmazellen.
die|Leukämie|-n|백혈병|Bösartige Erkrankung der blutbildenden Zellen.|Die chronische lymphatische Leukämie kann auch Lymphknoten befallen.
das|Knochenmark|-|골수|Weiches Gewebe im Knochen, in dem Blutzellen gebildet werden.|Die Knochenmarkbiopsie muss erst entkalkt werden.
die|Durchflusszytometrie||유세포 분석|Untersuchung frischer Zellen mit Laser und Antikörpern.|Für die Durchflusszytometrie brauchen wir frisches, unfixiertes Material.

# Lunge | 폐
die|Lunge|-n|폐|Organ für den Gasaustausch.|Heute kommen zwei Lungenresektate.
der|Lungenlappen|-|폐엽|Teil der Lunge; rechts drei, links zwei Lappen.|Der Tumor liegt im rechten Oberlappen.
die|Lobektomie|-n|폐엽 절제술|Operative Entfernung eines Lungenlappens.|Das Präparat ist eine Lobektomie links unten.
der|Bronchus|Bronchien|기관지|Luftweg vom Hauptbronchus bis zu den kleineren Ästen.|Der Bronchusrand ist tumorfrei.
die|Bronchiole|-n|세기관지|Kleiner Luftweg ohne Knorpel.|Um die Bronchiolen liegt ein lymphozytäres Infiltrat.
die|Alveole|-n|폐포|Lungenbläschen, in dem der Gasaustausch stattfindet.|In den Alveolen liegen viele Makrophagen.
der|Pneumozyt|-en|폐포세포 (1형·2형)|Zelle, die die Alveolen auskleidet (Typ I und Typ II).|Die Typ-II-Pneumozyten sind reaktiv vermehrt.
die|Pleura|Pleuren|흉막|Dünne Haut, die die Lunge und die Brustwand überzieht.|Der Tumor erreicht die viszerale Pleura.
die|Bronchoskopie|-n|기관지 내시경|Spiegelung der Atemwege mit einem Endoskop.|Bei der Bronchoskopie wurden fünf Biopsien entnommen.
die|transbronchiale Biopsie||경기관지 폐생검 (TBB)|Biopsie aus dem Lungengewebe durch die Bronchuswand während der Bronchoskopie.|Die transbronchialen Biopsien enthalten genug Alveolargewebe.
die|Kryobiopsie|-n|냉동 생검|Größere Lungenbiopsie, bei der Gewebe mit einer Kältesonde entnommen wird.|Die Kryobiopsie ist größer als eine normale Zangenbiopsie.
die|bronchoalveoläre Lavage||기관지폐포 세척술 (BAL)|Spülung der Alveolen; die Zellen in der Flüssigkeit werden untersucht.|Aus der BAL machen wir einen Zytospin.
die|Pneumonie|-n|폐렴|Entzündung des Lungengewebes.|Die Alveolen sind mit Granulozyten gefüllt: eine Pneumonie.
das|Emphysem|-e|폐기종|Überblähung und Zerstörung der Alveolen.|Das Lungengewebe zeigt ein deutliches Emphysem.
die|Lungenfibrose|-n|폐섬유증|Vernarbung des Lungengewebes.|Die Biopsie zeigt eine Lungenfibrose vom UIP-Muster.
die|Sarkoidose|-n|사르코이드증|Erkrankung mit nicht verkäsenden Granulomen, oft in Lunge und Lymphknoten.|Die nicht verkäsenden Granulome passen zu einer Sarkoidose.
die|Tuberkulose|-n|결핵|Infektion mit Mykobakterien, typisch mit verkäsenden Granulomen.|Bei Verdacht auf Tuberkulose arbeiten wir besonders vorsichtig.
die|Aspergillose|-n|아스페르길루스증|Infektion mit dem Schimmelpilz Aspergillus.|In der Grocott sieht man die Hyphen einer Aspergillose.
das|kleinzellige Lungenkarzinom||소세포 폐암 (SCLC)|Sehr aggressiver neuroendokriner Tumor der Lunge.|Das kleinzellige Lungenkarzinom ist Synaptophysin-positiv.
das|nicht-kleinzellige Lungenkarzinom||비소세포 폐암 (NSCLC)|Sammelbegriff, vor allem Adeno- und Plattenepithelkarzinome.|Beim nicht-kleinzelligen Lungenkarzinom testen wir EGFR, ALK und PD-L1.
das|Mesotheliom|-e|중피종|Bösartiger Tumor der Pleura, oft nach Asbestkontakt.|Für das Mesotheliom brauchen wir Calretinin und BAP1.
der|Makrophage|-n|대식세포|Fresszelle, die Fremdstoffe und Zellreste aufnimmt.|In den Alveolen liegen viele pigmentierte Makrophagen.

# Transplantation | 이식·거부반응
die|Transplantation|-en|이식|Übertragung eines Organs von einem Spender auf einen Empfänger.|Die Patientin hatte vor einem Jahr eine Lungentransplantation.
das|Transplantat|-e|이식편 (이식된 장기)|Das übertragene Organ oder Gewebe.|Die Biopsie soll klären, ob das Transplantat abgestoßen wird.
der|Spender|-|공여자|Person, die ein Organ spendet.|Der Spender war 45 Jahre alt.
der|Empfänger|-|수혜자|Person, die das Organ bekommt.|Der Empfänger nimmt Immunsuppressiva.
die|Abstoßung|-en|거부반응|Das Immunsystem greift das fremde Organ an.|Es gibt keine Hinweise auf eine akute Abstoßung.
die|akute zelluläre Abstoßung||급성 세포성 거부반응|Abstoßung durch T-Zellen; in der Lunge mit Infiltraten um die Gefäße (A-Grad).|Die Biopsie zeigt eine akute zelluläre Abstoßung Grad A2.
die|antikörpervermittelte Abstoßung||항체매개 거부반응 (AMR)|Abstoßung durch Antikörper gegen das Spenderorgan.|Für die antikörpervermittelte Abstoßung färben wir C4d.
die|chronische Abstoßung||만성 거부반응|Langsame Schädigung des Organs über Monate bis Jahre.|Die chronische Abstoßung zeigt sich in der Lunge als Bronchiolitis obliterans.
die|Bronchiolitis obliterans||폐쇄성 세기관지염|Vernarbung, die die kleinen Atemwege verschließt (C-Grad).|Mit der EvG sieht man die Bronchiolitis obliterans besser.
die|lymphozytäre Bronchiolitis||림프구성 세기관지염 (B 등급)|Lymphozyten um und in der Wand der Bronchiolen.|Es zeigt sich eine lymphozytäre Bronchiolitis, Grad B1R.
|perivaskulär||혈관 주위의|Um die Blutgefäße herum.|Man sieht perivaskuläre lymphozytäre Infiltrate.
die|Kapillaritis|Kapillaritiden|모세혈관염|Entzündung der kleinsten Blutgefäße, z. B. bei einer antikörpervermittelten Abstoßung.|In den Alveolarsepten findet sich eine neutrophile Kapillaritis.
|C4d||C4d (보체 침착 표지자)|Marker für Komplementablagerung bei antikörpervermittelter Abstoßung.|C4d ist in den peritubulären Kapillaren positiv.
die|Immunsuppression|-en|면역억제|Medikamentöse Unterdrückung des Immunsystems.|Wegen der Immunsuppression sind Infektionen häufig.
die|Banff-Klassifikation||반프 분류 (신장 이식)|Internationales Schema zur Beurteilung von Nierentransplantat-Biopsien.|Die Nierenbiopsie wird nach der Banff-Klassifikation befundet.
die|ISHLT-Klassifikation||ISHLT 분류 (폐·심장 이식)|Internationale Einteilung der Abstoßung nach Lungen- und Herztransplantation.|Nach der ISHLT-Klassifikation ist das A1 B0.
die|Zytomegalie||거대세포바이러스 감염 (CMV)|Virusinfektion, die nach Transplantation häufig ist.|Zum Ausschluss einer Zytomegalie machen wir eine CMV-Immunhistochemie.
|ausschließen|schloss aus, hat ausgeschlossen|배제하다|Feststellen, dass etwas nicht vorliegt.|Eine Infektion muss ausgeschlossen werden.

# Arbeitsalltag | 업무·대화
die|Schicht|-en|근무 (교대)|Festgelegte Arbeitszeit, z. B. Früh- oder Spätschicht.|Diese Woche habe ich Frühschicht.
die|Übergabe|-n|인수인계|Weitergabe wichtiger Informationen an die Kollegen.|Bei der Übergabe hat sie den Eilfall erwähnt.
die|Einarbeitung|-en|신규 업무 교육|Zeit, in der man neue Aufgaben gezeigt bekommt.|Die Einarbeitung am Färbeautomaten dauert zwei Tage.
die|Arbeitsanweisung|-en|작업 지침서 (SOP)|Schriftliche Beschreibung, wie eine Arbeit genau gemacht wird.|Das steht so in der Arbeitsanweisung.
die|Qualitätskontrolle|-n|품질 관리|Regelmäßige Prüfung, ob die Ergebnisse richtig und gleich gut sind.|Für die Qualitätskontrolle färben wir jeden Tag eine Kontrolle mit.
der|Ringversuch|-e|외부 정도관리 (숙련도 평가)|Vergleich mehrerer Labore mit denselben Proben.|Die Schnitte für den Ringversuch müssen bis Freitag raus.
die|Dokumentation|-en|기록|Schriftliches Festhalten der Arbeitsschritte.|Bitte die Chargennummer in der Dokumentation eintragen.
die|Charge|-n|로트 (제조 번호)|Produktionseinheit eines Reagenzes mit eigener Nummer.|Ab heute benutzen wir eine neue Charge Hämatoxylin.
der|Gefahrstoff|-e|유해 물질|Stoff, der für Gesundheit oder Umwelt gefährlich ist.|Formaldehyd ist ein Gefahrstoff und krebserzeugend.
die|Schutzbrille|-n|보안경|Brille, die die Augen vor Spritzern schützt.|Beim Umfüllen bitte die Schutzbrille tragen.
die|Entsorgung|-en|폐기 처리|Fachgerechtes Wegwerfen von Abfällen und Chemikalien.|Das alte Xylol kommt in die Entsorgung.
die|Störung|-en|(기기) 고장, 오류|Ein Gerät funktioniert nicht richtig.|Der Eindeckautomat hat eine Störung.
die|Wartung|-en|정비 (유지 보수)|Regelmäßige Pflege und Prüfung eines Geräts.|Morgen kommt der Techniker zur Wartung.
|nachbestellen|bestellte nach, hat nachbestellt|추가 주문하다|Etwas noch einmal bestellen, weil es fast leer ist.|Wir müssen Objektträger nachbestellen.
|Bescheid sagen|sagte Bescheid, hat Bescheid gesagt|알려 주다|Jemanden informieren.|Sag mir bitte Bescheid, wenn der Schnellschnitt kommt.
|Rücksprache halten|hielt Rücksprache, hat Rücksprache gehalten|(확인차) 상의하다|Mit jemandem sprechen, um etwas zu klären.|Ich halte kurz Rücksprache mit der Ärztin.
|sich kümmern um|kümmerte sich, hat sich gekümmert|~을 맡아 처리하다|Die Verantwortung für eine Aufgabe übernehmen.|Ich kümmere mich um die Nachforderungen.
|einspringen|sprang ein, ist eingesprungen|대신 근무하다|Spontan die Arbeit für jemand anderen übernehmen.|Kannst du am Samstag für mich einspringen?
|sich krankmelden|meldete sich krank, hat sich krankgemeldet|병가를 내다|Dem Arbeitgeber sagen, dass man krank ist.|Sie hat sich heute Morgen krankgemeldet.
|abklären|klärte ab, hat abgeklärt|확인하다, 알아보다|Eine offene Frage klären.|Ich kläre ab, ob die Probe noch einmal kommt.
|weiterleiten|leitete weiter, hat weitergeleitet|전달하다|Eine Information oder Probe an jemand anderen geben.|Ich leite die E-Mail an die Laborleitung weiter.
|Vorrang haben|hatte Vorrang, hat Vorrang gehabt|우선이다|Wichtiger sein und zuerst erledigt werden.|Schnellschnitte haben immer Vorrang.
|auf dem Laufenden halten|hielt, hat gehalten|진행 상황을 계속 알려 주다|Jemanden regelmäßig informieren.|Halt mich bitte auf dem Laufenden.
`;

// 분석: 한 줄 → 단어 객체 (words-auto.js 도 같은 함수를 씀)
function parseWords(raw, extra = {}) {
  const out = []; let cat = '', catKo = '';
  for (const line of raw.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith('#')) { [cat, catKo] = t.slice(1).split('|').map(s => s.trim()); continue; }
    const [art, de, pl, ko, def, ex] = t.split('|').map(s => s.trim());
    out.push({ id: de, art, de, pl, ko, def, ex, cat, catKo, ...extra });
  }
  return out;
}
const WORDS = parseWords(WORDS_RAW);
