import express from "express";
import {signup, signin, admin_signin, admin_signup, signOut} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signup);
router.get("/sign-in", signin);

router.get("/admin-sign-in", admin_signin);
router.post("/admin-sign-up", admin_signup);

router.get("/sign-out", signOut);
//api/user/update

export default router;