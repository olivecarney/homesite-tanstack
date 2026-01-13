import { createServerFn } from '@tanstack/react-start';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

type EmailData = {
    name: string;
    email: string;
    message: string;
};

export const sendEmailFn = createServerFn({ method: "POST" })
    .inputValidator((data: EmailData) => data)
    .handler(async ({ data }) => {
        const { name, email, message } = data;

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const mailOptions: Mail.Options = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Message from ${name} (${email})`,
            text: message,
        };

        try {
            await transport.sendMail(mailOptions);
            return { success: true, message: 'Email sent successfully!' };
        } catch (error: any) {
            console.error("Error sending email:", error);
            // Return error but don't crash
            return { success: false, message: error.message || 'Failed to send email' };
        }
    });
