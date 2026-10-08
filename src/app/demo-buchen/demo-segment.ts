export type DemoSegment = "" | "care" | "medicine";

export function parseDemoSegment(value: string | string[] | undefined): DemoSegment {
  return value === "care" || value === "medicine" ? value : "";
}
