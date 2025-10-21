// database.js (MongoDB Atlas Ready)

const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Global variable for the appointments collection
let appointmentsCollection;

/**
 * Initializes the MongoDB client connection.
 */
async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas.");
        
        // Specify your database and collection names
        const database = client.db("DentalVistaDB"); 
        appointmentsCollection = database.collection("appointmentRequests");
        
    } catch (error) {
        console.error("Failed to connect to MongoDB Atlas:", error);
        process.exit(1); // Exit process on connection failure
    }
}

/**
 * Saves a new appointment request into the Atlas database.
 * @param {object} data - The validated appointment data.
 * @returns {Promise<object>} The result of the insert operation.
 */
async function saveAppointment(data) {
    if (!appointmentsCollection) {
        throw new Error("Database connection not initialized. Call connectToDatabase() first.");
    }
    
    const result = await appointmentsCollection.insertOne(data);
    
    // Return the inserted ID for confirmation
    return { id: result.insertedId };
}

module.exports = {
    connectToDatabase,
    saveAppointment,
};