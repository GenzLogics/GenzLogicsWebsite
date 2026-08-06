const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/genzlogics" },
  { label: "Twitter", href: "https://twitter.com/genzlogics" },
  { label: "Instagram", href: "https://instagram.com/genzlogics" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-12 text-slate-600 animate-fade-up delay-5">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">GenZLogics</p>
          <p className="mt-4 max-w-sm text-slate-600">
            End-to-end IT, digital product, and growth services for brands that want to scale globally.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Services</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Software development</li>
            <li>Design & branding</li>
            <li>Marketing & social media</li>
            <li>Product strategy</li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href="mailto:contact@genzlogics.com" className="block text-slate-700 hover:text-slate-950">
              contact@genzlogics.com
            </a>
            <p>+1 234 567 890</p>
            <p>123 Innovation Avenue, Bangalore, India</p>
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
        <p>© 2026 GenZLogics. Built for modern IT, software, and digital marketing teams.</p>
      </div>
    </footer>
  );
}
