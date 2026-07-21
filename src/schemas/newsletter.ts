import { z } from "zod";

export const newsletterSignupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.enum(["footer", "after-consent", "pricing"]).default("footer"),
  website: z.string().max(0).optional()
});

export type NewsletterSignupInput = z.infer<typeof newsletterSignupSchema>;
