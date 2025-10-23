const nodemailer = require('nodemailer'); 
require('dotenv').config();

// --- Nodemailer Transporter Setup ---
// This uses your SMTP credentials to send the mail
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_EMAIL_HOST,
    port: 587, // Standard secure port for SMTP
    secure: false, // true for 465, false for other ports (like 587)
    auth: {
        user: process.env.SMTP_EMAIL_USER,
        pass: process.env.SMTP_EMAIL_PASS,
    },
});

const SENDER_EMAIL = process.env.SMTP_EMAIL_USER;
const CLINIC_RECEIVER_EMAIL = process.env.CLINIC_RECEIVER_EMAIL;

/**
 * Sends a notification email to clinic staff about a new appointment request.
 * @param {object} data - The validated appointment data.
 */
async function sendStaffEmail(data) {
    const mailOptions = {
        from: SENDER_EMAIL, 
        to: CLINIC_RECEIVER_EMAIL, // Clinic staff receives the notification
        subject: `[APPOINTMENT] NEW REQUEST: ${data.name} (${data.preferredDate})`,
        html: `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; max-width: 600px;">
                <h3 style="color: #007bff;">New Specialist Consultation Request Received</h3>
                <p>A new appointment request has been saved to the database and requires staff confirmation.</p>
                <hr style="border-top: 1px solid #eee;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; width: 40%;">Patient:</td>
                        <td style="padding: 8px 0;">${data.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Contact Phone:</td>
                        <td style="padding: 8px 0;">${data.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                        <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td>
                        <td style="padding: 8px 0;">${data.preferredDate}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Preferred Time:</td>
                        <td style="padding: 8px 0;">${data.preferredTime}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Reason for Visit:</td>
                        <td style="padding: 8px 0;">${data.reason}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Message:</td>
                        <td style="padding: 8px 0;">${data.message || 'N/A'}</td>
                    </tr>
                </table>
                <hr style="border-top: 1px solid #eee;">
                <p style="font-size: 0.9em; color: #6c757d;">Please review the database immediately and contact the patient to confirm the booking time.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`[Email] Staff notified successfully via Nodemailer.`);
    } catch (error) {
        console.error(`[Email] Nodemailer notification failed:`, error.message);
        throw new Error('Email notification failed.'); 
    }
}

module.exports = {
    sendStaffEmail,
};