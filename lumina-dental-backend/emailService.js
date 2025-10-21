// emailService.js
const nodemailer = require('nodemailer'); 
require('dotenv').config();

// emailService.js (Port 587 Configuration)

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Change port to 587
    secure: false, // MUST be false for port 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    },
    tls: {
        // Required for some environments using port 587
        rejectUnauthorized: false 
    }
});

async function sendStaffEmail(data) {
    const mailOptions = {
        from: '"DENTAVISTA Website" <no-reply@dentavista.com>',
        to: process.env.EMAIL_USER,
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
        // Throwing the error ensures the server.js catch block handles the 500 status
        throw new Error('Email notification failed.'); 
    }
}

module.exports = {
    sendStaffEmail,
};