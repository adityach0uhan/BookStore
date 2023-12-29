import React from 'react'

export const CardView = ({ booklist }) => {
    return (
        <>
            {
                booklist.map((data, index) => {

                    return  <div className='w-full h-full grid grid-cols-4 gap-4 bg-blue-500'>
                        <div className='w-62 h-40 bg-red-700 rounded'>
                            <span>{data._id}</span>
                        </div>
                    </div>

                })
                
            }





        </>
    )
}
