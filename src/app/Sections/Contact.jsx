"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ext = { target: "_blank", rel: "noopener noreferrer" };

const field =
  "mt-1.5 w-full rounded-[4px] border border-rule bg-sheet px-3.5 py-2.5 text-[1rem] placeholder:text-mute focus-visible:border-pen";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    const id = toast.loading("Sending message");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: e.target.website?.value || "" }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      toast.success("Message sent", { id });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Message not sent. Please email me directly at adesuwaaiwerioghene12@gmail.com", { id, duration: 8000 });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Contact</h2>
      <div className="mt-6 grid gap-12 border-t border-rule pt-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="max-w-[40ch] text-[1.125rem] leading-relaxed">
            I am open to remote engineering roles and contract work. Email is the fastest way to
            reach me.
          </p>
          <dl className="mt-8 divide-y divide-rule border-y border-rule">
            {[
              ["Email", "adesuwaaiwerioghene12@gmail.com", "mailto:adesuwaaiwerioghene12@gmail.com"],
              ["GitHub", "daysuwaa", "https://github.com/daysuwaa"],
              ["LinkedIn", "Adesuwa Aiwerioghene", "https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/"],
              ["X", "@daysuwaa_a", "https://x.com/daysuwaa_a"],
              ["Location", "Lagos, Nigeria"],
            ].map(([k, v, href]) => (
              <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-mute">{k}</dt>
                <dd className="break-words">
                  {href ? (
                    <a href={href} className="link" {...(href.startsWith("http") ? ext : {})}>
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div>
            <label htmlFor="c-name" className="font-medium">
              Your name
            </label>
            <input id="c-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
          </div>
          <div>
            <label htmlFor="c-email" className="font-medium">
              Your email
            </label>
            <input id="c-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
          </div>
          <div>
            <label htmlFor="c-msg" className="font-medium">
              Message
            </label>
            <textarea id="c-msg" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="rounded-[4px] bg-ink px-5 py-3 font-medium text-paper hover:opacity-90 disabled:opacity-50"
          >
            {sending ? "Sending" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
