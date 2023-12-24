"use client"
import axios from "axios"
import { useEffect,useState } from "react"
export default function Home() {

const [bookData, setbookData] = useState([])


  useEffect(() => {
    axios.
      get("http://localhost:5000/books/").
      then((data) => {
        console.log(typeof data)
        setbookData(data)
      }).
      catch((err => {
        console.log(err)
      }))

  }, [])



  return (
    <>
     ` {/* {bookData.map((item, data) => {
      return <h3>item</h3>
      })}` */}
    </>
  )
}
