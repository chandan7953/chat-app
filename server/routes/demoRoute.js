import express from "express";
import { demoMessage } from "../controllers/demoController.js";

const router = express.Router();

router.route("/demo").get(demoMessage);

export default router;
