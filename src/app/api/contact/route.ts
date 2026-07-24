import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

const EMAIL_TO = process.env.CONTACT_EMAIL || "mdibnaabid123@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "no-reply@yourdomain.com";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

async function createTransport() {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in environment variables.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill in your name, email, and message." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const normalizedSubject = (subject || "Portfolio contact request").trim();
    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(normalizedSubject)}&body=${encodeURIComponent(mailBody)}`;

    if (!SMTP_USER || !SMTP_PASS) {
      return new Response(JSON.stringify({ success: true, fallbackToMailto: true, mailto }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = await createTransport();
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: normalizedSubject,
      text: mailBody,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${normalizedSubject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: error.message || "Unable to send message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
