"use client"
import axios from "axios"
import { useEffect } from "react"
export default function Home() {

  useEffect(() => {
  
    axios.get("http://localhost:5000/books/").then((response) => {
      console.log(response)
    }).catch((err => {
      console.log(err)
    }))
    


  }, [])
  


  return (
    <></>
  )
}
