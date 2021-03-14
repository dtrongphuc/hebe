import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:8080/api/',
});

http.interceptors.request.use(
	(response) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	(error) => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default http;
