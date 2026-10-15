"use client";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

type ProfilePortraitProps = {
  className?: string;
};

export function ProfilePortrait({ className }: ProfilePortraitProps) {
  const { profile } = siteConfig;
  const src = profile.hasPhoto ? profile.imageSrc : profile.placeholderSrc;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative mx-auto w-fit shrink-0", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,var(--portrait-glow)_0%,transparent_68%)] opacity-90 blur-sm"
        aria-hidden
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem]",
          "border border-white/55 dark:border-white/35",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_-28px_rgba(0,0,0,0.65)]",
          "ring-1 ring-white/20 dark:ring-white/10",
        )}
      >
        <div className="relative aspect-[4/5] h-auto w-44 sm:w-52 md:w-60 lg:w-64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={profile.alt}
            width={640}
            height={800}
            className="h-full w-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
      {!profile.hasPhoto ? (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Photo placeholder — replace when ready
        </p>
      ) : null}
    </motion.div>
  );
}
