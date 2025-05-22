'use client'
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/authContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import GirlPNG from '../public/pictures/girl.png'
import BoyPNG from '../public/pictures/boy.png'
import { useRouter } from "next/navigation";
import { getRandomQuote } from '../components/Quotes'

const Create = () => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [quote,setQuote]=useState('');
  const router = useRouter()
  const handleCreate = () => {
    setLoading(true)
    router.push('/create')
  }

  const name = user?.username ?? 'Sarah';
  const gender = user?.gender ?? 'male'
  const userImage = gender === 'female' ? GirlPNG : BoyPNG;

  useEffect(() =>{
      const newQuote = getRandomQuote()
      setQuote(newQuote)
  }, [])


  return (
    <div className=" w-full h-52 flex justify-between items-center bg-[#9dc4fb] dark:bg-[#5781bc] mt-1 px-6 py-20 rounded-xl">
      <div className="w-1/2">
        <h1 className="text-4xl mb-2 font-Poppins font-bold capitalize dark:text-gray-200">Hello {name}!</h1>
        <p className="mb-4 text-lg font-Satoshi font-medium dark:text-gray-200">
          {quote || '...'}
        </p>
        <Button onClick={handleCreate} className={'dark:bg-gray-300'}>
          {loading ? 'Getting ready ...' : 'Write a new post'}
        </Button>
      </div>
      <div className="flex">
        <Image
          className={`w-[11rem] h-auto ${gender === 'male' && 'mb-4'} ${gender === 'female' && 'mb-10'} scale-x-[-1]`}
          src={userImage}
          alt="girl writing blog"
        />
      </div>
    </div>
  )
}

export default Create
