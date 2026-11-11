import { NextResponse } from "next/server";
import { notificationEmail, autoReplyEmail } from "./mail";

export const runtime = "nodejs";

const clean = (v, max) => String(v ?? "").trim().slice(0, max);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  // Hidden field that real visitors never fill in. Bots usually do.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const send = (payload) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
  const when = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Lagos" }).format(new Date());

  let res;
  try {
    res = await send({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: notificationEmail({ name, email, message, when }),
      text: `From: ${name} <${email}>\nSent: ${when} (Lagos)\n\n${message}`,
    });
  } catch (err) {
    console.error("Contact form: could not reach Resend", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  // Optional thank-you email. Needs a sender on a domain verified in Resend,
  // so it only runs when CONTACT_AUTOREPLY=true.
  if (process.env.CONTACT_AUTOREPLY === "true") {
    const first = name.split(" ")[0];
    const r2 = await send({
      from,
      to: [email],
      reply_to: to,
      subject: "Thanks for getting in touch",
      html: autoReplyEmail({ first, message }),
      text: `Hi ${first},\n\nThanks for reaching out. Your message came through and I'll reply personally, usually within a couple of days.\n\nWhat you sent:\n${message}\n\nTalk soon,\nDaysuwa\nhttps://daysuwa.dev`,
    }).catch(() => null);
    if (r2 && !r2.ok) console.error("Contact form: auto-reply failed", r2.status, await r2.text());
  }

  return NextResponse.json({ ok: true });
}
