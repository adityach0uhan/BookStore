import React from 'react'

const AddBook = () => {
    return (
        <>
            <div className='flex p-10 flex-col align-center justify-center w-full '>
                <span>Add More Books</span>
                <form action="" method="POST" className='flex-col flex'>
                    <label htmlFor="title" className='w-60 h-10 rounded'>Title</label>
                    <input type="text" className='w-60 h-10 rounded' id='title' />
                    <label htmlFor="author" className='w-60 h-10 rounded'>Author</label>
                    <input type="text" className='w-60 h-10 rounded' id='author' />
                    <label htmlFor="publish " className='w-60 h-10 rounded'>Publish Year</label>
                    <input type="text" id='publish' className='w-60 h-10 rounded' />
                    <button type='submit' className='w-60 h-10 rounded'>Add Book</button>
                </form>

            </div>
        </>
    )
}

export default AddBook