//Regular imports
import React from "react";
import {API_KEY, API_URL} from "../Config/Constants";

//Const imports
const axios = require('axios');

export const searchForMovies = async (title) => {
	const result = await ApiClient("GET", {
		"s": title
	});

	if(result.Response)
		return result.Search;
	else
		return false;
}

export const searchByTitle = async (title, plot) => {
	return await ApiClient("GET", {
		"t": title,
		"plot": plot
	});
}

export const searchByID = async (id, plot) => {
	return await ApiClient("GET", {
		"i": id,
		"plot": plot
	});
}

const ApiClient = async (method, params) => {
	if(method === "GET") {
		return await axios.get(`${API_URL}?apiKey=${API_KEY}`, {
			params: params
		}).then(response => {
			if(response.data)
				return response.data;
			else
				return false;
		})
	} else {
		return false;
	}
}