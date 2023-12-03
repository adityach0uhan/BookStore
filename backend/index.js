import express from "express"
const port = process.env.PORT
const app = express();

app.get("/", (req, res) => {
    
    res.send("Home Route")
    
    console.log(port)
})


app.listen(5000, () => {
    console.log("Server is running on port 1000")
})
