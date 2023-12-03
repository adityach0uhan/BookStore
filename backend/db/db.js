import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URI = process.env.MONGO_DB_URI
export function dbConnect() {

    mongoose.connect(URI).then(() => {
        console.log("DataBase is Connnected")
    }).catch((error) => {
        console.log(error)
    })
}


