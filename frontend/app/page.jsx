"use client"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import AllBooks from "./components/AllBooks"
import { useEffect, useState } from "react"
import AddBook from "./components/AddBook"
import Loader from "./components/Loader"



export default function Home() {

  const [bookData, setbookData] = useState([''])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.
      get("http://localhost:5000/books/").
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
    <>
      {/* <div className="w-full  text-center text-2xl mt-2 mb-10"><h1><span className="mr-4">Book Store</span><FontAwesomeIcon icon={faBook} /></h1></div> */}
      {
        loading ?
          <Loader />
          :
          < AllBooks booklist={bookData} />}


      {/* <AddBook /> */}
    </>
  )
}
