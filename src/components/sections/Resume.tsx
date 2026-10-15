import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resumes } from "@/data/resumes";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Role-specific resumes"
            description="Choose the version that best matches the role you are hiring for."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {resumes.map((resume, index) => (
            <Reveal key={resume.id} delay={index * 0.05}>
              <article className="glass-panel flex h-full flex-col rounded-2xl p-6 hover:-translate-y-0.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {resume.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {resume.description}
                </p>
                <div className="mt-6">
                  {resume.available ? (
                    <LinkButton
                      href={`/resumes/${resume.filename}`}
                      variant="outline"
                      className="w-full"
                      download={resume.filename}
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </LinkButton>
                  ) : (
                    <p className="rounded-lg border border-dashed border-border px-4 py-3 text-center text-sm text-muted-foreground">
                      PDF coming soon
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
