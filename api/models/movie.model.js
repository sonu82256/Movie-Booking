import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    adminId: {
        type: String,
        require: true,
    },
    movieName: {
        type: String,
        require: true,
        unique: true,
    },
    moviePoster: {
        type: String,
        require: true,
    },
},{timestamps:true})

const Movie = mongoose.model("Movie", userSchema)

export default Movie;
