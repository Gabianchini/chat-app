import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to DB")
        
    } catch (error) {
        console.log(error, "error connecting to mongodb")
        
    }
}

export default connectDb;