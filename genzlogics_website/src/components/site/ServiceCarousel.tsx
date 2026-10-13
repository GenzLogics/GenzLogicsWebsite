"use client";

import { useEffect, useMemo, useState } from "react";

type Service = { title: string; description: string };

export default function ServiceCarousel({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(true);
  const items = useMemo(() => [...services, ...services.slice(0, 3)], [services]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => value + 1), 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: -1 | 1) => {
    setTransitioning(true);
    setActive((value) => (value + direction + services.length) % services.length);
  };

  return (
    <div
      className="service-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="service-carousel-viewport">
        <div
          className={`service-carousel-track${transitioning ? " is-animated" : ""}`}
          style={{ transform: `translate3d(calc(var(--service-step) * -${active}), 0, 0)` }}
          onTransitionEnd={() => {
            if (active >= services.length) {
              setTransitioning(false);
              setActive(0);
            }
          }}
        >
          {items.map((service, index) => (
            <article className="service-carousel-card service-card surface" key={`${service.title}-${index}`}>
              <div className="flex items-center justify-between text-muted">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">{String((index % services.length) + 1).padStart(2, "0")}</span>
                <span className="text-lg text-brand-green transition group-hover:translate-x-1">↗</span>
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-heading">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <span className="mt-7 inline-flex items-center text-sm font-semibold text-brand-green">Learn more <span className="ml-2">→</span></span>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label="Carousel position">
          {services.slice(0, Math.min(services.length, 6)).map((service, index) => (
            <button key={service.title} type="button" aria-label={`Show service group ${index + 1}`} onClick={() => { setTransitioning(true); setActive(index); }} className={`service-carousel-dot${active % services.length === index ? " is-active" : ""}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" className="service-carousel-control" onClick={() => move(-1)} aria-label="Previous services">←</button>
          <button type="button" className="service-carousel-control" onClick={() => move(1)} aria-label="Next services">→</button>
        </div>
      </div>
    </div>
  );
}
