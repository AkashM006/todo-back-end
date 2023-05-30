import express, { Express } from "express";
import dotenv from "dotenv";
import logger from "./utils/logger";

const app: Express = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info("Something new");
  console.log(`Server is listening to PORT ${PORT}`);
});
