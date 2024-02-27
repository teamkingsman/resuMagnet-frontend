import React from 'react'
import CreatePost from './CreatePost/CreatePost'

function JobPost () {
  return (
    <div className='flex flex-col  text-center bg-sub_color space-y-2 p-4'>
        <h1 className='text-5xl font-semibold text-whitecolor'>CareerCanvas</h1>
        <p className='text-2xl font-medium text-main'>Unleash opportunities! Post or find jobs in our vibrant CareerCanvas community and shape your professional journey.</p>
        <CreatePost></CreatePost>
    </div>
  )
}

export default JobPost