import { Request, Response } from "express";
import CoinModel from "../models/coin.model";

class CoinController {
  async coinStats(req: Request, res: Response): Promise<any> {
    const { coin } = req.query;

    try {
      if (!coin) {
        return res
          .status(400)
          .json({ error: "Missing required query parameters: coinID" });
      }

      // Fetch data based on coinID
      const coinData = await CoinModel.findOne(
        { coinID: coin },
        { priceData: { $slice: -1 } }
      ).exec();

      if (coinData) {
        const coinObject = {
          price: coinData.priceData[0].price,
          marketCap: coinData.priceData[0].marketCap,
          "24hChange": coinData.priceData[0]["24hChange"],
        };

        return res.status(200).json(coinObject);
      } else {
        return res.status(400).json({ error: "Coin data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching coin data" });
    }
  }
}

export default new CoinController();
