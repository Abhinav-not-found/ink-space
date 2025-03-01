"use client";
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import RegisterSVG from '../../public/register.svg';
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password) return toast.error('These fields are required!')

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    
    const response = await register(fullname, email, password);
    
    if (response?.success) {
      router.push("/login");
    }
  }

  return (
    <div className='flex'>
      <div className='w-1/2 mt-20'>
        <p className='font-bold text-5xl text-center' style={{ fontFamily: 'Satoshi' }}>Create an account</p>
        <p className='my-6 mb-10 text-center w-3/4 m-auto'>Join us today and start your journey with amazing features.</p>
        <div className="flex flex-col gap-3 items-center">
          <Input value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Full Name" type="text" className='w-5/6' />
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
          <Button onClick={handleSubmit} className='w-5/6'>Sign Up</Button>
        </div>
        {/* <div className='flex flex-col items-center mt-4'>
          <p className='mt-4 mb-10'>or sign up with</p>
          <div className='flex gap-6'>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaGoogle /></Button>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaApple /></Button>
            <Button variant={'outline'} className='flex gap-2 items-center !py-6 !px-4 rounded-full'><FaFacebook /></Button>
          </div>
        </div> */}

        <div className='flex justify-center mt-10'>
          <div className='flex gap-2'>
            <p className='font-semibold'>Already have an account?</p>
            <Link href={'/login'} className='underline'>Login</Link>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <Image src={RegisterSVG} className='mt-4 ml-10 w-full h-full' alt='a person registering his account' priority />
      </div>
    </div>
  );
};

export default RegisterPage;
