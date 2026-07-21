const appUrl = (process.env.QUINN_APP_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quinnhealth.de").replace(/\/$/, "");

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

    const body = await response.json();
    return Response.json(body, { status: response.status });
  } catch {
    return Response.json({ error: "Der Speicherdienst ist derzeit nicht erreichbar." }, { status: 502 });
  }
}