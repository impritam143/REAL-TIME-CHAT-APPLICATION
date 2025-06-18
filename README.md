COMPANY: CODTECH IT SOLUTIONS

NAME: PRITAM KUMAR

INTERN ID: CT04DF1457

DOMAIN: FRONTEND WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTOSH

DESCRIPTION OF THE TASKS:
A real-time chat application is a web-based communication platform that allows users to send and receive messages instantly without needing to reload the page. It enables users to communicate in a seamless and interactive manner, simulating the experience of a live conversation. The main goal of this project is to implement a simple and functional frontend-based chat system using technologies such as HTML, CSS, JavaScript, and WebSockets.

In this project, the frontend part is responsible for the user interface (UI), where users can type and send messages, and view incoming messages from other users. The chat window displays messages dynamically as they are received. The design is kept minimal and user-friendly, using HTML for structure, CSS for styling, and JavaScript for functionality.
The core feature that makes the application "real-time" is the use of WebSockets. WebSockets provide a full-duplex communication channel between the browser and the server. Unlike HTTP requests which require the client to continuously request new data (polling), WebSockets allow the server to push updates to the client as soon as something changes. This creates an instant messaging experience where users see new messages the moment they are sent.

When a user opens the chat app, a WebSocket connection is established with the server. As the user types a message and clicks the “Send” button, the message is transmitted through the WebSocket to the server. The server then broadcasts this message to all connected clients, allowing everyone in the chat to see the new message immediately. This makes the chat application interactive and responsive, which is essential in modern web communication systems.

On the backend, the Node.js environment is used along with the ws (WebSocket) library to create a simple server. The server listens for client connections and stores all messages in memory. When a new user joins, the server sends them all previously stored messages so they can catch up with the chat history. This ensures that even new users don’t feel left out of the conversation. While the current version stores messages in memory (RAM), this could be extended in future versions to store messages in a database for long-term history.
This project is a practical example of how modern web technologies can be used to build live, interactive web applications. Real-time chat apps are widely used in today’s digital world, from customer support systems to social media platforms and team collaboration tools. Developing such an application helps in understanding how real-time communication works, how to manage asynchronous data, and how frontend and backend systems interact with each other over WebSocket protocols.

In summary, the real-time chat application demonstrates the use of frontend technologies combined with real-time communication protocols to create a fully functioning, interactive chat interface. It enhances the user experience by delivering instant updates, and serves as a strong foundation for building more advanced messaging platforms with features like emojis, file sharing, user authentication, and chat rooms.

OUTPUT:
![Image](https://github.com/user-attachments/assets/c482f549-cfb7-4483-977c-8d9d5f6c4ef0)

