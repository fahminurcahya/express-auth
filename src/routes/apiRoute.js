import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/ses/login", login);

export default router;