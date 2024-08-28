import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const testUser = (req, res) => {
    res.send("test is working");
};

export const signup = async(req, res) => {
    // console.log(req.body);
    const {username, email, phone, password} = req.body;
    const salt = 10;
    const hashedPassword = bcryptjs.hashSync(password, salt);
    const newUser = new User({username, email, phone, password: hashedPassword});
    try {
        await newUser.save();
        res.send("user created successfully")
    } catch (error) {
        console.log("error signup"+error);
    }
};