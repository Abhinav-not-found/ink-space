import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'


const ProfileSktn = () => {
  return (
    <div className='flex flex-col p-4 border-2 border-r-0 border-y-0'>
        <Skeleton className={'w-24 h-24 rounded-full'}/>
        <Skeleton className={'mt-2 w-40 h-5'}/>
        <Skeleton className={'mt-2 w-60 h-5'}/>
        <Skeleton className={'mt-2 w-60 h-20 my-4'}/>
        <Skeleton className={'mt-2 w-60 h-5'}/>
      </div>
  )
}

export default ProfileSktn
