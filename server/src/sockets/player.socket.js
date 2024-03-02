import { sellPlayerSocket } from "../controllers/player.controller.js";


const playerSocket = (socket) => {
  return () => {


    socket.on("sellPlayer", async (data) => {
      console.log("hi", data);
      const soldData =await sellPlayerSocket(socket,data);
      socket.emit("playerSold", soldData);
    });

    socket.on('getPlayer', async (data)=>{
      
    })
  };
};

export default playerSocket;
