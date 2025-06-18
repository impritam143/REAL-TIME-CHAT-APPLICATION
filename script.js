// Replace with your WebSocket server URL (e.g. ws://localhost:3000)
const socket = new WebSocket("ws://localhost:3000");

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("messageInput");

// Listen for messages
socket.addEventListener("message", (event) => {
  const message = document.createElement("div");
  message.textContent = event.data;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Send message
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.send(message);
    messageInput.value = "";
  }
}
