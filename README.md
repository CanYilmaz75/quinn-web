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

`NEXT_PUBLIC_APP_URL` steuert öffentliche Login-Links. `QUINN_APP_URL` wird ausschließlich serverseitig genutzt, um validierte Demo- und Newsletter-Anfragen an die schmalen öffentlichen Endpunkte der App weiterzuleiten. Im Browser befinden sich keine Supabase-Service-Role- oder AI-Schlüssel.

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
