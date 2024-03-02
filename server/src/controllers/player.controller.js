import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Player } from "../models/player.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Contract } from "../models/contract.model.js";
import { Auction } from "../models/auction.model.js";
import {
  getUser,
  isHostOrUserHimself,
  getAuctionByRoomID,
  isHost,
} from "./auction.controller.js";

const createPlayer = asyncHandler(async (req, res) => {
  const {
    playerFirstName,
    playerLastName,
    battingPoints,
    bowlingPoints,
    wkPoints,
    playerImgSrc,
    basePrice,
    currentPrice,
    isSold,
  } = req.body;

  const player = await Player.create({
    playerFirstName,
    playerLastName,
    battingPoints,
    bowlingPoints,
    wkPoints,
    playerImgSrc,
    basePrice,
    currentPrice,
    isSold,
  });

  const createdPlayer = await Player.findOne(player._id);

  if (!createdPlayer) {
    throw new ApiError(500, "Something went wrong while creating the player");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdPlayer, "Player created successfully"));
});

const sellPlayer = asyncHandler(async (req, res) => {
  const { buyer, player } = req.body;
  console.log(req.body);
  console.log(player, " ", buyer);

  const contract = await Contract.create({ buyer, player });
  console.log(contract);

  const createdContract = await Contract.findOne(contract?._id);

  if (!createdContract) {
    throw new ApiError(500, "Something went wrong while creating the contract");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, createdContract, "Contract created successfully")
    );
});

const sellPlayerSocket = async (socket, sellingData) => {
  try {
    const { buyer, player, auctionID, amountSold } = sellingData;
    console.log(buyer, player);

    const auction = await Auction.findOne({ _id: auctionID });
    isHost(socket, auction);

    const playerAlreadySold = await searchContract(auctionID, player);
    console.log(playerAlreadySold)
    if (playerAlreadySold) {
      return {response : "player already sold"}
      //throw new ApiError(400, "Player already sold");
    }

    const contract = await Contract.create({
      buyer_ID: buyer,
      player_ID: player,
      auction_ID: auctionID,
      amountSold,
    });
    console.log(contract);

    const createdContract = await Contract.findOne(contract?._id);

    if (!createdContract) {
      throw new ApiError(
        500,
        "Something went wrong while creating the contract"
      );
    }
    return createdContract;
  } catch (error) {
    console.error("Error in selling Player in Auction:", error);
    return { error: error.message };
  }
};

const getAllplayers = async ({ socket, auctionRoomID }) => {
  const auction = getAuctionByRoomID(auctionRoomID);
};

// Function to search for documents with a particular auction_id and check if player_id exists
const searchContract = async (auctionId, playerId) => {
  try {
    // Query for documents with the specified auction_id
    const contracts = await Contract.find({ auction_ID: auctionId });

    // Check if playerId exists for any of the contracts found
    const playerExists = contracts.some((contract) =>
      contract.player_ID.equals(playerId)
    );

    return playerExists;
  } catch (error) {
    console.error("Error searching contracts:", error);
    throw error; // Rethrow the error for handling elsewhere if needed
  }
};

export { createPlayer, sellPlayer, sellPlayerSocket };
