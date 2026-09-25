import { siteConfig } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-teal-600 to-brand-blue text-white">
      <div className="container-narrow">
        <SectionHeading
          theme="dark"
          eyebrow="07 / Contact"
          title="Discuss compliance, risk, or your next role."
          description="Open to compliance analyst opportunities, contract advisory, and cross-functional projects in regulated environments."
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Email — {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            LinkedIn profile ↗
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-8 text-sm text-teal-100">{siteConfig.location}</p>
      </div>
    </section>
  );
}
