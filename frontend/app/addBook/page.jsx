'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const AddBook = () => {

  const [title, settitle] = useState("")
  const [author, setauthor] = useState("")
  const [publishYear, setpublishYear] = useState("")
 

  const handelSubmit = () => {
    
    console.log(author)
    console.log(publishYear)
    console.log(title)

    const data = {
      title:title,
      author:author,
      publishYear:publishYear
    }
    axios.post("http://localhost:5000/books/", data).then(() => {
      console.log("Book Created successfullt")
      alert("Book Created Succesfully")
    }).catch((err) => {
      alert("Some error occurred ! , book not creare")
      console.log(err)
    })
    
  }
  
  

  return (
    <>
      <div className='flex p-10 flex-col align-center justify-center w-full '>
        <span className='text-center text-2xl'>Add More Books</span>
          <div className='w-100 border-black rounded border-1 border p-5'>
            <label htmlFor="title" className='w-60 h-10 mr-9 rounded text-center'>Title</label>
            <input type="text" className='w-60 h-7 p-3 rounded' value={title} onChange={(e) =>{ settitle(e.target.value)}} id='title' />
          </div>
          <div className='w-100 border-black rounded border-1 border p-5'>
            <label htmlFor="author" className='w-60 h-10  mr-9  rounded text-center'>Author</label>
            <input type="text" className='w-60 h-7 p-3 rounded' id='author' value={author} onChange={(e) => { setauthor(e.target.value) }} />
          </div>
          <div className='w-100 border-black rounded border-1 border p-5'>
            <label htmlFor="publish " className='w-60  mr-9  h-10 rounded text-center'>Publish Year</label>
            <input type="text" id='publish' className='w-60 h-7 p-3 rounded' value={publishYear} onChange={(e) => { setpublishYear(e.target.value) }} /></div>
          <div className='mt-4 w-full flex justify-center'>
            <button onClick={() => handelSubmit()} className='w-30 m-auto h-5 p-4 text-sm rounded border border-black border-1'><span className='m-auto h-full w-full'>Add Book</span></button>
          </div>
      </div>
    </>
  )
}

export default AddBook