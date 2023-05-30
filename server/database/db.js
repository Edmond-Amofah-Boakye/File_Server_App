import mongoose from "mongoose";

const connection = () =>{
   mongoose.connect(process.env.MONGO_URL)
    .then((data)=>{
        console.log(`database sucessfully connected on ${data.connection.host}`);
    })
    .catch((err)=>{
        console.log(`error occured ${err}`);
    })
}


export default connection;