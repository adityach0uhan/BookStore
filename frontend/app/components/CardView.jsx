import React from 'react'

export const CardView = ({ booklist }) => {
    return (
        <>
            <div className='w-screen h-full gap-3 p-2 grid grid-cols-4 '>
                {
                    booklist.map((data, index) => {

                        return <div className='w-62 h-40 bg-red-700 rounded'>
                            <div>{data._id}</div>
                            <div>Title : {data.title}</div>
                            <div>Author : {data.author}</div>
                            <div>Publish Year : {data.publishYear}</div>
                        </div>

                    })

                }
            </div>





        </>
    )
}
