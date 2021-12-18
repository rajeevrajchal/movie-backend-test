import axios, { AxiosRequestConfig, Method } from "axios";

interface CallExternalAPI {
	url: string;
	method: Method;
	data?: any;
	headers?: any;
	params?: any;
}

export const callExternalAPI = ({
	url,
	method,
	data,
	headers,
	params,
}: CallExternalAPI) => {
	const config: AxiosRequestConfig<any> = {
		method: method || "GET",
		url: url,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		data,
		params,
	};
	return axios(config)
		.then((response) => response.data)
		.catch((error) => {
			console.log("error", {
				error,
			});
			return {
				status: "error",
				message: "Something went wrong",
			};
		});
};
