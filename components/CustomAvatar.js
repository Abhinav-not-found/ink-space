import React, { useContext } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { AuthContext } from '@/context/authContext'

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
            <Button className='w-full flex justify-start py-'>
              Profile</Button>
            <Button onClick={logout} className='w-full flex justify-start'>
              Logout</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomAvatar
