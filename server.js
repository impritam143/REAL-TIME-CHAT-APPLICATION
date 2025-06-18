const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

let messages = []; // This stores all chat messages

server.on("connection", (socket) => {
  // Send old messages to the new client
  messages.forEach(msg => socket.send(msg));

  // Listen for new messages
  socket.on("message", (msg) => {
    messages.push(msg); // Store message
    // Broadcast to all connected clients
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});

console.log("WebSocket server started on ws://localhost:3000");
