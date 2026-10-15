import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description="Roles that demonstrate communication, ownership, and reliability."
          />
        </Reveal>

        <ol className="relative mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <li className="relative">
                <span
                  className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[2.4rem]"
                  aria-hidden
                />
                <div className="glass-panel rounded-2xl p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.organization}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
