import { demoRequestSchema } from "@/schemas/demo-request";
import { forwardMarketingRequest } from "@/lib/marketing-proxy";

export async function POST(request: Request) {
  const parsed = demoRequestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Ungültige Demo-Anfrage." }, { status: 400 });
  }

  return forwardMarketingRequest("/api/demo-requests", parsed.data);
}