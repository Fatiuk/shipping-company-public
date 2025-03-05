import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { originZip, destinationZip, movingDate, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
      logger: true, // Log information in the console
    });

    const mailOptions = {
      to: "anastasia.dorfman1@gmail.com",
      subject: "Quote Form Submission",
      html: `
          <h1>Quote Form Submission</h1>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <p><strong>Moving Date:</strong> ${movingDate}</p>
          <p><strong>Origin ZIP:</strong> ${originZip}</p>
          <p><strong>Destination Zip:</strong> ${destinationZip}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email has been sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
