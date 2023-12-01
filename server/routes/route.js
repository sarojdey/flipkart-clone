import express from "express";
import { usersignUp } from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", usersignUp);

export default router;
