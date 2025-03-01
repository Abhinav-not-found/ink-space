import React from 'react'
import { Square_Peg } from "next/font/google";

const squarePeg = Square_Peg({
  subsets: ["latin"],
  weight: "400",
});

const LandingHero = () => {
  return (
    <div className=''>
      <section className="relative">
        <div className="flex flex-col items-center w-full">
          <p style={{fontFamily:'Satoshi'}} className="text-9xl font-semibold self-start">
            <span className="text-[#007BFF] font-bold">E</span>xplore
          </p>
          <p style={{fontFamily:'Satoshi'}} className="text-9xl font-semibold self-center">
            <span className="text-[#FFD700] font-bold">I</span>nspire
          </p>
          <p style={{fontFamily:'Satoshi'}} className="text-9xl font-semibold self-end">
            <span className="text-[#ff2200] font-bold">C</span>reate
          </p>
        </div>
        <p className="absolute top-14 right-32 opacity-50 text-3xl text-right font-Poppins">
          Unleash Your Creativity<br/> Through Words
        </p>
        <p className="absolute bottom-2 left-10 opacity-50 text-3xl font-Poppins">
          Think. Create. Inspire.
          <br /> Let Your Imagination Flow
        </p>
        <p className={`absolute right-44 bottom-36 opacity-50 ${squarePeg.className} text-5xl rotate-6 capitalize text-[#FF4500] dark:text-[#ff0501] font-bold`}>
          creative
        </p>
        <p className={`absolute right-[34rem] bottom-14 opacity-50 ${squarePeg.className} text-5xl -rotate-6 capitalize text-[#ebc801] dark:text-[#FFD700] font-bold`}>
          Imagination
        </p>
        <p className={`absolute left-20 bottom-44 opacity-50 ${squarePeg.className} text-5xl rotate-6 capitalize text-[#007BFF] dark:text-[#1485ff] font-bold`}>
          Express
        </p>
      </section>
      <div className="w-full h-80 mt-10 flex gap-3 relative">
        <div className="w-3/5 h-full bg-red-500 rounded-3xl"></div>

        <div className="w-3/5 h-full bg-yellow-500 rounded-3xl"></div>
        <div className="w-4/5 h-full bg-yellow-500 rounded-3xl"></div>
        <div className="absolute bottom-0 left-[16rem] w-44 h-44 bg-blue-500 rounded-full border-[10px] border-white dark:border-black"></div>
      </div>
    </div>
  )
}

export default LandingHero
