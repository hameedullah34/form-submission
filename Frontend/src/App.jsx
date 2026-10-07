import React, { useState } from "react";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		personName: "",
		personReg: "",
		projectTitle: "",
		projectReg: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.toUpperCase(),
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:5000/api/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("Submission successful");
			}
		} catch (error) {
			alert("Please Try again!!!");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Person Name: </label>
				<input
					type="text"
					name="personName"
					value={formData.personName.toUpperCase()}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label>Person Reg Number: </label>
				<input
					type="text"
					name="personReg"
					value={formData.personReg.toUpperCase()}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label>Project Title: </label>
				<input
					type="text"
					name="projectTitle"
					value={formData.projectTitle.toUpperCase()}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label>Project Description </label>
				<input
					type="text"
					name="projectReg"
					value={formData.projectReg.toUpperCase()}
					onChange={handleChange}
				/>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
};

export default RegistrationForm;
