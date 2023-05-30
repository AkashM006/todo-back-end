import express from "express";
import { default as login } from "./login";
import { default as register } from "./register";

const app = express.Router();

app.use("/login", login);
app.use("/regsiter", register);

export default app;
