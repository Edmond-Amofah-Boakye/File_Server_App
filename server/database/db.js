import mongoose from "mongoose";

const connection = () =>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database sucessfully connected");
    } catch (error) {
        console.log(`could not connect, ${error}`);
    }
}


export default connection;