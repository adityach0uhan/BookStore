"use client"
import { useState,useEffect } from 'react'
import axios from "axios"
const DeletePage = ({id}) => {
  const [bookData, setbookData] = useState([''])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.
      delete(`http://localhost:5000/books/${id}`).
      then((data) => {
        const result = data.data.BookList
        setbookData(result)
      }).then(() => {
        setLoading(false)
      }).
      catch((err => {
        console.log(err)
      }))

  }, [''])

  return (
    <div>
      
      

    </div>
  )
}

export default DeletePage