import mongoose from 'mongoose';
const { Schema } = mongoose;


const book =new Schema( {
    title: String,
    author: String,
    date: {type:Date,default:Date.now}
})

const books = mongoose.model("Book",book)

