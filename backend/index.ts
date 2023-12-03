import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const messages = new Array();

wss.on("connection", (ws) => {
    console.log("Connection made.");

    messages.forEach(msg => {
        ws.send(msg);
    })

    ws.on("error", console.error);

    ws.on("message", (data, isBinary) => {
        console.log("received: %s", data.toString())
        messages.push(data.toString())
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    })
})