import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building reliable software with strong fundamentals"
            description="A concise look at my background and the kind of engineering work I enjoy."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I am a Computer Science master&apos;s student at the{" "}
              {siteConfig.education.graduate.school}, expected to graduate in{" "}
              {siteConfig.education.graduate.expectedGraduation}. My work sits
              at the intersection of software development, backend engineering,
              and artificial intelligence.
            </p>
            <p>
              I enjoy designing clear APIs, structuring data thoughtfully, and
              turning research ideas into usable applications. Recent projects
              range from a clinical protocol analysis platform powered by local
              LLMs to a real-time real estate investment analysis app and a
              computer-vision traffic monitoring system.
            </p>
            <p>
              I am looking for entry-level opportunities where I can contribute
              careful engineering, learn from strong teams, and help build
              products that are useful, maintainable, and trustworthy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
