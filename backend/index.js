import express from "express"
const app = express();
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()
import { dbConnect } from "./db/db.js"; 
import bookRoute from './routes/bookRoute.js'

//Enviroment Variables
const port = process.env.PORT
const URI = process.env.MONGO_DB_URI

app.use(cors ( {
    origin: "http://localhost:3000",
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    allowedHeaders:['Content-Type']
}))

app.get("/", (req, res) => {
    res.send("Home Route")
})

app.use(express.json())
app.use('/', bookRoute);



app.listen(port, () => {
    dbConnect(URI);
    console.log(`Server is running on port ${port} `)
})
