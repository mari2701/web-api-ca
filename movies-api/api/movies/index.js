import asyncHandler from 'express-async-handler';
import {getMovies} from '../tmdb-api';
import { getMovieById } from '../tmdb-api';
import { getUpcomingMovies } from '../tmdb-api';
import { getTopRatedMovies } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getGenres } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getMovieCredits } from '../tmdb-api';
import express from 'express';

const router = express.Router();

// movie routes to be added

export default router;

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const movies = await getUpcomingMovies();
    res.status(200).json(movies);
}));

router.get('/top_rated', asyncHandler(async (req, res) => {
    const movies = await getTopRatedMovies();
    res.status(200).json(movies);
}));

router.get('/now_playing', asyncHandler(async (req, res) => {
    const movies = await getNowPlayingMovies();
    res.status(200).json(movies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages(id);
    res.status(200).json(images);
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
}));

router.get('/:id/credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const credits = await getMovieCredits(id);
    res.status(200).json(credits);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovieById(id);
    res.status(200).json(movie);
}));
