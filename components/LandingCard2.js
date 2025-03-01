import React from 'react'

const LandingCard2 = ({title,img,category}) => {
  return (
    <div className='dark:text-black p-5'>
    <p className='font-Satoshi capitalize text-lg'>{category||'category'}</p>
    <p className='font-Poppins font-bold capitalize text-3xl mt-2'>{title}</p>
  </div>
  )
}

export default LandingCard2
