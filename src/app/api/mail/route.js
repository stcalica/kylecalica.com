import { NextResponse } from 'next/server';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import SomeEmailTemplate from "../../../../email/email-template.html"

export async function POST(req) {
    const { fullName, email, phone, projectDetails, emailTemplate } = await req.json();
    try {
        // Compile the template using handlebars and replace placeholders with dynamic data
        const template = handlebars.compile(emailTemplate ? emailTemplate : SomeEmailTemplate);
        const replacements = {
            email: email,
            fullName: fullName,
            projectDetails: projectDetails,
            phone: phone,
        };
        const htmlToSend = template(replacements);

        // Setup the email transporter
        const transporter = nodemailer.createTransport(smtpTransport({
            host: process.env.HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        }));

        // Configure email options
        const mailOptions = {
            from: email,
            to: process.env.TO_EMAIL,
            subject: process.env.SUBJECT,
            html: htmlToSend
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return NextResponse.json({ status: 200, message: 'Email sent successfully' });
    }
    catch (error) {
        console.log('Error processing the request:', error);
        return NextResponse.json({ status: 500, message: 'Error sending email' });
    }
}
