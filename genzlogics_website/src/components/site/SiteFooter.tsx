import Link from "next/link";

const columns = [
  { title: "Company", links: [["About", "/about"], ["Work", "/work"], ["Contact", "/contact"]] },
  { title: "Services", links: [["AI & Automation", "/services"], ["Software Development", "/services"], ["Cloud & DevOps", "/services"]] },
  { title: "Solutions", links: [["Startups", "/solutions"], ["Business Systems", "/solutions"], ["AI Products", "/solutions"]] },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:px-8">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">GenZLogics</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">We design and build practical software, AI systems, and digital products that help businesses move forward.</p>
          <a href="mailto:contact@genzlogics.com" className="mt-6 inline-block text-sm font-medium text-white hover:underline">contact@genzlogics.com</a>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map(([label, href]) => <li key={label}><Link href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 GenZLogics. All rights reserved.</p>
          <div className="flex gap-5"><a href="https://www.linkedin.com/company/genzlogics" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a><a href="https://www.instagram.com/genzlogicsofficial/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></div>
        </div>
      </div>
    </footer>
  );
}
