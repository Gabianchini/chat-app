import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDb from "./db/connectDb.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

app.use(express.json());// to parse incoming requests with json payloads (from req.body)
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//used to serve static files
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"));
});

server.listen(PORT,() => {
    connectDb();
} 
);

