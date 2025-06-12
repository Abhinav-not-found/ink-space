"use client";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { FaPenNib } from "react-icons/fa6";
import { Button } from "./ui/button";
import CustomAvatar from "./CustomAvatar";
import { AuthContext } from "@/context/authContext";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center h-16">
      <Link href={isLoggedIn ? "/home" : "/"} className="font-poppins text-xl font-semibold flex gap-2 tracking-tight items-center">
        <FaPenNib />
        Ink Space
      </Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {isLoggedIn ? <CustomAvatar /> : <Button onClick={() => router.push("/login")}>Login</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
