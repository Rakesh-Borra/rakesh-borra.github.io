import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="Graduate training in computer science with a solid undergraduate foundation."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="glass-panel h-full rounded-2xl p-6 hover:-translate-y-0.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.location} · {item.period}
                </p>
                {item.details && item.details.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.achievements && item.achievements.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
