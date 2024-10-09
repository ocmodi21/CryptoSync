import mongoose, { Schema, Document } from "mongoose";

export interface Coin extends Document {
  coinID: string;
  price: number;
  marketCap: number;
  "24hChange": number;
}

const CoinSchema: Schema = new Schema(
  {
    coinID: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    "24hChange": { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CoinModel = mongoose.model<Coin>("Coin", CoinSchema);

export default CoinModel;
