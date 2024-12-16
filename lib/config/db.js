import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const ConnectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI;
        if (!dbUri) {
            throw new Error("MONGODB_URI is not defined in the .env file");
        }
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
};
