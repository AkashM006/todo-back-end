import express, { Express } from "express";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
