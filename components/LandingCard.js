import React from 'react'

const LandingCard = ({title,img,category}) => {
  return (
    <div className='dark:text-black p-5'
      style={{
        backgroundImage:`url('${img}')`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
      }}
    >
      <p className='font-Satoshi capitalize text-lg'>{category||'category'}</p>
      <p className='font-Poppins font-bold capitalize text-3xl mt-2 w-1/2'>{title}</p>
    </div>
  )
}

export default LandingCard
