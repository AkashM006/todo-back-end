import express from "express";
import { register } from "../controllers/userController";

const app = express.Router();

// validate the user here
app.post("/", register);

export default app;
