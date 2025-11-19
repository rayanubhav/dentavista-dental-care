// emailService.js (Corrected)
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL; 
const CLINIC_RECEIVER_EMAIL = process.env.CLINIC_RECEIVER_EMAIL;

async function sendStaffEmail(data) {
    const emailData = {
        from: SENDER_EMAIL,
        to: CLINIC_RECEIVER_EMAIL,
        subject: `[APPOINTMENT] NEW REQUEST: ${data.name} (${data.preferredDate})`,
        html: `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; max-width: 600px;">
                <h3 style="color: #007bff;">New Specialist Consultation Request Received</h3>
                <p>A new appointment request has been saved to the database.</p>
                <hr style="border-top: 1px solid #eee;">
                <p><strong>Patient:</strong> ${data.name}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Date/Time:</strong> ${data.preferredDate} at ${data.preferredTime}</p>
                <p><strong>Reason:</strong> ${data.reason}</p>
            </div>
        `,
    };

    try {
        // CAPTURE THE RESPONSE
        const { data: emailId, error } = await resend.emails.send(emailData);

        // CHECK FOR ERROR EXPLICITLY
        if (error) {
            console.error("[Email] Resend API Error:", error);
            throw new Error(`Resend Refused: ${error.message}`);
        }

        console.log(`[Email] Success! Email ID: ${emailId.id}`);
        return emailId;

    } catch (error) {
        // This will now show up in your terminal
        console.error(`[Email] Notification Failed:`, error.message);
        throw error; // This forces server.js to send a 500 error
    }
}

module.exports = {
    sendStaffEmail,
};