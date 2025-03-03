import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/authContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import GirlPNG from '../public/pictures/girl.png'
import BoyPNG from '../public/pictures/boy.png'

const Create = () => {
  const { user } = useContext(AuthContext)
  const name = user?.username
  const gender = user?.gender
  console.log(gender)
  return (
    <div className=" w-full h-52 flex justify-between items-center bg-red-300 mt-1 px-6 py-20 rounded-xl">
      <div className="w-1/2">
        <h1 className="text-4xl mb-2 font-Poppins font-bold capitalize">Hello { name || 'Sarah'}!</h1>
        <p className="mb-4 text-lg font-Satoshi font-medium">
          Believe in yourself, and the world will believe in you. The power to
          succeed is within you.
        </p>
        <Button>
        <Link href={'/create'}>Write a new post</Link>
      </Button>
      </div>
      <div className="flex">
        <Image
          className={`w-[11rem] h-auto ${gender === 'male' && 'mb-4'} ${gender === 'female' && 'mb-10'} scale-x-[-1]`}
          src={gender === 'male' ? BoyPNG : GirlPNG}
          alt="girl writing blog"
        />
      </div>
    </div>
  )
}

export default Create
