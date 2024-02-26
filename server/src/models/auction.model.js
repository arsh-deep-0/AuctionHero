import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema(
  {
    auctionRoomId: {
      type: String,
      required: true,
    },
    auctionName: {
      type: String,
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    auctionSummary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuctionSummary",
      required: true,
    },
    waitingRoomId: {
      type: String,
      required: true,
    },
    auctionRules: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuctionRules",
      required: true,
    },
  },
  { timestamps: true }
);

export const AuctionRules = mongoose.model("Auction", auctionSchema);
