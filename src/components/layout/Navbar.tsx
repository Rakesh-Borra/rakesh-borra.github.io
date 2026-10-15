"use client";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteConfig.nav.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.3, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        scrolled || open
          ? "border-border/80 bg-nav-bg shadow-[0_8px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        className="section-container flex h-16 items-center justify-between md:h-[4.25rem]"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-tight text-foreground focus-ring rounded-md"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <div className="nav-shell hidden lg:block">
          <div className="nav-shell-inner">
            <ul className="flex items-center gap-0.5 p-1">
              {siteConfig.nav.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "relative rounded-full px-3.5 py-1.5 text-sm transition-colors focus-ring",
                        isActive
                          ? "nav-link-active text-foreground"
                          : "text-muted hover:bg-white/5 hover:text-foreground dark:hover:bg-white/5",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background-elevated/50 text-foreground backdrop-blur-md focus-ring lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-nav-bg backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="section-container flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-3 text-base focus-ring",
                  active === item.href
                    ? "bg-accent-soft text-foreground"
                    : "text-muted hover:bg-foreground/5 hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
