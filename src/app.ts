import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cron from "node-cron";

import logger from "./middlewares/logger/logger";
import { fetchAndUpdateCryptoData } from "./utils/cronjob";
import coinRoutes from "./routes/coin.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Schedule the task to run every two hours
cron.schedule("0 */2 * * *", fetchAndUpdateCryptoData);

// api
app.use("/api/v1/coin", coinRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
