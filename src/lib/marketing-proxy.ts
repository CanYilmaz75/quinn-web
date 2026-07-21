const appUrl = (process.env.QUINN_APP_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quinnhealth.de").replace(/\/$/, "");
const maxMarketingPayloadBytes = 16_384;

export async function readMarketingJson(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > maxMarketingPayloadBytes) {
    return { ok: false as const, response: Response.json({ error: "Die Anfrage ist zu groß." }, { status: 413 }) };
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxMarketingPayloadBytes) {
    return { ok: false as const, response: Response.json({ error: "Die Anfrage ist zu groß." }, { status: 413 }) };
  }

  try {
    return { ok: true as const, data: JSON.parse(text) as unknown };
  } catch {
    return { ok: false as const, response: Response.json({ error: "Ungültige Anfrage." }, { status: 400 }) };
  }
}

export async function forwardMarketingRequest(path: "/api/demo-requests" | "/api/newsletter", payload: unknown) {
  try {
    const response = await fetch(`${appUrl}${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "user-agent": "quinn-web/1.0"
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000)
    });

    if (!response.ok) {
      return Response.json({ error: "Die Anfrage konnte nicht gespeichert werden." }, { status: response.status });
    }

    return Response.json({ ok: true }, { status: response.status });
  } catch {
    return Response.json({ error: "Der Speicherdienst ist derzeit nicht erreichbar." }, { status: 502 });
  }
}