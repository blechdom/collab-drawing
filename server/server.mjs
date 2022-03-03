import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500"
  }
});

httpServer.listen(3000);
io.on('connection', function (socket) {
    console.log("We have a new client: " + socket.id);
  }
);

