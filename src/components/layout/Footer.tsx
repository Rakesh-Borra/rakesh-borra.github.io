import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated/80 backdrop-blur-md">
      <div className="section-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.headline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/40 text-muted transition-colors hover:text-foreground focus-ring"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/40 text-muted transition-colors hover:text-foreground focus-ring"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/40 text-muted transition-colors hover:text-foreground focus-ring"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="section-container border-t border-border py-5">
        <p className="text-xs text-muted-foreground">
          © 2026 {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
