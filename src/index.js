const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    const response = new Date();
    socket.on("chat message", (data) => {
        io.emit("chat message", data);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(9000, () => {
    console.log("listening on *:9000");
});
