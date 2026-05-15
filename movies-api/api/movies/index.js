import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import express from 'express';

const router = express.Router();

// movie routes to be added

export default router;

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));
