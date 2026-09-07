import PageShell from "@/src/components/site/PageShell";
import ContactForm from "@/src/components/landing/ContactForm";

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Let’s talk about what you’re building.
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-600">
            Share the problem, the idea, or the current setup. We’ll help you understand the right next step and the most practical way to move forward.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
            <div className="space-y-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Email</p>
                <a href="mailto:genzlogicsofficial@gmail.com" className="mt-2 block text-lg font-medium text-slate-950 transition hover:text-brand-green">
                  genzlogicsofficial@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Phone</p>
                <p className="mt-2 text-lg font-medium text-slate-950">+92 3174680971</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Project fit</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  For new inquiries, include your goals, timeline, and any technical notes already in place. It helps us respond with something useful immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
