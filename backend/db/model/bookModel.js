import mongoose from 'mongoose';
const { Schema } = mongoose;


const book =new Schema( {
    title: {
        type: String,
        required:true,
    },
    subject: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: String,
        required: true,
    },
    totalPages: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const books = mongoose.model("Book",book)
export default books
