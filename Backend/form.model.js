import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
	personName: {
		type: String,
		required: true,
	},
	personReg: {
		type: String,
		required: true,
	},
	projectTitle: {
		type: String,
		required: true,
	},
	projectReg: {
		type: String,
		required: true,
	},
});

export const projectSubmissions = mongoose.model(
	"projectSubmissions",
	projectSchema,
);
