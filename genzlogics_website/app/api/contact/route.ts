import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const serviceLabels: Record<string, string> = {
  "ai-generative": "AI & Generative AI",
  "ai-automation": "AI Automation",
  "custom-software": "Custom Software",
  "web-development": "Web Development",
  "mobile-development": "Mobile Development",
  "cloud-devops": "Cloud / DevOps",
  "python-fastapi": "Python & FastAPI",
  "ui-ux-design": "UI/UX & Product Design",
  other: "Other",
};

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, service, message } = body;

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const serviceLabel = serviceLabels[service] || service;
  const subject = `Contact Form: ${serviceLabel} - ${name}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject,
      text: `Service: ${serviceLabel}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Service:</strong> ${serviceLabel}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
