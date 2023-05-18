import AppError from "./utils/AppError.js"
import errors from "./middleware/error.js";
import connection from "./database/db.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config({path: './config/.env'})


const app = express()

//handling uncaught

process.on("uncaughtException", ()=>{
    console.log("sorry, something unusual happened, server shutting down!!!");
    process.exit(1)
})

//usimg helmet middleware
app.use(helmet())

//using cors middleware
app.use(cors())

//using morgan middleware
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("./uploads"))





//unhandled routes
app.all("*", (req, res, next)=>{
    next(new AppError(`cannot find ${req.originalUrl} on this server`, 404))
})


//error middleware
app.use(errors)
//connecting database
connection()

//Listening to server


const server = app.listen(process.env.PORT || PORT, (error)=>{
    if(error){
        console.log(error.message);
    }
    console.log(`APP is Running on http://localhost:${process.env.PORT}`);
})



//Handling unhandledrejection
process.on("unhandledRejection", ()=>{
    console.log("sorry, could not proceed with request");
    server.close(()=>{
        process.exit(1)
    })
})

