import express from 'express'
const router = express.Router();

router.get('/books', (req, res) => {
    res.send("Book route")
})



export default router;