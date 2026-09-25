import { complianceFlow, siteConfig } from "../data/siteContent";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/40 to-sky-50 section-padding">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
            {siteConfig.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-base text-slate-500">{siteConfig.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#responsibilities"
              className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-700"
            >
              View responsibilities
            </a>
            <a
              href="#contact"
              className="rounded-full border border-brand-blue/30 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-sky-50"
            >
              Contact
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-teal-100 bg-white/80 p-3 text-center shadow-sm"
              >
                <dt className="text-xl font-bold text-brand-navy">{stat.value}</dt>
                <dd className="mt-1 text-xs text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-teal-100 bg-white p-6 shadow-xl shadow-teal-900/5">
          <p className="font-mono text-xs text-teal-600">compliance.program</p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Reference operating model · illustrative
          </p>
          <ul className="mt-6 space-y-3">
            {complianceFlow.map((node) => (
              <li
                key={node.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-gradient-to-r from-white to-teal-50/50 px-4 py-3"
              >
                <span className="text-sm font-semibold text-brand-navy">
                  <span className="mr-2 font-mono text-teal-600">{node.id}</span>
                  {node.label}
                </span>
                <span className="hidden font-mono text-xs text-slate-400 sm:inline">
                  {node.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
