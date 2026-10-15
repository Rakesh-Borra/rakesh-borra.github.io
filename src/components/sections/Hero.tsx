"use client";

import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { resumes } from "@/data/resumes";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const primaryResume = resumes.find((r) => r.id === "swe-backend");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />

      {!prefersReducedMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <div className="section-container relative z-10 py-20 sm:py-28">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Open to entry-level software engineering roles
          </p>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 max-w-2xl font-display text-lg text-muted sm:text-xl md:text-2xl">
            {siteConfig.headline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            MS Computer Science student at UMass Boston building scalable
            applications, reliable backend systems, and practical AI-powered
            solutions. Focused on clean architecture, thoughtful APIs, and
            software that holds up in real use.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary" size="lg">
              View Projects
            </LinkButton>
            {primaryResume?.available ? (
              <LinkButton
                href={`/resumes/${primaryResume.filename}`}
                variant="outline"
                size="lg"
                download={primaryResume.filename}
              >
                Download Resume
              </LinkButton>
            ) : (
              <LinkButton href="#resume" variant="outline" size="lg">
                Download Resume
              </LinkButton>
            )}
            <LinkButton
              href={siteConfig.social.github}
              variant="ghost"
              size="lg"
              external
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </LinkButton>
            <LinkButton
              href={siteConfig.social.linkedin}
              variant="ghost"
              size="lg"
              external
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </LinkButton>
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-ring rounded-md"
          >
            Learn more
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
