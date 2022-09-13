const express = require("express");
const app = express();
const socket = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

const PORT = 5000;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dkdpkah.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/list", (req, res) => {
  res.json([
    {
      name: "cow1",
      age: 1,
      weight: 100,
    },
    {
      name: "cow2",
      age: 2,
      weight: 200,
    },
  ]);
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
