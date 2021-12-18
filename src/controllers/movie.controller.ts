import { NextFunction, Request, Response } from "express";
import { map } from "lodash";

import { callExternalAPI } from "./../configs/callExternalAPI";
import db from "../configs/db";

// function that fetch list of movies
export const fetchMovies = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const response = await callExternalAPI({
			url: "https://yts.mx/api/v2/list_movies.json",
			method: "GET",
		});
		if (response.status === "ok") {
			// parsing movies list from above api to specific format & store in db.json
			map(response.data.movies || [], (movie: any) => {
				db.movies.push({
					id: movie.id,
					title: movie.title,
					image: movie.medium_cover_image,
					description: movie.description_full,
					author: movie.author || "John Wicxkey",
					isFavourite: false,
				});
			});
			res.status(200).json({
				status: "success",
				movies: db.movies,
			});
		}
	} catch (error) {
		console.log("the error");
		next(error);
	}
};

// function to mark movies as favourite
export const markMovieAsFavourite = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { movieId } = req.params;
		const movie = db.movies.find(
			(movie: any) => movie.id === parseInt(movieId)
		);
		console.log("the movies exist", movie);
		if (movie) {
			movie.isFavourite = !movie.isFavourite;
			res.status(200).json({
				status: "success",
				movie,
			});
		} else {
			res.status(404).json({
				status: "error",
				message: "Movie not found",
			});
		}
	} catch (error) {
		console.log("the error  is", error);
		next(error);
	}
};
