import React, { useState } from 'react'

const AddBook = () => {

    const [title, settitle] = useState("")
    const [author, setauthor] = useState("")
    const [publishYear, setpublishYear] = useState("")

    const bookTitle = (e) => {
        console.log(bookTitle)
    }

    return (

        <>
            <div className='flex p-10 flex-col align-center justify-center w-full '>
                <span>Add More Books</span>
                <form action="" method="POST" className='flex-col flex'>
                    <label htmlFor="title" className='w-60 h-10 rounded'>Title</label>
                    <input type="text" className='w-60 h-10 rounded' onChange={(e)=>{bookTitle}} id='title' />
                    <label htmlFor="author" className='w-60 h-10 rounded'>Author</label>
                    <input type="text" className='w-60 h-10 rounded' id='author' onChange={() => { bookAuthor }} />
                    <label htmlFor="publish " className='w-60 h-10 rounded'>Publish Year</label>
                    <input type="text" id='publish' className='w-60 h-10 rounded' onChange={() => { bookpublishYear }} />
                    <button type='submit' className='w-20 h-10 rounded border border-black border-1'>Add Book</button>
                </form>

            </div>
        </>
    )
}

export default AddBook