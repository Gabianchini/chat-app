import { Server } from 'socket.io';
import http from'http';
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["https://localhost:3000"],
        methods:["GET", "POST"]
    },
   
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {}; //{userId: socketId}

io.on('connection',(socket)=> {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        
            userSocketMap[userId] = socket.id;
        

        //io.emit send events toall connected clients
        //when someone connects the getOnline users is send
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }

    //socket.on is used to listen to the events, can be used in client and server side
    socket.on("disconnect",()=>{
        console.log("user disconnected", socket.id)
        //when user desconnects delete userId from userSSocketMap
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

io.engine.on('headers', (headers, request) => {
    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    headers['Access-Control-Allow-Methods'] = 'GET, POST';
  });
  
export {app, io, server}