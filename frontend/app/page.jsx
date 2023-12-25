"use client"
import axios from "axios"
import AllBooks from "./components/AllBooks"
import { useEffect,useState } from "react"
export default function Home() {

const [bookData, setbookData] = useState([''])
const [loading,setLoading]=useState(false)

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
      {loading ? "Loading" : <AllBooks booklist={bookData}/> }
    </>
  )
}
