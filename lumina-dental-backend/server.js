// server.js (Complete File)

const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const Joi = require('joi');
const cors = require('cors'); // <-- Installed and Imported
const { connectToDatabase, saveAppointment } = require('./database');
const { sendStaffEmail } = require('./emailService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", 1);

// --- CORS CONFIGURATION (Fixes the Cross-Origin Error) ---
// IMPORTANT: Set 'origin' to the exact URL of your React frontend.
 // Handles preflight requests

const corsOptions = {
    origin: ['http://localhost:5173',"https://dentavista-dental-care.vercel.app"], 
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
};
app.use(cors(corsOptions));

// --- OTHER MIDDLEWARE ---
app.use(bodyParser.json());


// Rate Limiting (Protects the endpoint from abuse)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests
    message: 'Too many appointment requests from this IP, please try again after 15 minutes.',
});
app.use('/api/request-appointment', limiter);


// --- JOI VALIDATION SCHEMA (Ensures data integrity) ---
const appointmentSchema = Joi.object({
    name: Joi.string().trim().min(3).required(),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
    email: Joi.string().email().required(),
    reason: Joi.string().required(),
    // Validate date is in the future
    preferredDate: Joi.date().min('now').required(), 
    // Validate time format (HH:MM)
    preferredTime: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(), 
    message: Joi.string().allow('').optional(),
});


// --- APPOINTMENT ENDPOINT ---
app.post('/api/request-appointment', async (req, res) => {
    const appointmentData = req.body;

    // 1. Validation Check
    const { error, value } = appointmentSchema.validate(appointmentData);
    if (error) {
        return res.status(400).json({ 
            success: false, 
            message: `Validation failed: ${error.details[0].message}. Please correct the input.` 
        });
    }

    try {
        // 2. SAVE TO DATABASE (MongoDB Atlas via database.js)
        const savedRecord = await saveAppointment({
            ...value, // Use validated data
            status: 'Pending',
            receivedAt: new Date().toISOString()
        });
        
        // 3. SEND EMAIL Notification (via emailService.js)
        await sendStaffEmail(value);

        res.status(200).json({ 
            success: true, 
            message: 'Consultation request saved successfully. We will contact you soon.',
            appointmentId: savedRecord.id
        });
    } catch (error) {
        console.error('Appointment processing failed:', error);
        // Catch-all for DB or Email failures
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error. Please call the clinic directly to book.' 
        });
    }
});


// --- SERVER STARTUP ---
async function startServer() {
    // Attempt to connect to MongoDB Atlas before starting the listener
    await connectToDatabase(); 
    
    app.listen(PORT, () => {
        console.log(`Express server running on http://localhost:${PORT}`);
    });
}

// Execute the startup function
startServer();