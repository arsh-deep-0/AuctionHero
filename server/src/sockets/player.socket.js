import { sellPlayerSocket } from "../controllers/player.controller.js";

const playerSocket = (socket) => {
  return () => {
    socket.on("sellPlayer", async (data) => {
      console.log("hi", data);
      await sellPlayerSocket(data);
      socket.emit("playerSold", data);
    });
  };
};

export default playerSocket;
