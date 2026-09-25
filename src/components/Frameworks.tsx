import { certifications, frameworks } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Frameworks() {
  return (
    <section id="frameworks" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="05 / Knowledge base"
          title="Regulatory frameworks & credentials."
          description="Domains and standards I work with or support—update to reflect your sector and qualifications."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-brand-navy">
              Frameworks & regulations
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {frameworks.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-teal-100 bg-teal-50/40 px-3 py-2 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-navy">
              Certifications & training
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-sky-100 bg-sky-50/50 px-4 py-3 text-sm text-slate-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
