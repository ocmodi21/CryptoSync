import CoinModel from "../models/coin.model";

export const fetchAndUpdateCryptoData = async () => {
  const ids = ["bitcoin", "matic-network", "ethereum"];
  const baseUrl = process.env.BASE_URL as string;

  try {
    for (const id of ids) {
      // api call
      const url = `${baseUrl}/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
      const data = await fetch(url);
      const coinData = await data.json();

      // create object
      const newPriceData = {
        price: coinData[id].usd,
        marketCap: coinData[id].usd_market_cap,
        "24hChange": coinData[id].usd_24h_change,
      };

      // Update the Coin document by pushing to priceData array
      await CoinModel.updateOne(
        { coinID: id },
        {
          $set: { coinID: id },
          $push: { priceData: newPriceData },
        },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error("Error fetching coin IDs:", error);
  }
};
