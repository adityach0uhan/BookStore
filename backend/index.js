import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import { dbConnect } from "./db/db.js"; 
const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Home Route")
})



app.listen(port, () => {
    console.log()
    console.log(`Server is running on port ${port} `)
    dbConnect();
})
