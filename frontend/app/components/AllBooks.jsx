"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPencil } from '@fortawesome/free-solid-svg-icons'
const AllBooks = ({ booklist }) => {

    const handelUpdate = (id) => {
        console.log(id)
    }
    const handelDelete = (id) => {
        console.log(id)
    }

    return (
        <>
            <div className='  m-auto text-center '>
                <h2 className='text-2xl m-10'>Book Store</h2>
                <table className='table-fixed m-auto  '>
                    <thead className=''>
                        <tr className='flex box-border mb-6 items-center justify-self-start gap-5 '>
                            <th className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>No.</th>
                            <th className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Title</th>
                            <th className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>author</th>
                            <th className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Publish Year</th>
                            <th className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Task</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            booklist.map((item, index) => {
                                return (

                                    <tr key={index} className='box-border flex items-center justify-start gap-5 flex '>
                                        <td className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{index + 1}</td>
                                        <td className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.title}</td>
                                        <td className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.author}</td>
                                        <td className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.publishYear}</td>
                                        <td className='min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize '>
                                            <button onClick={() => handelDelete(item._id)} className='w-16 border-black border mr-3  bg-red-400 rounded'><FontAwesomeIcon icon={faTrash} /></button>
                                            <button onClick={() => handelUpdate(item._id)} className='w-16 border-black border bg-green-400 rounded'><FontAwesomeIcon icon={faPencil} /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default AllBooks