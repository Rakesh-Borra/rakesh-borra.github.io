import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            description="Organized by area so recruiters can quickly scan relevant strengths."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
