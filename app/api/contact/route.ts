import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: Request) {
  try {
    const { fullName, email, category, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO_EMAIL;     // e.g. support@scholar-nest.com
    const fromEmail = process.env.SENDGRID_FROM_EMAIL; // e.g. support@scholar-nest.com

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Missing SendGrid env vars (API_KEY/TO/FROM)" },
        { status: 500 }
      );
    }

    sgMail.setApiKey(apiKey);

    const subject = `New Contact Request: ${category || "General"} | ${fullName}`;

    // 1) Admin/Support notification (Reply will go to the customer)
    await sgMail.send({
      to: toEmail,
      from: { email: fromEmail, name: "Scholar Nest Support" },
      replyTo: { email, name: fullName },
      subject,
      text:
        `You received a new message from your website contact form.\n\n` +
        `Name: ${fullName}\nEmail: ${email}\nCategory: ${category || "General"}\n\n` +
        `Message:\n${message}\n`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
          <h2 style="margin:0 0 12px;">Scholar Nest — New Contact Request</h2>
          <p style="margin:0 0 16px;">You received a new message from your website contact form.</p>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;background:#f7f7f7;">
            <tr><td><b>Name</b></td><td>${escapeHtml(fullName)}</td></tr>
            <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><b>Category</b></td><td>${escapeHtml(category || "General")}</td></tr>
            <tr><td valign="top"><b>Message</b></td><td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>
          </table>
          <p style="margin:16px 0 0;color:#666;font-size:12px;">
            Tip: Click “Reply” to respond to the sender (Reply-To is set to the user’s email).
          </p>
        </div>
      `,
    });

    // 2) OPTIONAL: Auto-ack to the customer (so they know you received it)
    // If you don't want auto replies, remove this block.
    await sgMail.send({
      to: email,
      from: { email: fromEmail, name: "Scholar Nest Support" },
      replyTo: { email: fromEmail, name: "Scholar Nest Support" },
      subject: "We received your message — Scholar Nest",
      text:
        `Hi ${fullName},\n\n` +
        `Thanks for contacting Scholar Nest. We have received your message and will get back to you shortly.\n\n` +
        `— Scholar Nest Support`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
          <p>Hi ${escapeHtml(fullName)},</p>
          <p>Thanks for contacting <b>Scholar Nest</b>. We have received your message and will get back to you shortly.</p>
          <p style="color:#666;">— Scholar Nest Support</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } 
  catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Send failed";
  
    return NextResponse.json(
      { ok: false, error: msg },
      { status: 500 }
    );
  }
}

// Simple HTML escaping to avoid breaking the template
function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
