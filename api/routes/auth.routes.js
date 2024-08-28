import express from "express";
import {testUser, signup} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/test", testUser);
router.post("/sign-up", signup);

//api/user/update

export default router;