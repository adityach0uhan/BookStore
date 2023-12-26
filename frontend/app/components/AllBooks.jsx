"use client"
import React from 'react'
const AllBooks = ({ booklist }) => {
    return (
        <>
            <div className='  m-auto text-center'>
                <table className='table-auto text-center m-auto border-'>
                    <thead>
                        <tr className='flex gap-5 border-black'>
                            <th className='w-40'>No.</th>
                            <th className='w-40'>Title</th>
                            <th className='w-40'>author</th>
                            <th className='w-40'>Publish Year</th>
                            <th className='w-40'>Task</th>
                        </tr>
                    </thead>
                    {
                        booklist.map((item, index) => {
                            return (
                                <tbody>
                                    <tr key={index} className='m-2 flex gap-5 '>
                                        <td className='w-40'>{index + 1}</td>
                                        <td className='w-40'>{item.title}</td>
                                        <td className='w-40'>{item.author}</td>
                                        <td className='w-40'>{item.publishYear}</td>
                                        <td className='w-40'><button>Edit</button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default AllBooks