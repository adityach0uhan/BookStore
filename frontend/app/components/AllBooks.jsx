"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faIdCard, faPlus } from '@fortawesome/free-solid-svg-icons'
import TableView from './TableView'
import { CardView } from './CardView'
import Loader from './Loader'
import Link from 'next/link'
const AllBooks = ({ booklist }) => {
    const [loading, setloading] = useState(false)
    const [view, setview] = useState("table")
    const handelView = (theme) => {
        setview(theme)
        console.log(view)
    }
    return (

        <>
            {booklist==true ? <Loader/>:<div className='  m-auto text-center '>
                <div className='flex w-screen flex-wrap h-16 items-center justify-around mb-9 mt-2 gap-4 '>
                    <h2 className='text-2xl font-semibold font-mono'>Book Store</h2>
                    <Link href='/addBook' >
                        <button
                            className='font-light bg-yellow-300 hover:bg-yellow-400 border-2 border-black border text-sm rounded p-2 font-mono'>
                            Add Book<FontAwesomeIcon className='ml-2' icon={faPlus} />
                        </button>
                    </Link>
                    <button
                        className='font-mono font-light bg-green-300 hover:bg-green-400 border-2 border-black border text-sm rounded p-2' onClick={() => handelView("table")}>
                        Table View<FontAwesomeIcon className='ml-2' icon={faTable} />
                    </button>
                    <button
                        className='font-mono font-light bg-green-300 hover:bg-green-400 border-2 border-black text-sm border rounded p-2' onClick={() => handelView("card")}>
                        Card View<FontAwesomeIcon className='ml-2' icon={faIdCard} />
                    </button>
                </div>
                {view == "table" ? <TableView booklist={booklist} /> : <CardView booklist={booklist} />}
            </div>
            }
        </>
        
    )
}

export default AllBooks