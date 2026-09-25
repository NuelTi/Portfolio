import { experience } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-teal-50/50 to-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Built close to the control environment."
          description="Compliance analyst experience at Amazon in logistics and e-commerce—edit dates, location, and bullets in siteContent.ts anytime."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-teal-600">{job.period}</p>
                  <h3 className="mt-1 text-2xl font-bold text-brand-navy">
                    {job.company}
                  </h3>
                  <p className="text-lg font-medium text-slate-700">{job.role}</p>
                </div>
                <div className="text-sm text-slate-500">
                  <p>{job.location}</p>
                  <p>{job.industry}</p>
                </div>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-brand-navy/5 px-2 py-1 text-xs font-medium text-brand-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
