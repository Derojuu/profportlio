import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FALLBACK_TO_EMAIL = "lasuhomboldt2023@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const toEmail = process.env.CONTACT_TO_EMAIL ?? FALLBACK_TO_EMAIL;

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? toEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
