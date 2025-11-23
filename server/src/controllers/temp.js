// socket io connections
io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Create a new room and add this socket to it
    socket.on("create room", () => {
        let roomId = generateRoomId();
        // if room id already exists, create new (to avoid collisions)
        while (rooms.has(roomId)) roomId = generateRoomId();

        // create room entry and add socket client
        rooms.set(roomId, new Set([socket.id]));
        socket.join(roomId);

        console.log(`Room created: ${roomId} by ${socket.id}`);

        socket.emit("room created", { roomId });
    });

    // Join an existing room. payload: { roomId }
    socket.on("join room", (payload) => {
        const roomId = payload && payload.roomId ? String(payload.roomId) : null;
        if (!roomId || !rooms.has(roomId)) {
            socket.emit("invalid room", "Invalid Chat room");
            return;
        }

        // add socket to room set and join socket.io room
        const set = rooms.get(roomId);
        set.add(socket.id);
        socket.join(roomId);

        console.log(`Socket ${socket.id} joined room ${roomId}`);
        socket.emit("joined room", { roomId });

        // notify other members in the room that a user joined
        socket.to(roomId).emit("user joined", { socketId: socket.id });
    });

    // chat message: if msg.roomId present, send only to that room, otherwise broadcast all
    socket.on("chat message", (msg) => {
        console.log("chat message", msg);
        try {
            if (msg && msg.roomId) {
                const roomId = String(msg.roomId);
                if (rooms.has(roomId)) {
                    io.to(roomId).emit("chat message", msg);
                } else {
                    // optionally inform sender the room is invalid
                    socket.emit("invalid room", "Invalid Chat room");
                }
            } else {
                io.emit("chat message", msg);
            }
        } catch (err) {
            console.error("Error handling chat message", err);
        }
    });

    // Typing indicator: support room-scoped typing as well
    socket.on("typing", (data) => {
        if (data && data.roomId) {
            socket.to(String(data.roomId)).emit("typing", data);
        } else {
            socket.broadcast.emit("typing", data);
        }
    });

    socket.on("disconnect", (reason) => {
        console.log(`Socket ${socket.id} disconnected: ${reason}`);
    });
});

function generateRoomId() {
    return Math.random().toString(36).substring(2).toUpperCase();
}