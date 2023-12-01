"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (ws) {
    console.log("Connection made.");
    ws.on("error", console.error);
    ws.on("message", function (data, isBinary) {
        console.log("received: %s", data.toString());
        wss.clients.forEach(function (client) {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
});
