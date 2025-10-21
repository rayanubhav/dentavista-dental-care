// emailService.js (Using SendGrid API)

const sgMail = require('@sendgrid/mail'); 
require('dotenv').config();

// 1. Set the API Key globally using the environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// NOTE: The 'from' address MUST be a verified sender in your SendGrid account.
const SENDER_EMAIL = process.env.SENDER_EMAIL; // Replace with your verified clinic/sender email
const CLINIC_RECEIVER_EMAIL = process.env.EMAIL_USER; // The clinic's email address

async function sendStaffEmail(data) {
    const msg = {
        to: CLINIC_RECEIVER_EMAIL, // Clinic staff receives the notification
        from: SENDER_EMAIL, // Must be a verified sender
        subject: `NEW PENDING APPOINTMENT REQUEST: ${data.name}`,
        html: `
            <h3>New Specialist Consultation Request Received</h3>
            <p>A new appointment request has been saved to the database and requires staff confirmation.</p>
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
        await sgMail.send(msg);
        console.log(`[Email] Staff notified successfully via SendGrid.`);
    } catch (error) {
        // SendGrid provides rich error logging
        console.error(`[Email] SendGrid notification failed.`);
        if (error.response) {
            console.error(error.response.body); // Check for details like 'unverified sender'
        }
        throw new Error('Email notification failed.'); 
    }
}

module.exports = {
    sendStaffEmail,
};