import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Named export for POST method
export async function POST(req: Request) {
  try {
    // Parse the JSON body from the incoming request
    const {
      fullName,
      email,
      phoneNumber,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      numberOfPassengers,
      transferType,
      specialRequests,
    } = await req.json();

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !pickupLocation ||
      !dropoffLocation ||
      !pickupDate ||
      !pickupTime ||
      !numberOfPassengers ||
      !transferType
    ) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create a transporter to send emails
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use another SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Sender's email
        pass: process.env.EMAIL_PASS, // Sender's email password or app password
      },
    });

    // Construct the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL, // Email to receive the form data
      subject: 'New Transfer Booking Request',
      text: `
        A new transfer booking request has been submitted.

        Contact Information:
        - Full Name: ${fullName}
        - Email: ${email}
        - Phone Number: ${phoneNumber}

        Transfer Details:
        - Pickup Location: ${pickupLocation}
        - Drop-off Location: ${dropoffLocation}
        - Pickup Date: ${pickupDate}
        - Pickup Time: ${pickupTime}
        - Number of Passengers: ${numberOfPassengers}
        - Transfer Type: ${transferType}

        Special Requests: ${specialRequests || 'None'}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
