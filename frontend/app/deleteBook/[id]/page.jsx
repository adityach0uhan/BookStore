"use client"
import axios from "axios"
import Router from 'next/router'
import { useParams } from 'next/navigation'

const DeletePage = () => {
  const { id } = useParams()
  const deleteBook = () => {

    axios.delete(`http://localhost:5000/books/${id}`).
      then(() => {
        alert("Done Deleting")
        Router.back()
      }).then(() => {

      }).
      catch((err => {
        console.log(err)
      }))

  }
  return (
    <div className="w-full h-screen m-auto bg-red-400">
      <div className=" ">
        <p> Are you sure you want to delete this book</p>
        <button className='w-16 border-black border bg-green-400 hover:bg-green-500 rounded' > no</button>
        <button className='w-16 border-black border bg-green-400 hover:bg-green-500 rounded' onClick={() => deleteBook()} > yes</button>
      </div>

    </div>
  )
}

export default DeletePage