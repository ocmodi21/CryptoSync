import { Router } from "express";
import coinController from "../controllers/coin.controller";

const router = Router();

router.get("/stats", coinController.coinStats);
router.get("/deviation", coinController.coinDeviation);

export default router;
