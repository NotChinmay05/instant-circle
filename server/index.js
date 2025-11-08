import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

// http server using express app
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] },
});

app.use(express.json());

// express routes
app.get("/", (req, res) => {
    res.send("Instant Circle server is running");
});

// socket io connections
io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("chat message", (msg) => {
        console.log("chat message", msg);
    });

    socket.on("disconnect", (reason) => {
        console.log(`Socket ${socket.id} disconnected: ${reason}`);
    });
});

server.listen(port, () => {
    console.log(`Instant Circle server listening on http://localhost:${port}`);
});