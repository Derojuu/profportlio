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
        <div style="background:#050505;color:#e7e5e4;font-family:Georgia, 'Times New Roman', serif;padding:40px 36px;max-width:560px;margin:0 auto;">
          <div style="margin-bottom:28px;">
            <div style="height:3px;width:60px;background:#eaaf08;margin-bottom:18px;"></div>
            <h1 style="font-size:22px;font-weight:600;margin:0;color:#f5f5f4;letter-spacing:0.2px;">
              Prof. Kabiru Olusegun Akinyemi
            </h1>
            <p style="font-size:13px;color:#a8a29e;margin:6px 0 0 0;">
              Academic Portfolio Correspondence
            </p>
          </div>
          <p style="font-size:15px;line-height:1.8;color:#d6d3d1;margin:0 0 22px 0;">
            You have received a new message submitted through the academic portfolio website.
          </p>
          <div style="margin-bottom:26px;">
            <p style="font-size:16px;line-height:1.85;margin:0;color:#fafaf9;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <table style="font-size:14px;border-collapse:collapse;margin-top:18px;">
            <tr>
              <td style="padding:6px 24px 6px 0;color:#a8a29e;">Name</td>
              <td style="padding:6px 0;color:#f5f5f4;font-weight:600;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding:6px 24px 6px 0;color:#a8a29e;">Email</td>
              <td style="padding:6px 0;">
                <a href="mailto:${email}" style="color:#eaaf08;text-decoration:none;font-weight:600;">
                  ${email}
                </a>
              </td>
            </tr>
          </table>
          <div style="margin-top:34px;border-top:1px solid rgba(234,175,8,0.25);padding-top:14px;">
            <p style="font-size:11px;color:#78716c;margin:0;">
              © Prof. Kabiru O. Akinyemi
            </p>
          </div>
        </div>
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
