import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='animate-spin border-t-transparent border-red-300 border-2 w-10 h-10  scale-150  rounded-full '></div>
    </div>
  )
}

export default Loading