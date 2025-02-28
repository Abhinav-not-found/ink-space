import { Button } from "@/components/ui/button";
import Link from "next/link";

const Create = () => {
  return (
    <div className=" w-full h-52 flex justify-between items-center bg-red-300 mt-1 px-6 py-20 rounded-xl">
      <div className="w-1/2">
        <h1 className="text-4xl mb-2 font-Poppins font-bold">Hello Sarah!</h1>
        <p className="mb-4 text-lg font-Satoshi font-medium">
          Believe in yourself, and the world will believe in you. The power to
          succeed is within you.
        </p>
        <Button>
        <Link href={'/create'}>Write a new post</Link>
      </Button>
      </div>
      <div className="flex">
        <img
          className="w-72 h-auto mt-2"
          src={'/pictures/dashboard.png'}
          alt="girl writing blog"
        />
      </div>
    </div>
  )
}

export default Create
