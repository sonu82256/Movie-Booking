import express from "express";
import {testUser, signup, signin} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/test", testUser);
router.post("/sign-up", signup);
router.get("/sign-in", signin);

//api/user/update

export default router;