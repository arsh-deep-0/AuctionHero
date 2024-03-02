import {
  addBuyerToAuction,
  removeBuyerFromAuction,
} from "../controllers/auction.controller.js";

const auctionSocket = (socket) => {
  return () => {
    socket.on("addBuyerToAuction", async (joiningData) => {
      try {
        const result = await addBuyerToAuction(socket , joiningData);
        socket.emit("addBuyerToAuctionResult", result);
      } catch (error) {
        console.error("Error in addBuyerToAuction:", error);
      }
    });

    socket.on("removeBuyerFromAuction", async (removingData) => {
      try {
        const result = await removeBuyerFromAuction(socket, removingData);
        socket.emit("removeBuyerFromAuctionResult", result);
      } catch (error) {
        console.error("Error in removeBuyerFromAuction:", error);
      }
    });


  };
};

export default auctionSocket;
