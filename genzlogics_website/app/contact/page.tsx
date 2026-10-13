import PageShell from "@/src/components/site/PageShell";
import ContactForm from "@/src/components/landing/ContactForm";

export default function ContactPage() {
  return (
    <PageShell>
      <div className="hero-canvas">
        <span className="hero-orb left-[6%] top-[12%] h-56 w-56 bg-brand-green/18" />
        <div className="hero-content mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Contact</p>
            <h1 className="reveal reveal-d1 mt-6 text-4xl font-semibold tracking-[-0.06em] text-heading sm:text-5xl lg:text-6xl">
              Let’s talk about what you’re building.
            </h1>
            <p className="reveal reveal-d2 mt-7 text-lg leading-8 text-muted">
              Share the problem, the idea, or the current setup. We’ll help you understand the right next step and the most practical way to move forward.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="contact-panel surface rounded-[1.75rem] p-7">
              <div className="space-y-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Email</p>
                  <a href="mailto:genzlogicsofficial@gmail.com" className="mt-2 block text-lg font-medium text-heading transition hover:text-brand-green">
                    genzlogicsofficial@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Phone</p>
                  <p className="mt-2 text-lg font-medium text-heading">+92 3174680971</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Project fit</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    For new inquiries, include your goals, timeline, and any technical notes already in place. It helps us respond with something useful immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-panel surface rounded-[1.75rem] p-7 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
