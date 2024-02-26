import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Player } from "../models/player.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Contract } from "../models/contract.model.js";

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

const sellPlayerSocket = async (sellingData) => {
  const { buyer, player } = sellingData;
  const contract = await Contract.create({ buyer_ID: buyer, player_ID: player });
  console.log(contract);

  const createdContract = await Contract.findOne(contract?._id);

  if (!createdContract) {
    throw new ApiError(500, "Something went wrong while creating the contract"); 
  }
};

export { createPlayer, sellPlayer, sellPlayerSocket };
