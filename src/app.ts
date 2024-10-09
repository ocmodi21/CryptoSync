import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./middlewares/logger/logger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

const port = process.env.PORT || 3000;

async function main() {
  await mongoose.connect(process.env.MONGO_URL as string);
}

main()
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
