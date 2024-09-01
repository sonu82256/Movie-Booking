import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const testUser = (req, res) => {
    res.send("test is working");
};

export const signup = async (req, res) => {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;
    const salt = 10;
    const hashedPassword = bcryptjs.hashSync(password, salt);
    const newUser = new User({
        username,
        email,
        phone,
        password: hashedPassword,
    });
    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        console.log("error signup" + error);
        res.send("error signup" + error);
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const validUser = await User.findOne({ email });
        if (!validUser) res.send("invalid email id");
        const validPassword = bcryptjs.compareSync(
            password,
            validUser.password
        );
        if (!validPassword) res.send("invalid password");
        console.log(validUser);
        res.send("sign-in successfully");
    } catch (error) {
        console.log(error);
    }
};
