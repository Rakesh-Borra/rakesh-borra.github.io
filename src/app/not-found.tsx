import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <div className="section-container max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The page you requested does not exist. Head back to{" "}
          {siteConfig.name}&apos;s portfolio homepage.
        </p>
        <div className="mt-8">
          <LinkButton href="/">Back to home</LinkButton>
        </div>
      </div>
    </section>
  );
}
