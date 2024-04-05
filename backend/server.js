import  express  from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectDb from "./db/connectDb.js"
const app = express();

dotenv.config();

app.use(express.json());// to parse incoming requests with json payloads (from req.body)

const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    //root route http://localhost:5000/
    res.send("hello world!")
});

app.use("/api/auth", authRoutes)

app.listen(PORT,() => {
    connectDb();
    console.log(`Server Running on port ${PORT} `);
} 
);

