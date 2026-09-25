import { processSteps } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-padding bg-brand-navy text-white">
      <div className="container-narrow">
        <SectionHeading
          theme="dark"
          eyebrow="06 / Method"
          title="From regulatory change to sustained compliance."
          description="A practical loop that keeps policies, people, and controls aligned."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <span className="font-mono text-sm font-bold text-teal-300">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
