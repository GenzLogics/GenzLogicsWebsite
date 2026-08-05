"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

    if (!name || !email || !message) {
      setError("Please complete all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Submission failed.");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } catch (error) {
      setError("Unable to send request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-900">Message</span>
        <textarea
          value={message}
          onChange={(event) => {
            resetStatus();
            setMessage(event.target.value);
          }}
          className="min-h-[170px] w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
          placeholder="Tell us about your project"
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
        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
