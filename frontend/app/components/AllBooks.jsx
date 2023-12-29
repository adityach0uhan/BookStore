"use client"
import React, { useState } from 'react'

import TableView from './TableView'
const AllBooks = ({ booklist }) => {

    const [view, setview] = useState("table")
    const handelView = (theme) => {
        setview(theme)
        console.log(view)
    }
    return (
        <>
            <div className='  m-auto text-center '>
                <div className='text-2xl m-10'>Book Store<div><button >Add more book</button></div></div>
                
                <div className='flex w-screen h-40 '>
                    <div><span onClick={()=> handelView("table")}>Table View</span></div>
                    <div><span onClick={()=> handelView("card")}>Card View</span></div>
                </div>
                

                {view == "table" ? <TableView booklist={ booklist} />: "Card"}
                

            </div>
        </>
    )
}

export default AllBooks