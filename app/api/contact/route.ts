import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Named export for POST method
export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL, // Your agency's contact email
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from ${fullName} (${email}).\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
