import { focusAreas, siteConfig } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="01 / About"
          title="Align regulation with how logistics and e-commerce actually operate."
          description={`Effective compliance in ${siteConfig.industry} connects legal requirements to fulfillment, marketplace, and customer workflows—and gives leadership clear visibility into risk and control performance.`}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-teal-100 bg-teal-50/30 p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-brand-navy">
              Operating range
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Regulatory change → policy & controls → training & monitoring →
              testing & issues → management reporting → continuous improvement.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I work with Legal, Operations, Risk, Audit, and Technology to
              ensure obligations are understood, controls are evidenced, and
              remediation is tracked to closure.
            </p>
          </article>

          <aside className="rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-6">
            <h3 className="text-lg font-semibold text-brand-navy">Focus areas</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
