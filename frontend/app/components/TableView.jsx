import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const TableView = ({ booklist }) => {
    return (
        <table className='table-fixed m-auto  '>
            <thead className=''>
                <tr className='flex box-border mb-6 items-center justify-self-start gap-5 '>
                    <th className='font-mono min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Sno.</th>
                    <th className='font-mono min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Title</th>
                    <th className='font-mono min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>author</th>
                    <th className='font-mono min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Publish Year</th>
                    <th className='font-mono min-w-48 capitalize p-2 m-2 rounded border border-1 border-black'>Task</th>
                </tr>
            </thead>
            <tbody >
                {
                    booklist.map((item, index) => {
                        return (

                            <tr key={index} className='box-border flex items-center justify-start gap-5 flex '>
                                <td className='font-sans font-light min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{index + 1}</td>
                                <td className='font-sans font-light min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.title}</td>
                                <td className='font-sans font-light min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.author}</td>
                                <td className='font-sans font-light min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize'>{item.publishYear}</td>
                                <td className='font-sans font-light min-w-48 capitalize p-2 m-2 rounded border border-1 border-black capitalize '>
                                    <Link href="/deleteBook">
                                        <button  className='w-16 border-black border mr-3  bg-red-400 hover:bg-red-500 rounded'><FontAwesomeIcon icon={faTrash} /></button></Link>
                                    <Link href="/editBook">
                                        <button className='w-16 border-black border bg-green-400 hover:bg-green-500 rounded'><FontAwesomeIcon icon={faPencil} /></button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

export default TableView