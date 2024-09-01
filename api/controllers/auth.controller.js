import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import adminUser from "../models/adminUser.model.js";


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
        var token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...userWithoutPassword } = validUser._doc;
        console.log(userWithoutPassword);
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(userWithoutPassword);
    } catch (error) {
        console.log(error);
    }
};


export const admin_signup = async (req, res) => {
    // console.log(req.body);
    const { username, email, phone, password,theaterName,address} = req.body;
    const salt = 10;
    const hashedPassword = bcryptjs.hashSync(password, salt);
    const newUser = new adminUser({
        username,
        email,
        phone,
        password: hashedPassword,
        theaterName,
        address
    });
    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        console.log("error signup" + error);
        res.send("error signup" + error);
    }
};

export const admin_signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const validUser = await adminUser.findOne({ email });
        if (!validUser) res.send("invalid email id");
        const validPassword = bcryptjs.compareSync(
            password,
            validUser.password
        );
        if (!validPassword) res.send("invalid password");
        var token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...userWithoutPassword } = validUser._doc;
        console.log(userWithoutPassword);
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(userWithoutPassword);
    } catch (error) {
        console.log(error);
    }
};

export const signOut = async (req, res, next) => {
    try {
      res.clearCookie("access_token");
      res.status(200).json("User has been logged out!");
    } catch (error) {
      next(error);
    }
  };
  