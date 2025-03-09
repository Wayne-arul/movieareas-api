import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


// we are using async await cuz db connection takes some time
const connectDB = async () => {
    try {
        // code is used to connect to mongodb using mongoose
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected!");
    }
    catch(error) {
        // whwnever error comes it will print error message and close the app
        console.error(error.message);
        process.exit(1); // closes the app
    }
}


export default connectDB;