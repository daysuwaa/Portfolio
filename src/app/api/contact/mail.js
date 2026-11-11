// HTML email templates. Email clients are picky, so this is table layout with inline styles.
const INK = "#16181d";
const MUTE = "#5b6270";
const PEN = "#c8135b";
const RULE = "#e3e5ea";
const FONT = "-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const SITE = "https://daysuwa.dev";

export const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const brand = `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
  <td style="font:700 26px 'SFMono-Regular',Menlo,Consolas,monospace;color:${INK};padding-right:10px;line-height:1">{<span style="color:${PEN}">D</span></td>
  <td style="font:600 17px ${FONT};color:${INK};letter-spacing:-0.2px">Daysuwa</td>
</tr></table>`;

function shell({ preheader, body, footer }) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f5f7">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f7"><tr><td align="center" style="padding:28px 14px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#ffffff;border:1px solid ${RULE};border-radius:10px;overflow:hidden">
    <tr><td style="height:4px;background:${PEN};font-size:0;line-height:0">&nbsp;</td></tr>
    <tr><td style="padding:24px 28px 8px">${brand}</td></tr>
    <tr><td style="padding:8px 28px 28px;font-family:${FONT};color:${INK}">${body}</td></tr>
    <tr><td style="padding:16px 28px;border-top:1px solid ${RULE};font:13px ${FONT};color:${MUTE}">${footer}</td></tr>
  </table>
</td></tr></table></body></html>`;
}

const quote = (message) =>
  `<div style="border-left:3px solid ${PEN};padding:2px 0 2px 14px;font-size:16px;line-height:1.65;white-space:pre-wrap;color:${INK}">${esc(message)}</div>`;

export function notificationEmail({ name, email, message, when }) {
  const subject = encodeURIComponent(`Re: Your message on my portfolio`);
  return shell({
    preheader: `${name}: ${message.slice(0, 90)}`,
    body: `
      <p style="margin:12px 0 4px;font-size:13px;color:${MUTE}">New message &middot; ${esc(when)} (Lagos)</p>
      <h1 style="margin:0 0 4px;font-size:22px;line-height:1.3;letter-spacing:-0.3px">${esc(name)}</h1>
      <p style="margin:0 0 22px;font-size:15px"><a href="mailto:${esc(email)}" style="color:${PEN};text-decoration:none">${esc(email)}</a></p>
      ${quote(message)}
      <p style="margin:26px 0 0"><a href="mailto:${esc(email)}?subject=${subject}" style="display:inline-block;background:${INK};color:#ffffff;text-decoration:none;font:600 15px ${FONT};padding:11px 20px;border-radius:7px">Reply to ${esc(name.split(" ")[0])}</a></p>`,
    footer: `Sent from the contact form on <a href="${SITE}" style="color:${MUTE}">daysuwa.dev</a>. Replying goes straight to ${esc(name)}.`,
  });
}

export function autoReplyEmail({ first, message }) {
  const link = (href, label) => `<a href="${href}" style="color:${INK};text-decoration:underline;text-decoration-color:${PEN}">${label}</a>`;
  return shell({
    preheader: "Got your message. I'll reply as soon as I can.",
    body: `
      <h1 style="margin:12px 0 14px;font-size:22px;line-height:1.3;letter-spacing:-0.3px">Hi ${esc(first)},</h1>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.65">Thanks for reaching out. Your message came through and I'll reply personally, usually within a couple of days.</p>
      <p style="margin:22px 0 8px;font-size:13px;color:${MUTE}">What you sent</p>
      ${quote(message)}
      <p style="margin:26px 0 4px;font-size:16px;line-height:1.65">Talk soon,</p>
      <p style="margin:0;font-size:16px;font-weight:600">Daysuwa</p>
      <p style="margin:2px 0 0;font-size:14px;color:${MUTE}">Software engineer, Lagos</p>`,
    footer: `${link(SITE, "daysuwa.dev")} &nbsp;&middot;&nbsp; ${link("https://github.com/daysuwaa", "GitHub")} &nbsp;&middot;&nbsp; ${link("https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/", "LinkedIn")}`,
  });
}
