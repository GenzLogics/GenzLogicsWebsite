"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function sanitizeMarkdown(text: string) {
  return String(text || "")
    .split("```")
    .map((part, index) =>
      index % 2 === 0
        ? part.replace(/<\s*br\s*\/?\s*>/gi, "\n").replace(/<[^>]+>/g, "")
        : part
    )
    .join("```")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [chatSize, setChatSize] = useState<"small" | "normal" | "large">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("chatbot-size") as "small" | "normal" | "large") || "small";
    }
    return "small";
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: string; content: string; severity?: string }>>([
    { role: "assistant", content: "Hi! Ask about GenZLogics services, projects, or say **\"Tell me about GenZLogics\"** for an overview." },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chatbot-size", chatSize);
  }, [chatSize]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();

      if (!response.ok) {
        let msg = data.message || "Something went wrong. Please try again.";
        let severity: "error" | "warning" = "error";
        if (data.error === "unsupported_input" || data.error === "rate_limited" || data.error === "missing_api_key") {
          severity = "warning";
        }
        toast[severity === "warning" ? "warning" : "error"](msg);
        setMessages([...nextMessages, { role: "assistant", content: sanitizeMarkdown(msg), severity }]);
        return;
      }

      setMessages([...nextMessages, { role: "assistant", content: sanitizeMarkdown(data.message) }]);
    } catch {
      const msg = "Unable to reach the chatbot service. Please check your connection.";
      toast.error(msg);
      setMessages([...nextMessages, { role: "assistant", content: sanitizeMarkdown(msg), severity: "error" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot fixed bottom-5 right-5 z-60 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`chatbot-window mb-3 flex-shrink-0 flex flex-col rounded-2xl shadow-2xl origin-bottom-right border border-[color:var(--border)] ${
              chatSize === "small" ? "chatbot-window-small" : chatSize === "large" ? "chatbot-window-large" : ""
            }`}
            style={{ background: "var(--surface-strong)", backdropFilter: "blur(18px)" }}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 px-4 py-3.5" style={{ background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 72%, #000))" }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-white leading-tight">GenZLogics Assistant</p>
                <p className="text-[11px] text-white/70">Software & AI Solutions</p>
              </div>
              <button
                onClick={() => setChatSize("small")}
                disabled={chatSize === "small"}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-default disabled:opacity-40"
                aria-label="Make chatbot smaller"
                title="Make chatbot smaller"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3v5H3M16 3v5h5M8 21v-5H3M16 21v-5h5" />
                </svg>
              </button>
              <button
                onClick={() => setChatSize("large")}
                disabled={chatSize === "large"}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white disabled:cursor-default disabled:opacity-40"
                aria-label="Enlarge chatbot"
                title="Enlarge chatbot"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="min-h-0 min-w-0 flex-1 space-y-2.5 overflow-y-auto p-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`min-w-0 px-3.5 py-2.5 text-[13px] leading-relaxed space-y-1 ${
                    message.role === "user"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[color:var(--accent)] text-white"
                      : message.severity === "error"
                        ? "max-w-[85%] rounded-2xl rounded-bl-md bg-red-500/10 text-red-500 ring-1 ring-red-500/30"
                        : "max-w-[85%] rounded-2xl rounded-bl-md bg-[color:var(--accent-soft)] text-[color:var(--foreground)]"
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h1 className="mt-2 text-sm font-bold">{children}</h1>,
                      h2: ({ children }) => <h2 className="mt-2 text-[13px] font-semibold">{children}</h2>,
                      h3: ({ children }) => <h3 className="mt-1.5 text-[13px] font-medium">{children}</h3>,
                      p: ({ children }) => <p className="break-words">{children}</p>,
                      ul: ({ children }) => <ul className="my-1 ml-4 list-disc space-y-0.5">{children}</ul>,
                      ol: ({ children }) => <ol className="my-1 ml-4 list-decimal space-y-0.5">{children}</ol>,
                      li: ({ children }) => <li className="break-words">{children}</li>,
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="break-all underline">
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-1 border-l-2 border-[color:var(--accent)] pl-3 text-[color:var(--muted)]">
                          {children}
                        </blockquote>
                      ),
                      pre: ({ children }) => (
                        <pre className="my-2 overflow-x-auto rounded-lg bg-black/10 p-2 text-xs dark:bg-white/10">
                          {children}
                        </pre>
                      ),
                      code: ({ children, className }) => (
                        <code className={`${className || ""} rounded bg-black/10 px-1 py-0.5 text-[0.9em] dark:bg-white/10`}>
                          {children}
                        </code>
                      ),
                      table: ({ children }) => (
                        <div className="my-2 min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-lg border border-[color:var(--border)]">
                          <table className="w-max min-w-[28rem] border-collapse text-left text-xs">{children}</table>
                        </div>
                      ),
                      thead: ({ children }) => <thead>{children}</thead>,
                      tbody: ({ children }) => <tbody>{children}</tbody>,
                      tr: ({ children }) => <tr>{children}</tr>,
                      th: ({ children }) => (
                        <th className="border border-[color:var(--border)] px-2 py-1 font-semibold">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="border border-[color:var(--border)] px-2 py-1">{children}</td>
                      ),
                      hr: () => <hr className="my-2 border-[color:var(--border)]" />,
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-[color:var(--accent-soft)] w-fit">
                  <span className="chatbot-dot" style={{ animationDelay: "0ms" }} />
                  <span className="chatbot-dot" style={{ animationDelay: "150ms" }} />
                  <span className="chatbot-dot" style={{ animationDelay: "300ms" }} />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="flex min-w-0 items-center gap-2 border-t border-[color:var(--border)] p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                className="min-w-0 flex-1 rounded-xl border border-[color:var(--border)] bg-transparent px-3.5 py-2 text-sm outline-none transition-colors focus:border-[color:var(--accent)]"
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent)] text-white transition-all disabled:opacity-40 hover:brightness-110 active:scale-90"
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <div className="relative">
        {!open && (
          <span className="absolute -inset-1 rounded-full bg-[color:var(--accent)] opacity-40 animate-ping pointer-events-none" />
        )}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-white shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={open ? "Close chatbot" : "Open chatbot"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.svg
                key="close"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}