import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { originZip, destinationZip, vehicleModel, movingDate, phone } =
      await req.json();

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    console.log("env vars", {
      evEmail: `Email ${process.env.EMAIL_USER}`,
      evPass: `Pass ${process.env.EMAIL_PASS}`,
    });

    console.log("Email configuration:", {
      host: "smtpout.secureserver.net",
      user: emailUser ? "Email user is set" : "Email user is MISSING",
      pass: emailPass ? "Password is set" : "Password is MISSING",
    });

    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      host: "smtpout.secureserver.net",
      // port: 465,
      // secure: true,
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      debug: true,
      logger: true,
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      cc: "anastasia.dorfman1@gmail.com",
      subject: "Quote Form Submission",
      html: `
          <h1>Quote Form Submission</h1>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <p><strong>Moving Date:</strong> ${movingDate}</p>
          <p><strong>Origin ZIP:</strong> ${originZip}</p>
          <p><strong>Destination Zip:</strong> ${destinationZip}</p>
          <p><strong>Vehicle model:</strong> ${vehicleModel}</p>
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
