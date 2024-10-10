import { Router } from "express";
import coinController from "../controllers/coin.controller";

const router = Router();

router.get("/stats", coinController.coinStats);

export default router;
