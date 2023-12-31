'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const EditBook = () => {
  const router=useRouter()
  const { id } = useParams()
  const [title, settitle] = useState("")
  const [author, setauthor] = useState("")
  const [publishYear, setpublishYear] = useState("")

  useEffect(() => {

    axios.get(`http://localhost:5000/books/${id}`)
      .then((resp) => {
        settitle(resp.data.title)
        setauthor(resp.data.author)
        setpublishYear(resp.data.publishYear)
      }).catch((err) => {
        console.log(err)
      })


  }, [])


  const handelSubmit = () => {

    const data = {
      title: title,
      author: author,
      publishYear: publishYear
    }
    axios.put(`http://localhost:5000/books/${id}`, data).then(() => {
      router.back()
    }).catch((err) => {
      alert("Some error occurred ! , book not creare")
      console.log(err)
    })

  }



  return (
    <>
      <div className='flex p-5 flex-col items-center justify-center w-full '>
        <span className='text-center text-2xl p-8'>Edit Book Id : {id} </span>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Title</span></div>
          <div className=' w-3/4 h-full rounded '>
            <input type="text" className='w-full h-7  border  focus:bg-yellow-200 pl-3 border-1 border-black text-l rounded' value={title} onChange={(e) => { settitle(e.target.value) }} id='title' />
          </div>

        </div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Author</span></div>
          <div className=' w-3/4 h-full rounded '>

            <input type="text" className='w-full h-7  border  focus:bg-yellow-200 pl-3 border-1 border-black text-l rounded' id='author' value={author} onChange={(e) => { setauthor(e.target.value) }} />
          </div>
        </div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-1/4 h-full  rounded text-center'><span className='text-center'>Publish year</span></div>
          <div className=' w-3/4 h-full rounded '>
            <input type="text" id='publish' className=' focus:bg-yellow-200 w-full h-7  border pl-3 border-1 border-black text-l rounded' value={publishYear} onChange={(e) => { setpublishYear(e.target.value) }} /></div></div>
        <div className='w-1/3 border-black rounded border-1 flex items-center justify-center gap-5  border p-2 mb-2'>
          <div className=' w-3/4 h-full rounded '>

            <button onClick={() => handelSubmit()} className='w-full bg-green-400 hover:bg-green-600 m-auto h-9  text-sm  text-center rounded border border-black border-1'><span className='m-auto h-full w-full'>Save  </span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBook