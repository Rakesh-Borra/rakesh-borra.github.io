import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials"
            description="Completed coursework and certificates. Verification links are added as they become available."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.05}>
              <article className="glass-panel flex h-full flex-col rounded-2xl p-6 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 text-xs font-medium",
                      cert.status === "Completed"
                        ? "bg-success/15 text-success"
                        : "bg-warning/15 text-warning",
                    )}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
                {cert.completedAt ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.completedAt}
                  </p>
                ) : null}
                <div className="mt-auto pt-5">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent focus-ring rounded-md"
                    >
                      View certificate
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Verification link coming soon
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
