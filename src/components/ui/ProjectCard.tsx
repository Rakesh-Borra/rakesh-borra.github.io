import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group glass-panel flex h-full flex-col rounded-2xl p-6 sm:p-7",
        "hover:-translate-y-1",
        featured && "lg:p-8",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-xs font-medium",
            project.status === "Completed"
              ? "bg-success/15 text-success"
              : "bg-warning/15 text-warning",
          )}
        >
          {project.status}
        </span>
        {featured ? (
          <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
            Featured
          </span>
        ) : null}
        {project.categories.slice(0, 2).map((category) => (
          <span
            key={category}
            className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
          >
            {category}
          </span>
        ))}
      </div>

      <h3
        className={cn(
          "mt-4 font-display font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent",
          featured ? "text-2xl" : "text-xl",
        )}
      >
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
        {project.shortDescription}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, featured ? 5 : 3).map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {project.contributionSummary ? (
        <p className="mt-5 text-sm leading-relaxed text-muted">
          <span className="font-medium text-foreground">My contributions: </span>
          {project.contributionSummary}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/80 bg-background/30 px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground transition-colors hover:text-accent focus-ring"
          >
            <GitHubIcon className="h-4 w-4" />
            {project.githubLabel ?? "GitHub"}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">
            Repository link coming soon
          </span>
        )}
        {project.contributionsUrl ? (
          <a
            href={project.contributionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground transition-colors hover:text-accent focus-ring"
          >
            My Contributions
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-foreground transition-colors hover:text-accent focus-ring"
          >
            Live demo
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
