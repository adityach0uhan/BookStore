'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AddBook = () => {

  const [title, settitle] = useState("")
  const [author, setauthor] = useState("")
  const [publishYear, setpublishYear] = useState("")
  const router = useRouter()

  const handelSubmit = () => {

    console.log(author)
    console.log(publishYear)
    console.log(title)

    const data = {
      title: title,
      author: author,
      publishYear: publishYear
    }
    axios.post("http://localhost:5000/books/", data).then(() => {
      router.back()
    }).catch((err) => {
      alert("Some error occurred ! , book not creare")
      console.log(err)
    })

  }



  return (
    <>
      <div className='flex p-5 flex-col items-center justify-center w-full '>
        <span className='text-center text-2xl p-8'>Add More Books</span>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Title</span></div>
          <div className=' w-3/4 h-full rounded '>
            <input type="text" className='w-full h-7  border text-center border-1 border-black text-l rounded' value={title} onChange={(e) => { settitle(e.target.value) }} id='title' />
          </div>

        </div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Author</span></div>
          <div className=' w-3/4 h-full rounded '>

            <input type="text" className='w-full h-7  border text-center border-1 border-black text-l rounded' id='author' value={author} onChange={(e) => { setauthor(e.target.value) }} />
            </div>
        </div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Publish year</span></div>
          <div className=' w-3/4 h-full rounded '>
          <input type="text" id='publish' className='w-full h-7  border text-center border-1 border-black text-l rounded' value={publishYear} onChange={(e) => { setpublishYear(e.target.value) }} /></div></div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-3/4 h-full rounded '>

            <button onClick={() => handelSubmit()} className='w-full m-auto h-9  text-sm  text-center rounded border border-black border-1'><span className='m-auto h-full w-full'>Add Book <FontAwesomeIcon className='ml-2' icon={faPlus} /></span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddBook