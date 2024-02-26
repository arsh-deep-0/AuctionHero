import playerSocket from "./player.socket.js";
import { sellPlayerSocket } from "../controllers/player.controller.js";

const initializeSocketIO = (io) => {
  return io.on("connection", async (socket) => {
    socket.emit("newConnection", `hello user ${socket.id}`);
    console.log(`a user connected with id ${socket.id}`);
    playerSocket(socket)();
  });
};

export { initializeSocketIO };
