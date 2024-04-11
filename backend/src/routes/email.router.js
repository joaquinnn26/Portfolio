import { Router } from "express";
import { emailController } from "../controllers/email.controllers.js";
const router=Router()

router.post("/send",emailController)

export default router