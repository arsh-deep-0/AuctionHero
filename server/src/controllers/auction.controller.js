import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Auction } from "../models/auction.model.js";
import { AuctionRules } from "../models/auctionRules.model.js";
import { User } from "../models/user.model.js";

const createRoomID = async (req, res) => {
  let unique = false;
  while (!unique) {
    const generateSixDigitNumber = Math.floor(Math.random() * 900000 + 100000);

    const auction = await Auction.findOne({
      auctionRoomID: generateSixDigitNumber,
    });
    if (!auction.length) {
      unique = true;
      return generateSixDigitNumber;
    }
  }
};

const createAuction = asyncHandler(async (req, res) => {
  const { auctionName, hostID, date, auctionRulesID } = req.body;
  const auctionRoomID = await createRoomID();
  const auction = await Auction.create({
    auctionName,
    host: hostID,
    date,
    auctionRules: auctionRulesID,
    auctionRoomID,
    waitingRoomID: auctionRoomID,
    buyers: [hostID],
  });

  const createdAuction = await Auction.findOne(auction?._id);

  if (!createdAuction) {
    throw new ApiError(
      500,
      "something went wrong while creating a new auction"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdAuction, "Auction created succesfully"));
});

const addBuyerToAuction = async (joiningData) => {
  try {
    const { userID, waitingRoomID } = joiningData;
    const user = await User.findOne({ _id: userID });
    if (!user) {
      throw new ApiError(404, "No such user exists");
    }

    const auction = await Auction.findOne({ waitingRoomID });

    if (auction.buyers.includes(userID)) {
      // Emit an event indicating that the user is already present in the buyer array
      return { waitingRoomID, userID, alreadyAdded: true };
    }

    auction.buyers.push(userID);
    await auction.save({ validateBeforeSave: false });

    // Emit an event indicating successful addition of the buyer
    return { waitingRoomID, userID, alreadyAdded: false };
  } catch (error) {
    console.error("Error in addBuyerToAuction:", error);
    // Return an error object if there's an error
    return { error: error.message };
  }
};

const removeBuyerFromAuction = async (socket, removingData) => {
  try {
    const { userID, waitingRoomID } = removingData;
    const user = await User.findOne({ _id: userID });
    if (!user) {
      throw new ApiError(404, "No such user exists");
    }

    const auction = await Auction.findOne({ waitingRoomID });
    console.log(auction);
    if (!auction) {
      throw new ApiError(404, "waiting Room does not exist");
    }

    if (!auction.buyers.includes(userID)) {
      return { waitingRoomID, userID, alreadyRemoved: true };
    }

    console.log("user removing",socket.userID)
    // Check if the user attempting to remove the buyer is the buyer or the auction host
    if (
      socket.userID.toString() !== user._id.toString() &&
      socket.userID.toString() !== auction.host.toString()
    ) {
      throw new ApiError(403, "Unauthorized to remove buyer from auction");
    }

    auction.buyers.pull(userID);
    await auction.save({ validateBeforeSave: false });

    return { waitingRoomID, userID, alreadyRemoved: false };
  } catch (error) {
    console.error("Error in removeBuyerToAuction:", error);
    // Return an error object if there's an error
    return { error: error.message };
  }
};

export { createAuction, addBuyerToAuction, removeBuyerFromAuction };
