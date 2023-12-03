import mongoose from "mongoose";

export function dbConnect(URI) {
    console.log("Database Connecting..........⏲ ")
    mongoose.connect(URI).then(() => {
        console.log("DataBase Connnected Succesfully 🙂")
    }).catch((error) => {
        console.log("Error while connecting to the database ⚠ ")
    })
}


