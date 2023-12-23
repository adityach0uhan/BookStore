import express, { response } from 'express'
const router = express.Router();
import books from '../db/model/bookModel.js'

// to get all books 
router.get('/books', async (req, res) => {
    try {
        const allBooks = await books.find({})
        res.status(200).json({
            TotalBooks: books.length,
            BookList: allBooks
        })
    } catch (err) {
        res.status(404).send("Can't Read Data from DataBase 😴 ")
        console.log(err)
    }
})


// to get One books 
router.get('/books/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const OneBook = await books.findById(id)
        res.status(200).send(OneBook)
    } catch (err) {
        res.send("Didn't Find Any book 😴 ")
        console.log(err)
    }
})


//to add a new book
router.post('/books', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return response.status(400).send({
                message: "All Fields Are required to be filled"
            })
        }
        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear
        }
        const book = await books.create(newBook);
        return res.status(201).send({ message: book })

    } catch (e) {
        console.log(e.message)
    }
})


// update a book
router.put('/books/:id', async (req, res) => {
    const { title, author, publishYear } = req.body;
    try {
        // if (!title || !author || !publishYear) {
        //     return response.status(400).send({
        //         message: "All Fields Are required to be filled"
        //     })
        // }
        const id = req.params.id
        const result = await books.findByIdAndUpdate(id,req.body)
        if (!result) {
            return res.status(404).json({message:"Book Now found 👎 "})
        }
        res.status(200).json({ message: "Book Updated Succesfully 🔂 " })

    } catch (error) {
        res.send(error)
    }





})






export default router;