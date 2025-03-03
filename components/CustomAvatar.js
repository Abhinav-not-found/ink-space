import React, { useContext } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { AuthContext } from '@/context/authContext'
import { MdOutlineLogout } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";

const CustomAvatar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar className={'cursor-pointer'}>
            <AvatarFallback className={'uppercase'}>{user?.username[0]|| 'U'}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className='flex flex-col gap-4'>
            <Button variant={'ghost'} className='w-full flex justify-start py-'>
            <PiUserBold />
              Profile</Button>
            <Button variant={'ghost'} onClick={logout} className='w-full flex justify-start'>
            <MdOutlineLogout />
              Logout</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomAvatar
