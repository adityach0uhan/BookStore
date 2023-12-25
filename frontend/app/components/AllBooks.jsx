'use client'
import React from 'react'
const AllBooks = ({ booklist }) => {
    console.log(booklist)
    return (
        <>
            <div className='w-full h-full'>
                <table className='table-auto'>

                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>author</th>
                        <th>Publish Year</th>
                        <th>Task</th>
                    </tr>

                    {
                        booklist.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.publishYear}</td>
                                    <td><button>Edit</button></td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default AllBooks