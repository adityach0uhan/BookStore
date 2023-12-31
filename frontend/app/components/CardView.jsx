import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export const CardView = ({ booklist }) => {
    return (
        <>
            <div className='w-screen h-full gap-4 p-4 grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2'>
                {
                    booklist.map((data, index) => {

                        return <>
                            <div className='w-72 h-52  box-border text-wrap word-wrap text-sm text-center justify-items-start justify-self-start h-40 grid grid-rows-4 bg-yellow-200 '>
                                <div className='w-full border-1 border content-center border-black box-border'><div className='pt-4 w-full h-full bg-sky-300'>ID: " {data._id} "</div></div>
                                <div className=' w-full justify-items-start  justify-self-center grid grid-cols-2 border-1 box-border content-center border border-black'><div className='pl-2'>Title</div> <div>{data.title}</div> </div>
                                <div className=' w-full justify-items-start  justify-self-center grid grid-cols-2 border-1 box-border content-center border border-black'><div className='pl-2'>Author</div><div>{data.author}</div></div>
                                <div className=' w-full justify-items-start  justify-self-center grid grid-cols-2 border-1 box-border content-center border border-black'><div className='pl-2'>Publish Year </div> <div>{data.publishYear}</div>
                                </div>
                                <div className='w-full justify-items-start  justify-self-center grid grid-cols-2 border-1 box-border content-center border border-black'>
                                    <Link className='w-full' href={`/deleteBook/${data._id}`}>
                                        <button className='w-full  bg-red-400 hover:bg-red-500 '><FontAwesomeIcon icon={faTrash} /></button></Link>
                                    <Link className='w-full'  href={`/editBook/${data._id}`}>
                                        <button className='w-full bg-green-400 hover:bg-green-500 '><FontAwesomeIcon icon={faPencil} /></button>
                                    </Link></div>
                            </div>

                        </>
                    })
                }
            </div>





        </>
    )
}
