import React from 'react'
import loading from './assets/loading.gif'
function Loading() {
  return (
    <div className='w-100 mt-20 flex justify-center items-center'>
      <img width={180}  src={loading}  alt="loading" /></div>
  )
}

export default Loading