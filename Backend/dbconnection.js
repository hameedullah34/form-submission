import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${process.env.DB_URI}`);
		console.log(`${connectionInstance.connection.host}`);
	} catch (error) {
		console.log(error);
	}
};
