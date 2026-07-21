import { newsletterSignupSchema } from "@/schemas/newsletter";
import { forwardMarketingRequest, readMarketingJson } from "@/lib/marketing-proxy";

const sourceAliases = {
  "footer-en": "footer",
  "after-consent-en": "after-consent",
  "pricing-en": "pricing"
} as const;

export async function POST(request: Request) {
  const requestBody = await readMarketingJson(request);
  if (!requestBody.ok) {
    return requestBody.response;
  }

  const body = requestBody.data;
  if (body && typeof body === "object" && "source" in body && typeof body.source === "string") {
    body.source = sourceAliases[body.source as keyof typeof sourceAliases] ?? body.source;
  }

  const parsed = newsletterSignupSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Ungültige Newsletter-Anmeldung." }, { status: 400 });
  }

  return forwardMarketingRequest("/api/newsletter", parsed.data);
}