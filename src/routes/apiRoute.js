import express from "express";
import { login } from "../controllers/auth.js";
import { getUser } from "../controllers/getUser.js";

const router = express.Router();

router.post("/login", login);
router.post("/getuser", getUser);

export default router;
