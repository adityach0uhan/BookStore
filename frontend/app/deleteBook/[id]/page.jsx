"use client"
import axios from "axios"
import Router from 'next/router'
import { useParams } from 'next/navigation'
import { useRouter } from "next/navigation"
const DeletePage = () => {
  const { id } = useParams()
  const router=useRouter()
  const deleteBook = () => {

    axios.delete(`http://localhost:5000/books/${id}`).
      then(() => {
        router.back()
      }).then(() => {

      }).
      catch((err => {
        console.log(err)
      }))

  }
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="bg-red-400 m-auto rounded p-5 w-80 h-40 text-center">
        <p> Are you sure you want to delete this book</p>
        <button className='w-16 m-4 border-black border bg-green-400 hover:bg-green-500 rounded' onClick={()=> router.back()} > no</button>
        <button className='w-16 m-4 border-black border bg-green-400 hover:bg-green-500 rounded' onClick={() => deleteBook()} > yes</button>
      </div>

    </div>
  )
}

export default DeletePage