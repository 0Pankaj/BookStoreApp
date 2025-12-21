// for defining route we should have express
import express from "express";
import {signup ,login} from "../controller/user.contoller.js"
const router =express.Router();

router.post("/signup", signup)
router.post("/login",login)

export default router;