const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

module.exports = io;