import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    theaterName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
},{timestamps:true})

const adminUser = mongoose.model("Admin User", userSchema)

export default adminUser;
