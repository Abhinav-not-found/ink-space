import React from 'react'
import { Skeleton } from '../ui/skeleton'

const HomeSktn = () => {
  return (
    <div className="flex flex-col gap-4">
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
          </div>
  )
}

export default HomeSktn
