import React, { useState } from 'react'

const AddBook = () => {

    const [title, settitle] = useState("")
    const [author, setauthor] = useState("")
    const [publishYear, setpublishYear] = useState("")

    const handelSubmit = () => {
        console.log(title)
    }

    return (

       <></>
    )
}

export default AddBook