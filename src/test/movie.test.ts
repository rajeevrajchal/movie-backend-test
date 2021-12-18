// import { callExternalAPI } from "./../configs/callExternalAPI";
// import db from "../configs/db";

import app from "../index";
import chai, { expect } from "chai";

describe("Users", () => {
	// for internal api testing
	describe("/GET get movies list", () => {
		it("should be valid internal api", (done) => {
			chai
				.request(app)
				.get("/api/movies")
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});

	describe("/PUT mark movies as favourite", () => {
		it("should update the favourite flag", (done) => {
			chai
				.request(app)
				.get("/api/movies/38583")
				.end((err, res) => {
					console.log("res", res.status);
					res.should.have.status(200);
					done();
				});
		});
	});

	// for test purpose of external api

	// describe("/GET movies", () => {
	// 	it("it should fetch movies from external api", async (done) => {
	// 		callExternalAPI({
	// 			url: "https://yts.mx/api/v2/list_movies.json",
	// 			method: "GET",
	// 		})
	// 			.then((response) => {
	// 				console.log("the response", response);
	// 				expect(response.status).equals("ok");
	// 			})
	// 			.catch((err) => {
	// 				console.log("the response", err);
	// 			});
	// 		done();
	// 	});
	// });

	// describe("/GET movies on db", () => {
	// 	it("it should fetch movies from external api & store in db", async (done) => {
	// 		callExternalAPI({
	// 			url: "https://yts.mx/api/v2/list_movies.json",
	// 			method: "GET",
	// 		})
	// 			.then((response) => {
	// 				map(response.data.movies || [], (movie: any) => {
	// 					db.movies.push({
	// 						id: movie.id,
	// 						title: movie.title,
	// 						image: movie.medium_cover_image,
	// 						description: movie.description_full,
	// 						author: movie.author || "John Wicxkey",
	// 						isFavourite: false,
	// 					});
	// 				});
	// 				expect(db.movies.length).greaterThan(0);
	// 			})
	// 			.catch((err) => {
	// 				console.log("the response", err);
	// 			});
	// 		done();
	// 	});
	// });
});
