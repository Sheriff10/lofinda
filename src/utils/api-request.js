// utils/apiUtils.js
import axios from "axios";

const apiRequest = async (url, method = "GET", body = null) => {
	const config = {
		method,
		url: `${window.api}${url}`,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	};

	if (body) {
		config.data = body;
	}

	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {
		console.error("Error making request:", error);
		throw error;
	}
};

export default apiRequest;
