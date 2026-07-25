import mongoose from "mongoose";

export async function connectionDB () {
    try {
        const mongoUri = process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error("mongoUri is required for data base connection");
        }
        const conn = await mongoose.connect(mongoUri);
        console.log("MongoDB connected", conn.connection.host);
    } catch (error) {
        console.log("MongoDB connection error", error.message);
        process.exit(1);
    }
}