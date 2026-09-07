const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/genzlogics" },
  { label: "Instagram", href: "https://www.instagram.com/genzlogicsofficial/" },
  { label: "Facebook", href: "https://www.facebook.com/genzlogics/" },
  { label: "Thread", href: "https://www.threads.com/@genzlogicsofficial" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-12 text-slate-600 animate-fade-up delay-5">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">GenZLogics</p>
          <p className="mt-4 max-w-sm text-slate-600">
            Python and AI engineering services. I build production-ready applications and automation workflows for businesses.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Services</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>AI/ML Engineering</li>
            <li>Generative AI / LLM Apps</li>
            <li>AI Automation & Workflows</li>
            <li>Python / FastAPI Backend</li>
            <li>Web & Mobile Development</li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href="mailto:genzlogicsofficial@gmail.com" className="block text-slate-700 hover:text-slate-950">
              genzlogicsofficial@gmail.com
            </a>
            <p>+92 3174680971</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Follow</p>
          <div className="mt-4 space-y-3 text-sm">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block text-slate-700 hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-10 text-sm text-slate-500">
        <p>© 2026 GenZLogics. Built by Muhammad Aqeel.</p>
      </div>
    </footer>
  );
}
