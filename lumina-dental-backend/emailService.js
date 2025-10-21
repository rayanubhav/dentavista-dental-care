// emailService.js
const nodemailer = require('nodemailer'); 
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email provider here (e.g., 'Outlook', 'SendGrid')
    auth: {
        user: process.env.EMAIL_USER, // Loaded from .env
        pass: process.env.EMAIL_PASS, // Loaded from .env (Use App Password for Gmail)
    }
});

async function sendStaffEmail(data) {
    const mailOptions = {
        from: '"DENTAVISTA Website" <no-reply@dentavista.com>',
        to: process.env.EMAIL_USER, // Sending the notification to the clinic's email
        subject: `NEW PENDING APPOINTMENT REQUEST: ${data.name}`,
        html: `
            <h3>New Specialist Consultation Request Received</h3>
            <p>A new appointment request has been saved to the database and requires confirmation.</p>
            <hr>
            <ul>
                <li><strong>Patient:</strong> ${data.name}</li>
                <li><strong>Contact:</strong> ${data.phone} (${data.email})</li>
                <li><strong>Preferred Date:</strong> ${data.preferredDate}</li>
                <li><strong>Preferred Time:</strong> ${data.preferredTime}</li>
                <li><strong>Reason:</strong> ${data.reason}</li>
                <li><strong>Message:</strong> ${data.message || 'N/A'}</li>
            </ul>
            <p>Please log in to the Clinic Dashboard (or MongoDB Atlas) to review and update the status.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`[Email] Staff notified for new request from ${data.email}`);
    } catch (error) {
        console.error(`[Email] Failed to send staff notification. Check .env credentials:`, error);
        throw new Error('Email notification failed.'); 
    }
}

module.exports = {
    sendStaffEmail,
};