import { z } from "zod";

const trimmedRequiredString = z.string().trim().min(1).max(160);

export const demoRequestSchema = z.object({
  firstName: trimmedRequiredString.max(80),
  lastName: trimmedRequiredString.max(80),
  email: z.string().trim().toLowerCase().email().max(254),
  phone: trimmedRequiredString.max(60),
  organisation: trimmedRequiredString.max(180),
  teamSize: z.enum(["1-5", "6-20", "21-50", "50+"]),
  country: trimmedRequiredString.max(80),
  interest: z.string().trim().min(5).max(2000),
  consent: z.literal(true),
  locale: z.enum(["de", "en"]).default("de"),
  source: z.enum(["demo-buchen", "book-demo", "pricing", "public-site", "other"]).default("demo-buchen"),
  website: z.string().max(0).optional()
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;
