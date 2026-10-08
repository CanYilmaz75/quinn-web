# Quinn Web

Öffentliche Website für [quinnhealth.de](https://quinnhealth.de).

## Repository-Grenze

Dieses Repository enthält ausschließlich die öffentliche Quinn-Website:

- deutsche und englische Marketing-, Produkt- und Informationsseiten
- öffentliche Markenassets
- SEO, Sitemap, Robots und Cookie-Einstellungen
- Demo- und Newsletter-Formulare

Nicht enthalten sind Authentifizierung, geschützte Workspaces, klinische APIs, Supabase-Administration, AI-Provider, Datenbankmigrationen oder andere Produkt-Interna. Diese liegen im privaten Repository `quinn-app`.

## Lokale Entwicklung

```bash
npm ci
npm run dev
```

Optionale Umgebungsvariablen:

```bash
NEXT_PUBLIC_APP_URL=https://app.quinnhealth.de
QUINN_APP_URL=https://app.quinnhealth.de
```

Login und Marketing-Proxy sind bewusst auf `https://app.quinnhealth.de` festgelegt; die oben genannten historischen Variablen überschreiben diese Grenze nicht. Im Browser befinden sich keine Supabase-Service-Role- oder AI-Schlüssel.

## Staging → Produktion

Die öffentlichen DE/EN-Oberflächen aus `quinn-web-staging` werden selektiv übernommen. Produktion läuft im Vercel-Projekt `quinn-pws`, Git-Branch `quinn-web/main`, unter `https://quinnhealth.de`.

- Pflege und Medizin sind gleichwertige Einstiege; Produktübersicht und Prüfung/Qualität haben eigene Sprachpaare.
- Demo-Bereich bleibt editierbar. Da die App noch kein separates Segmentfeld persistiert, wird eine gewählte Zielgruppe zusätzlich im vorhandenen `interest`-Feld gespeichert; allgemeine Anfragen bleiben ohne Vorwahl.
- Echte Demo-/Newsletter-Anfragen gehen über den bestehenden App-Proxy. Keine Staging-Receipts, Blob-Storage oder synthetische E-Mail-Beschränkung in Produktion.
- Canonicals, vollständige Sitemap, Robots, Login und consent-gated Vercel Analytics bleiben Produktionsfunktionen. Staging bleibt separat geschützt und nicht indexierbar.
- Vorherige Produktions-SHAs bleiben als Git-Rollback verfügbar. Nach Push Deployment-SHA, Live-Routen, Form-Persistenz und QA-Cleanup verifizieren.

Verfügbare Sicherheitspatches wurden aktualisiert. Der ungepatchte `braces`-Befund betrifft derzeit die Entwicklungs-/Build-Abhängigkeiten; `npm audit --omit=dev --audit-level=high` ist separat von der vollständigen CI-Audit-Schranke zu prüfen. Die vollständige Schranke darf nicht stillschweigend abgeschwächt werden.

## Qualitätsprüfungen

```bash
npm test
npm run typecheck
npm run lint
npm run build
npm audit --audit-level=high
```

## Herkunft

Der öffentliche Code wurde als Clean Export aus dem kombinierten Quinn-Repository auf Basis von Commit `1271efad4e4b6c1659dbc8b7218f40018b58290a` übernommen. Die frühere App-Historie ist nicht Bestandteil dieses Repositories.
