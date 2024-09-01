import express from "express";
import { addMovieShow, getMovieShow, updateSeat } from "../controllers/movieShow.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/add-movie-show',verifyToken, addMovieShow);
router.get('/movies-show', getMovieShow);

router.post('/update-seat/:id', verifyToken, updateSeat);

export default router;