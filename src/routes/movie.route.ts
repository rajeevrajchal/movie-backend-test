import express from 'express';

import { fetchMovies, markMovieAsFavourite } from './../controllers/movie.controller';

const movieRoute = express.Router();

movieRoute.get('', fetchMovies);
movieRoute.put('/:movieId', markMovieAsFavourite);

export default movieRoute;
