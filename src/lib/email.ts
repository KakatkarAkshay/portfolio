import "server-only";

import { env } from "@/env";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailData) {
  const { data, error } = await resend.emails.send({
    from: `Portfolio Contact <${env.EMAIL_SENDER}>`,
    to: env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    throw new Error("Failed to send email");
  }

  return {
    success: true,
    messageId: data?.id,
    timestamp: new Date().toISOString(),
  };
}
