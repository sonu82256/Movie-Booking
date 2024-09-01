import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    adminId: {
        type: String,
        require: true,
    },
    movieName: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    seats: {
        type: [Number], // Array of numbers
        default: Array(100).fill(false) // Initialize with 100 elements, all set to 0
    }
},{timestamps:true})

const Show = mongoose.model("Show", userSchema)

export default Show;
