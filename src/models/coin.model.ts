import mongoose, { Schema, Document } from "mongoose";

interface CoinData {
  price: number;
  marketCap: number;
  "24hChange": number;
}

export interface Coin extends Document {
  coinID: string;
  priceData: CoinData[];
}

const CoinDataSchema: Schema = new Schema(
  {
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    "24hChange": { type: Number, required: true },
  },
  {
    _id: false,
    timestamps: false,
  }
);

const CoinSchema: Schema = new Schema(
  {
    coinID: { type: String, required: true, unique: true },
    priceData: { type: [CoinDataSchema], required: true },
  },
  {
    timestamps: true,
  }
);

const CoinModel = mongoose.model<Coin>("Coin", CoinSchema);

export default CoinModel;
