'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { FaPenNib } from 'react-icons/fa6'
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import CustomAvatar from "./CustomAvatar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";


const Navbar = () => {
  const router = useRouter()
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center h-16">
      <Link href={'/'} className={'font-poppins text-xl flex gap-2 tracking-tight items-center'}>
        <FaPenNib />

        Ink Space</Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {user ?
          <CustomAvatar />
          :
          <Button onClick={() => router.push('/login')} >Login</Button>
        }
      </div>
      {/* <h1 style={{ fontFamily: "Satoshi" }}>Hello, Satoshi Font!</h1> */}
    </nav>
  )
}

export default Navbar

