import dotenv from "dotenv/config";
import cors from "cors";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

connectDB()
  .then(
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB connection Failed!", error);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

const playerData = {
  playerName: "Kajal Soni",
  battingPoints: 57,
  bowlingPoints: 21,
  wkPoints: 71,
};

app.get("/api/playerData", (req, res) => {
  res.send(playerData);
});
