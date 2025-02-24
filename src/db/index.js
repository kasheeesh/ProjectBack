import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        console.log("DB_NAME:", DB_NAME);

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\nMongoDB connected DB host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
