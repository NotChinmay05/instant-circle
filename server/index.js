import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import apiRouter from "./src/routes/api.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ quiet: true });

const app = express();
const port = process.env.PORT || 3000;

// In-memory room registry: Map<roomId, Set<socketId>>
const rooms = new Map();

// http server using express app
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow credentials (cookies) to be sent
  })
);

// express routes
app.use("/api", apiRouter);

server.listen(port, () => {
  console.log(`Instant Circle server listening on http://localhost:${port}`);
});
