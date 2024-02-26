import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
  {
    buyer_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    player_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  },
  {
    timestamps: true,
  }
);

export const Contract = new mongoose.model("Contract", contractSchema);
