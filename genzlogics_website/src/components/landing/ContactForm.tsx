"use client";

import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "ai-generative", label: "AI & Generative AI" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "custom-software", label: "Custom Software" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "cloud-devops", label: "Cloud / DevOps" },
  { value: "python-fastapi", label: "Python & FastAPI" },
  { value: "ui-ux-design", label: "UI/UX & Product Design" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const resetStatus = () => {
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !service || !message) {
      setError("Please complete all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed.");
      }

      setName("");
      setEmail("");
      setService("");
      setMessage("");
      setSubmitted(true);
    } catch (error) {
      setError("Unable to send request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up delay-2">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-900">Name</span>
          <input
            value={name}
            onChange={(event) => {
              resetStatus();
              setName(event.target.value);
            }}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            type="text"
            placeholder="Your name"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-900">Email</span>
          <input
            value={email}
            onChange={(event) => {
              resetStatus();
              setEmail(event.target.value);
            }}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-900">What do you need?</span>
        <select
          value={service}
          onChange={(event) => {
            resetStatus();
            setService(event.target.value);
          }}
          className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
          required
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-900">Message</span>
        <textarea
          value={message}
          onChange={(event) => {
            resetStatus();
            setMessage(event.target.value);
          }}
          className="min-h-[170px] w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
          placeholder="Tell us about your project, timeline, and budget."
          required
        />
      </label>
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
      {submitted ? (
        <p className="rounded-3xl bg-emerald-100 px-4 py-3 text-sm text-emerald-700">
          Thank you! Your message has been sent.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
