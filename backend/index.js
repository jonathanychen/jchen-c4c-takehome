"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const messages = new Array();
wss.on("connection", (ws) => {
    console.log("Connection made.");
    messages.forEach(msg => {
        ws.send(msg);
    });
    ws.on("error", console.error);
    ws.on("message", (data, isBinary) => {
        console.log("received: %s", data.toString());
        messages.push(data.toString());
        wss.clients.forEach(client => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
});
