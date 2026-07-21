import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-secondary-foreground">
        Die angeforderte Quinn-Seite wurde nicht gefunden. Über die Startseite gelangen Sie zurück zu unseren öffentlichen Informationen.
      </p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </main>
  );
}
