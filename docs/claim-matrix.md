# Claim-Matrix — Staging Pflege / Medizin

## Nachweisgrenze

Produktcode read-only geprüft unter `quinn-sis-version-fix`, HEAD `61a86498127cbc71dd908c79d74e9d2ae2e4b30f`. Dies sind Implementierungsnachweise, keine in diesem Website-Auftrag durchgeführte klinische Prüfung oder authentifizierte Produktionsabnahme. Die Website zeigt ausdrücklich synthetische Illustrationen, keine live erzeugten Patientenfälle. Externe klinische, rechtliche und Datenschutzfreigaben bleiben offen; grüne Website-Tests ersetzen sie nicht.

## Aussagen und Belege

- **Anamnese und Verlauf als prüfbare Entwürfe:** `src/server/services/medical-document-router.ts`, Definitionen `anamnesis` und `progress_note` mit eigenen Schemas, Prompts und Renderern; der Parser setzt `requiresReview: true`, bindet vertrauenswürdigen Kontext und lehnt unbekannte Quellen ab. Website bleibt bei Dokumentationsassistenz; keine autonomen Diagnosen oder Therapieentscheidungen.
- **Ärztliche Verantwortung:** `src/lib/medical-permissions.ts:13–23` verlangt aktiven Zugang, `profession === physician` und `professionVerifiedAt`. Website benennt verifizierte ärztliche Freigabe. Dieser lokale Nachweis ist keine neue Ausführung der Datenbank-Freigabeprüfung.
- **Offene Fragen sichtbar:** `src/server/services/medical-export-service.ts:20–39` behandelt `open_questions` getrennt und rendert dokumenttypspezifische Inhalte. Synthetische Website-Beispiele demonstrieren eine konkrete fehlende Angabe ohne Vollständigkeitsgarantie.
- **Manuelle Praxistext-Übernahme:** `src/server/services/medical-export-service.ts:42–49` rendert Praxistext. `src/features/consultations/consultation-workspace.tsx:342` nutzt die Zwischenablage. Keine automatische PVS-/KIS-Schnittstelle wird behauptet.
- **SIS prüfen und übertragen:** `src/features/sis/sis-workspace.tsx` enthält „SIS ausfüllen & prüfen“, „SIS übertragen“ und `navigator.clipboard.writeText` für Gesamttext/Abschnitte (Zeilen 1359/1365). Website differenziert Pflegeprüfung von ärztlicher Freigabe; bestehende Bewohner-/Patientenakten bleiben führend.
- **Zeitersparnis:** keine belegte Prozentzahl oder Wirksamkeit zugesagt. Zeit, Nacharbeit, Vollständigkeit, Prüfaufwand und Akzeptanz sind Kriterien einer zukünftigen fallspezifischen Pilotauswertung.
- **Anfrage-Kontext:** `src/schemas/demo-request.ts`, beide Demo-Formulare und `src/lib/staging-receipts.ts` unterstützen `care`, `medicine`, `general`. Tatsächliche Staging-Persistenz wurde für DE/EN und alle drei Ausgangsauswahlen geprüft, einschließlich Wechsel der Auswahl; Testbelege zurückgelesen und gelöscht. Keine Produktionspersistenz des neuen Feldes behauptet.
- **Datenschutz / Hosting:** nur technische Staging-Grenzen: separater privater Blob-Store, keine Weiterleitung an die App, keine Kontakt-/Freitextpersistenz, keine E-Mails und keine externe Analytics. Das ist kein allgemeines DSGVO-Konformitätsversprechen.

## Inhaltsumfang

Gemeinsame Oberflächen: Homepage, Produktübersicht, Preise, Pilotprogramm, Updates-Einstieg, Über uns, Demo, Footer/Newsletter, Forschung/Auswertung und Einsatzbereiche in DE/EN. Eigenständige Pflege-/Medizin-Hubs; bestehende SIS-, Pflegeheim-, ambulante Pflege- und Träger-URLs bleiben fokussiert. Historische DE-only Seiten HLTH und Gründerreise bleiben erhalten.

## Nicht zugesagt

Automatische KIS-/PVS-/Pflegesystem-Integration, vollständige Erkennung aller Fehler, nachgewiesene Zeitersparnis, automatische klinische Entscheidungen, allgemeine rechtliche/DSGVO-Konformität oder breite Freigabe sämtlicher klinischer Einsatzfelder.
