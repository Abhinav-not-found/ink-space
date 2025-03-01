"use client";
import Link from 'next/link'
import React, { useContext } from 'react'
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import LoginSVG from '../../public/login.svg'
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';




const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext)
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if ( !email || !password ) return toast.error('These fields are required!')
    const result = await login(email, password)  
    if(result?.success) {
      router.push('/home')
    }
  }


  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Image src={LoginSVG} className='mt-10 -ml-4 w-full h-full' alt='girl writing blog' priority />
      </div>
      <div className='w-1/2 mt-18'>
        <p className='font-bold text-5xl text-center' style={{ fontFamily: 'Satoshi' }}>Welcome back!</p>
        <p className='my-6 mb-10 text-center w-3/4 m-auto'>Access your account to manage your blogs, interact with others, and stay inspired.</p>
        <div className="flex flex-col gap-3 items-center">
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className='w-5/6' />
          <div className="relative w-5/6">
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="pe-9"
              placeholder="Password"
              type={isVisible ? "text" : "password"}
            />
            <button
              className="text-muted-foreground/80 cursor-pointer hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
              aria-pressed={isVisible}
              aria-controls="password"
            >
              {isVisible ? (
                <EyeOffIcon size={16} aria-hidden="true" />
              ) : (
                <EyeIcon size={16} aria-hidden="true" />
              )}
            </button>
          </div>
          <Button onClick={handleLogin} className='w-5/6'>login</Button>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <p className='mt-4 mb-10'>or continue with</p>
          <div className='flex gap-6'>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaGoogle className='text' /></Button>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaApple className='text' /></Button>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaFacebook className='text' /></Button>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <div className='flex gap-2'>
            <p className='font-semibold'>Not a member?</p>
            <Link href={'/register'} className='underline'>Register now</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default page
