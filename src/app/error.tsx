"use client";

import { Button, LinkButton } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <div className="section-container max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Error
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          An unexpected error occurred while loading this page. You can try
          again or return home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={reset}>Try again</Button>
          <LinkButton href="/" variant="outline">
            Back to home
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
