import { siteConfig } from "../data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-teal-100 bg-white py-8">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8 sm:text-left">
        <p>
          © {year} {siteConfig.name}. {siteConfig.title}.
        </p>
        <p className="text-teal-700">Teal · Blue · White theme</p>
      </div>
    </footer>
  );
}
