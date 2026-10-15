"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  projectFilters,
  projects,
  type ProjectCategory,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All Projects");

  const featured = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  );

  const filtered = useMemo(() => {
    if (filter === "All Projects") return projects;
    return projects.filter((project) =>
      project.categories.includes(filter as ProjectCategory),
    );
  }, [filter]);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured engineering work"
            description="Start with Clinical Trial AI and Real Estate Analysis — then explore the full project set by category."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                All projects
              </h3>
              <p className="mt-2 text-sm text-muted">
                Filter by role focus. Projects can appear in more than one
                category.
              </p>
            </div>
          </div>
        </Reveal>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project filters"
        >
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-sm transition-colors focus-ring backdrop-blur-sm",
                filter === item
                  ? "border-accent/40 bg-accent-soft text-foreground shadow-[0_0_0_1px_var(--accent-soft)]"
                  : "border-border bg-background-elevated/30 text-muted hover:border-foreground/20 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={`${filter}-${project.id}`} delay={index * 0.04}>
              <ProjectCard project={project} featured={project.featured} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-muted">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
