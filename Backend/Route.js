import express from "express";
import cors from "cors";
import { projectSubmissions } from "./form.model.js";
import { connectDB } from "./dbconnection.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
connectDB();

app.post("/api/submit", async (req, res) => {
	try {
		const submissions = await projectSubmissions.create(req.body);

		console.log(submissions);

		res.json({ message: "Data saved successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Failed to save data" });
	}
});

export default app;
