import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

interface CoinIds {
  id: string;
}

async function fetchCoinIDs(): Promise<void> {
  const url = (process.env.BASE_URL as string) + "/list";
  const coinIds: CoinIds[] = [];

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((coin: { id: string }) => {
      coinIds.push({ id: coin.id });
    });

    // Convert the coinIds array to JSON format
    const jsonData = JSON.stringify(coinIds, null, 2);

    // Write the JSON data to coinids.json
    fs.writeFileSync("coinids.json", jsonData);
  } catch (error) {
    console.error("Error fetching coin IDs:", error);
  }
}

(async () => {
  await fetchCoinIDs();
})();
