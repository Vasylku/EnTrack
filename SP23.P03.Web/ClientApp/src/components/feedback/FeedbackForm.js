import { useState } from "react";

const FeedbackForm = () => {
	const [feedback, setFeedback] = useState("");

	const handleFeedbackChange = (event) => {
		setFeedback(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Send feedback to backend or API
		console.log(feedback);

		setFeedback("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-lg mx-auto mt-4 bg-white p-8 rounded-xl"
		>
			<label className="block mb-2 font-bold text-gray-700">
				How was your experience?
			</label>
			<textarea
				className="w-full px-3 py-2 mb-4 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
				rows="4"
				placeholder="Tell us about your experience..."
				value={feedback}
				onChange={handleFeedbackChange}
				required
			></textarea>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-500"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default FeedbackForm;
