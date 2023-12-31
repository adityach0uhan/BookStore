import React from 'react'
import Link from 'next/link'
const Back2Home = () => {
    return (
        <div className='w-screen h-20 flex justify-center items-center'>
          
            <Link className='w-60 border-1 border border-black h-10 bg-yellow-200 hover:bg-yellow-300' href={'/'}>
                <button className='w-full h-full '>Back to Home</button>
     </Link>
    </div>
  )
}

export default Back2Home