import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
URI = process.env.MONGO_DB_URI
export const dbConnect = () => {

    mongoose.connect(URI).then(() => {
        console.log("DataBase is Connnected")
    }).catch((error) => {
        console.log(error)
    })
}

dbConnect()

