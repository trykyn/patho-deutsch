# Patho Deutsch

Eine private Lern-Web-App (GitHub Pages: https://trykyn.github.io/patho-deutsch/) für eine **MTLA in der Pathologie** mit Muttersprache Koreanisch und Deutsch auf **B2**-Niveau. Sie lernt Fachwörter und Pathologie/Histologie-Wissen für die Arbeit im Labor. Alles, was sie in der App sieht, ist Koreanisch (UI) + Deutsch (Lerninhalt).

Keine Build-Schritte: `index.html` lädt `words.js`, `lessons.js`, `lessons2.js`, `lessons-auto.js` direkt. Push auf `main` = sofort live.

## Dateien

- `words.js` – Wortliste als Text `WORDS_RAW`, eine Zeile pro Wort: `Artikel|Wort|Plural|Koreanisch|deutsche Erklärung|Beispielsatz`
  - Kategorie-Zeile: `# Deutscher Name | 한국어 이름`
  - Plural: `-n`, `-e`, `-en`, `-s` = an das Wort anhängen; `-` = wie Singular; volles Wort bei Umlaut/unregelmäßig (`Schwämme`); leer = kein Plural
  - Verben/Adjektive: Artikel leer; bei Verben im Plural-Feld die Formen `schnitt zu, hat zugeschnitten`
  - Das Beispiel soll das Wort (gern mit Endung) enthalten – daraus macht die App „Lückentext“
  - Kein `|` und kein Backtick im Text. Wort-IDs (= das Wort) müssen eindeutig sein.
- `lessons.js`, `lessons2.js` – die ersten 22 Kapitel. **Nicht ändern**, außer um gemeldete Fehler zu korrigieren.
- `lessons-auto.js` – hier werden neue Kapitel angehängt (innerhalb von `LESSONS.push( ... );`).
- `fachsprache.js` – Nachschlage-Liste Alltagswort ↔ Fachsprache (Organe, Wortbausteine). Zeile: `[Alltag mit Artikel, Fachsprache, Adjektiv, Wortteil, Koreanisch, Beispiele, Bild-Key]` (Bild-Key = Organ-Key aus `bodymap.js`, mehrere mit Leerzeichen, leer lassen wenn kein Organ). Darf bei Bedarf um passende Organe ergänzt werden.
- `TOPICS.md` – Themenliste für neue Kapitel, mit Häkchen.
- `tests/check.mjs` – Datenprüfung: `node tests/check.mjs` muss ✅ zeigen.
- `sw.js` – Service Worker; bei jeder Änderung `CACHE = 'patho-deutsch-vN'` um 1 erhöhen.

## Format eines Kapitels

```js
{
  id: 'schilddruese', icon: '🦋', g: 'path', added: '2026-11-23',
  de: 'Schilddrüsenpathologie', ko: '갑상선 병리',
  sections: [
    { h: 'Überschrift auf Deutsch',
      de: `Deutscher Text (B2) ...`,
      ko: `같은 내용의 한국어 번역 ...` },
    // 2–3 Abschnitte
  ],
  terms: [['die Struma', '갑상선종'], /* 6 Begriffe: [Deutsch mit Artikel, Koreanisch] */],
  quiz: [
    { q: 'Frage auf Deutsch?', a: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'], c: 1, ex: '짧은 한국어 해설' },
    // 4 Fragen; c = Index der richtigen Antwort (0-basiert)
  ],
},
```

- `g`: `'lab'` (Labor/Methoden), `'path'` (Pathologie-Wissen/Organe), `'de'` (Deutsch im Laboralltag)
- `added`: Datum des Hinzufügens (YYYY-MM-DD) → die App zeigt 14 Tage lang **NEW**
- Text-Markup: Leerzeile = neuer Absatz, Zeile mit `• ` = Liste, `**fett**` = wichtiger Fachbegriff
- Kein `${` und kein Backtick im Text (Template-Strings).
- `id`: nur Kleinbuchstaben/Ziffern/`-`, eindeutig.

## Inhaltliche Regeln

- **Fachlich korrekt** nach aktuellem deutschem Standard (WHO-Klassifikation, TNM 8, ISHLT/Banff, S3-Leitlinien). Bei Unsicherheit lieber weglassen als raten. Keine erfundenen Zahlen.
- Perspektive einer **MTLA**: was passiert im Labor, worauf muss man achten, typische Fehler, plus das Wissen, das man braucht, um die Ärzte zu verstehen. Keine Therapie-Empfehlungen.
- Deutsch auf **B2**: klare Sätze, Fachwörter ja, aber erklärt. 2–3 Abschnitte, je ca. 120–220 Wörter.
- Koreanisch: natürliche Übersetzung desselben Inhalts (nicht wörtlich holprig), Fachbegriffe wie in koreanischen Lehrbüchern (z. B. 동결절편, 탈회, 면역조직화학).
- Quiz: 4 Fragen, plausible falsche Antworten, keine Trickfragen. `ex` kurz auf Koreanisch.
- Keine Wiederholung bestehender Kapitel (siehe Kapitel-IDs in allen lessons-Dateien); vertiefen ist okay.

## Wöchentlicher Ablauf (automatischer Job)

1. **Gemeldete Fehler zuerst**: `gh issue list --repo trykyn/patho-deutsch --label content --state open`. Jede Meldung lesen; wenn berechtigt, die Stelle (in der passenden Datei) korrigieren und das Issue mit einem kurzen koreanischen Kommentar schließen (was geändert wurde). Wenn nicht berechtigt oder unklar: koreanisch kommentieren, offen lassen. Falls `gh` nicht verfügbar ist, diesen Schritt überspringen.
2. **2 neue Kapitel** zu den nächsten offenen Themen in `TOPICS.md` schreiben und in `lessons-auto.js` anhängen (`added` = heutiges Datum). Themen in `TOPICS.md` abhaken (`- [x]`, mit Datum). Wenn alle Themen erledigt sind, 3–5 neue sinnvolle Themen ergänzen (Pathologie-Labor-Alltag) und davon nehmen.
3. **10–20 neue Wörter** aus diesen Kapiteln am Ende von `words.js` als neue Kategorie anhängen (`# Thema | 한국어`), nur Wörter, die es noch nicht gibt (Groß-/Kleinschreibung egal).
4. `sw.js`: Cache-Version +1.
5. `node tests/check.mjs` → muss ✅ sein. Sonst Fehler beheben und erneut prüfen.
6. Commit auf `main` (Nachricht auf Koreanisch, z. B. `새 장 2개: 갑상선, 간 병리 + 단어 15개`) und `git push origin main`.
