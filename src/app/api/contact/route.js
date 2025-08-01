import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    console.log('📩 Incoming Message:', { name, email, message });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_EMAIL,           // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD,    // your App Password (not your regular Gmail password!)
      },
    });

    // Admin Notification Email (to you)
    const adminMail = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      replyTo: email,
      subject: `📬 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb;">
          <h2 style="color: #111827;">📬 New Contact Form Submission</h2>
          <table style="margin-top: 20px; width: 100%; max-width: 600px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1f2937;">Name:</td>
              <td style="padding: 8px; color: #4b5563;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1f2937;">Email:</td>
              <td style="padding: 8px; color: #4b5563;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1f2937;">Message:</td>
              <td style="padding: 8px; color: #4b5563;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; color: #6b7280;">Sent via your portfolio contact form</p>
        </div>
      `,
    };

    // User Auto-Reply Email (to sender)
    const userMail = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: `✅ We received your message, ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f0f4f8;">
          <h2 style="color: #2563eb;">Thank you, ${name}!</h2>
          <p style="color: #374151; margin-bottom: 20px;">
            We’ve received your message and will get back to you shortly.
          </p>

          <div style="background: #ffffff; padding: 16px; border-left: 4px solid #2563eb; border-radius: 6px;">
            <h4 style="color: #111827;">Your Message:</h4>
            <p style="color: #4b5563;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #6b7280;">Warm regards,<br /><strong>Mritunjay Chaudhary</strong><br />Full Stack Developer</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 12px; color: #9ca3af;">
            This is an automated email. You can reply directly if needed.
          </p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ message: 'Emails sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('❌ Email error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
