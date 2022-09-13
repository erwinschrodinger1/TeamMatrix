const express = require("express");
const app = express();
const socket = require("socket.io");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let server = app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const io = socket(server);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("message", () => {
    console.log("Location received");
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
