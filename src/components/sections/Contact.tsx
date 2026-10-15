import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rakesh-borra-9274511b2",
    href: siteConfig.social.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Rakesh-Borra",
    href: siteConfig.social.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Location",
    value: siteConfig.locationShort,
    href: undefined,
    icon: MapPin,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect"
            description="Open to software engineering, backend, AI/ML, QA automation, and application support roles in the United States."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              if (!item.href) {
                return (
                  <div
                    key={item.label}
                    className="glass-panel rounded-2xl p-6"
                  >
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-panel rounded-2xl p-6 hover:-translate-y-0.5 focus-ring"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8">
            <LinkButton
              href={`mailto:${siteConfig.email}?subject=Opportunity%20for%20Rakesh%20Borra`}
              size="lg"
            >
              <Mail className="h-4 w-4" />
              Email me
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
