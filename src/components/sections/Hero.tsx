"use client";

import { LinkButton } from "@/components/ui/Button";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { siteConfig } from "@/data/site";
import { resumes } from "@/data/resumes";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const primaryResume = resumes.find((r) => r.id === "swe-backend");
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />

      <div className="section-container relative z-10 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-16 xl:gap-20">
          <div>
            <motion.p
              className="mb-5 text-sm font-medium tracking-wide text-muted sm:text-base"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Welcome to my portfolio.
            </motion.p>

            <motion.h1
              className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.65rem] lg:leading-[1.06]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
            >
              Hi, I&apos;m {siteConfig.name}.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-2xl font-display text-lg font-medium tracking-tight text-muted sm:text-xl md:text-2xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease }}
            >
              {siteConfig.headline}
            </motion.p>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease }}
            >
              MS Computer Science student at UMass Boston building scalable
              applications, reliable backend systems, and practical AI-powered
              solutions.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease }}
            >
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
            </motion.div>

            <motion.a
              href="#about"
              className="mt-14 inline-flex items-center gap-2 rounded-md text-sm text-muted transition-colors hover:text-foreground focus-ring"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.32 }}
            >
              Learn more
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfilePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
