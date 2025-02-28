import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { FaPenNib } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16">
      <Link href={'/'} className={'font-poppins text-xl flex gap-2 tracking-tight items-center'}>
        <FaPenNib />

        Ink Space</Link>
      <ModeToggle />
      {/* <h1 style={{ fontFamily: "Satoshi" }}>Hello, Satoshi Font!</h1> */}
    </nav>
  )
}

export default Navbar

