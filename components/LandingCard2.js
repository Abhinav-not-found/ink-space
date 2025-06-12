import React from 'react'

const LandingCard2 = ({ title, img, category, textColor }) => {
  return (
    <div className='dark:text-black w-full h-full rounded-xl p-5'
      style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <p className={`font-Satoshi capitalize text-lg ${textColor}`}>{category || 'category'}</p>
      <p className={`font-Poppins font-bold capitalize text-3xl mt-2 ${textColor}`}>{title}</p>
    </div>
  )
}

export default LandingCard2
