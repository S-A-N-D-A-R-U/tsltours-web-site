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
      arrivalDate,
      departureDate,
      numberOfAdults,
      numberOfChildren,
      travelInterests,
      accommodationPreferences,
      budget,
      additionalServices,
      specificLocations,
      dietaryRestrictions,
    } = await req.json();

    // Create a transporter to send emails
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use another SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Custom Tour Request Submitted',
      text: `
        A new custom tour request was submitted.

        Personal Information:
        - Full Name: ${fullName}
        - Email: ${email}
        - Phone Number: ${phoneNumber}

        Travel Details:
        - Arrival Date: ${arrivalDate}
        - Departure Date: ${departureDate}
        - Number of Adults: ${numberOfAdults}
        - Number of Children: ${numberOfChildren}

        Travel Interests: ${travelInterests.join(', ')}
        Accommodation Preferences: ${accommodationPreferences.join(', ')}
        Budget: ${budget}
        Additional Services: ${additionalServices.join(', ')}

        Specific Locations/Experiences: ${specificLocations || 'None'}
        Dietary Restrictions/Special Needs: ${dietaryRestrictions || 'None'}
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
