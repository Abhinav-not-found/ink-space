import React from 'react'
import { PiLinkedinLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { PiGithubLogo } from "react-icons/pi";
import Logo from '../public/logo.svg'
import Image from 'next/image';

const LandingFooter = () => {
  return (
    <div className='flex flex-col items-end sticky bottom-0 z-0'>
      <div className='TOP bg-blue-400 w-3/4 h-10 p-4 rounded-xl rounded-br-none '></div>
      <div className="TRIANGLE w-20 h-0 border-l-[40px] absolute left-[14rem] border-l-transparent border-b-[40px] border-b-blue-400"></div>
      <div className='BOTTOM bg-blue-400 w-full h-72 p-8 rounded-t-xl rounded-tr-none flex flex-col justify-end '>
        <div className=''>
          <div className='flex justify-between items-center'>
            <p className='text-3xl'>Based in India</p>
            <div className='flex gap-4 text-3xl'>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/abhinav-kumar-mernstack/' className='cursor-pointer'
              >
                <PiLinkedinLogo />
              </a>
              <a
                href="https://github.com/Abhinav-not-found/ink-space"
                target="_blank"
                rel="noopener noreferrer"
                className='cursor-pointer'>
                <PiGithubLogo />
              </a>
              <a
                href="mailto:your-email@example.com"
                className='cursor-pointer'
              >
                <IoMailOutline />
              </a>

            </div>
          </div>
          <p style={{ fontFamily: 'Satoshi' }} className='text-9xl w-full uppercase font-extrabold flex gap-4'>
            <Image src={Logo} className='w-24 h-auto dark:invert' alt='ink space logo' />
            ink space</p>
        </div>
        <div className='border-t-[1px] border-black dark:border-white mt-2 pt-2 flex justify-between'>
          <p> © 2025 Ink Space</p>
          <p>
            Made by Abhinav Kumar
          </p>
        </div>
      </div>
    </div>

  )
}

export default LandingFooter
