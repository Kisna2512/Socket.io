const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
     cors: {
        origin: "*",
  }
})

io.on("connection", (socket) => {
    console.log("what is socket is: ", socket);
    console.log("Socket is active");
    socket.on("chat", (payload) => {
        console.log("What is Payload: ", payload);
        io.emit("chat",payload)
    })
})


server.listen(5000, () => {
    console.log("Server is listening on Port 5000...");
})