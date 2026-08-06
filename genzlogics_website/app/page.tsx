import Footer from "@/src/components/landing/Footer";
import ContactForm from "@/src/components/landing/ContactForm";
import FeatureCard from "@/src/components/landing/FeatureCard";
import Header from "@/src/components/landing/Header";
import Reveal from "@/src/components/landing/Reveal";
import SectionHeader from "@/src/components/landing/SectionHeader";
import ServicesList from "@/src/components/landing/ServicesList";
import StatCard from "@/src/components/landing/StatCard";
import TestimonialCard from "@/src/components/landing/TestimonialCard";
import { services } from "@/src/data/services";

const stats = [
  { value: "120+", label: "Projects delivered worldwide" },
  { value: "30+", label: "Brands powered by our teams" },
  { value: "100%+", label: "Growth focus on every campaign" },
];

const workflow = [
  {
    title: "Strategy",
    description: "We define the right product, brand, and growth strategy for your audience and market.",
  },
  {
    title: "Execution",
    description: "Our teams build scalable web apps, mobile experiences, and marketing campaigns with speed and precision.",
  },
  {
    title: "Optimization",
    description: "We monitor performance and refine every launch so it keeps generating customer value.",
  },
];

const testimonials = [
  {
    name: "Asha Patel",
    role: "Founder, BrightLine",
    quote:
      "GenZLogics launched our digital platform fast and helped us generate more quality leads in 60 days.",
  },
  {
    name: "Kunal Mehta",
    role: "Marketing Head, Nova Tech",
    quote:
      "Their team delivered a polished product and a marketing plan that actually moved the needle.",
  },
];

const strengths = [
  "Complete digital services in one team",
  "Fast iterations and transparent delivery",
  "Growth-led product and campaign design",
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950 animate-page-enter">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
        <Header />

        <Reveal className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" delay={1}>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Trusted global partner
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Where ideas become technology for the next generation of digital businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              GenZLogics delivers end-to-end technology and digital marketing solutions to help businesses grow, scale, and compete globally. We combine software, design, and performance marketing into one seamless growth engine.
            </p>
            <Reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center" delay={2}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold !text-white transition hover:bg-slate-800 hover:!text-white animate-btn-enter"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 animate-btn-enter"
              >
                Explore services
              </a>
            </Reveal>
          </div>

          <Reveal className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm" delay={3}>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Business snapshot
            </p>
            <div className="mt-8 grid gap-5">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </Reveal>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={4}>
          <section id="services">
          <SectionHeader
            eyebrow="Services"
            title="Built for ambitious teams and modern brands."
            body="From product strategy to execution, we deliver every stage of your digital journey with clarity, speed, and measurable results."
          />
          <ServicesList items={services} />
          </section>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={5}>
          <section>
          <SectionHeader
            eyebrow="Why choose us"
            title="Professional execution with measurable business impact."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {strengths.map((item) => (
              <FeatureCard key={item} title={item} description="" />
            ))}
          </div>
        </section>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-lg sm:px-10" delay={6}>
          <section
            id="approach"
          >
          <SectionHeader
            eyebrow="Approach"
            title="Design, develop, and grow with purpose."
            body="We combine strategy, execution, and optimization so every launch improves business outcomes."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <div key={item.title}>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="mt-3 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          </section>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={6}>
          <section id="about">
          <SectionHeader
            eyebrow="About GenZLogics"
            title="Technology and marketing combined for meaningful growth."
            body="We are a global IT and digital solutions company helping businesses move faster with custom development, design, branding, and performance marketing."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Global reach"
              description="Serving businesses across industries and time zones."
            />
            <FeatureCard
              title="End-to-end support"
              description="From strategy to launch and beyond."
            />
            <FeatureCard
              title="Performance focus"
              description="Every project is built to deliver measurable results."
            />
          </div>
          </section>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={7}>
          <section id="testimonials">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by teams building the future."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.name}
                name={item.name}
                role={item.role}
                quote={item.quote}
              />
            ))}
          </div>
          </section>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-slate-200 bg-white px-8 py-12 shadow-sm sm:px-10" delay={7}>
          <section id="contact">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Ready to grow?
              </p>
              <h2 className="text-3xl font-semibold text-slate-950">Let’s build something powerful.</h2>
              <p className="text-slate-600">
                Share your vision and we’ll help you turn it into a digital product or campaign that performs.
              </p>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-950">Contact details</p>
                <p className="mt-4 text-sm text-slate-600">contact@genzlogics.com</p>
                <p className="mt-2 text-sm text-slate-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </Reveal>
    </div>

    <Reveal delay={8}>
        <Footer />
      </Reveal>

      <Reveal className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold !text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800 hover:!text-white md:bottom-8 md:right-8" delay={8}>
        <a href="mailto:contact@genzlogics.com">Contact us</a>
      </Reveal>
    </main>
  );
}
