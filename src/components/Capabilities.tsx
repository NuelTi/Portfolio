import { capabilityAreas } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Capabilities() {
  return (
    <section id="capabilities" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="03 / Capabilities"
          title="Skills across the compliance lifecycle."
          description="From interpreting regulation to testing controls and reporting to committees."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {capabilityAreas.map((area) => (
            <article
              key={area.id}
              className="rounded-2xl border border-teal-100 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-teal-600">
                  {area.id}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{area.subtitle}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 ring-1 ring-teal-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
