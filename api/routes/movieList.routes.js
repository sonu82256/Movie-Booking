import express from "express";
import { getMovie, addMovie } from "../controllers/movieList.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/add-movie',verifyToken, addMovie);
router.get('/movies', getMovie);

export default router;