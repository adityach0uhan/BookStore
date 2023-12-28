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
            <div className='  m-auto text-center'>
                <h2 className='text-2xl m-10'>Book Store</h2>
                <table className='table-fixed border-collapse   m-auto border-spacing-2 border border-slate-500'>
                    <thead className=''>
                        <tr className='flex box-border mb-6 items-center justify-self-start gap-5 border-black'>
                            <th className='min-w-40 capitalize'>No.</th>
                            <th className='min-w-40 capitalize'>Title</th>
                            <th className='min-w-40 capitalize'>author</th>
                            <th className='min-w-40 capitalize'>Publish Year</th>
                            <th className='min-w-40 capitalize'>Task</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            booklist.map((item, index) => {
                                return (

                                    <tr key={index} className='box-border flex items-center justify-start gap-5 border-black flex gap-5 border border-slate-700 '>
                                        <td className='min-w-40 capitalize'>{index + 1}</td>
                                        <td className='min-w-40 capitalize'>{item.title}</td>
                                        <td className='min-w-40 capitalize'>{item.author}</td>
                                        <td className='min-w-40 capitalize'>{item.publishYear}</td>
                                        <td className='min-w-20 capitalize '>
                                            <button onClick={() => handelDelete(item._id)} className='w-20 border-black border m-2 bg-red-400 rounded'><FontAwesomeIcon icon={faTrash} /></button>
                                            <button onClick={() => handelUpdate(item._id)} className='w-20 border-black border m-2 bg-green-400 rounded'><FontAwesomeIcon icon={faPencil} /></button>
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