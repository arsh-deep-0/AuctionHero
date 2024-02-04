import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
  },
  teamLogo: {
    type: String,
    required: true,
    unique: true,
  },
  intialPurse: {
    type: Number,
    required: true,
  },
  currentPurse: {
    type: Number,
    required: true,
  },
  currentPlayerCount: {
    type: Number,
    required: true,
    default: 0,
  },
  playersBought: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  }],
  isComplete: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const Team = mongoose.model("Team", teamSchema);
