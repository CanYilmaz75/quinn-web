import { demoRequestSchema } from "@/schemas/demo-request";
import { forwardMarketingRequest, readMarketingJson } from "@/lib/marketing-proxy";

export async function POST(request: Request) {
  const body = await readMarketingJson(request);
  if (!body.ok) {
    return body.response;
  }

  const parsed = demoRequestSchema.safeParse(body.data);
  if (!parsed.success) {
    return Response.json({ error: "Ungültige Demo-Anfrage." }, { status: 400 });
  }

  return forwardMarketingRequest("/api/demo-requests", parsed.data);
}