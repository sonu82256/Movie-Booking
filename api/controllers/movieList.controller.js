import Movie from "../models/movie.model.js";

export const addMovie = async (req, res) => {

    const {adminId, movieName, moviePoster} = req.body;
    const newMovie = new Movie({adminId, movieName, moviePoster})
    try {
        await newMovie.save();
        res.status(201).json("movie addes successfully");
    } catch (error) {
        res.send("error adding movie" + error);
    }
}

export const getMovie = async (req, res) => {
    const allMovie = await Movie.find();
    res.send(allMovie);
}