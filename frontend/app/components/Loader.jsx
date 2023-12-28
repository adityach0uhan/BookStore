import React from 'react'

const Loader = () => {
  return (
      <div className='flex w-screen h-screen'>
          <div className='h-40 w-40 m-auto' >
              <img className='h-30 w-30' src="loader.gif" alt="" />
          </div>
    </div>
  )
}

export default Loader