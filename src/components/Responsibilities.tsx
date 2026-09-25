import { complianceResponsibilities } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Responsibilities() {
  return (
    <section id="responsibilities" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="02 / Role scope"
          title="What a Compliance Analyst delivers."
          description="A comprehensive view of typical compliance analyst responsibilities—customize this list in src/data/siteContent.ts to match your experience."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {complianceResponsibilities.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-white bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <span className="mb-2 font-mono text-xs font-semibold text-teal-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
