'use client'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'

const BlogCard = ({data}) => {
  const router = useRouter();
  const date = data.createdAt
  return (
    <div onClick={()=>router.push(`/blog/${data._id}`)} className='mb-4 flex justify-between'>
      <div>
        <p className='text-stone-500 text-sm dark:text-stone-300/90'>{date.split('T')[0]}</p>
        <p className='first-letter:uppercase mt-2 font-Satoshi text-3xl font-semibold mb-2 cursor-pointer'>{ data.title || 'The Future of Web Development: Trends to Watch in 2025'}</p>
        <div className='flex items-center gap-6'>
          <p>by <span className='font-Poppins underline underline-offset-4 cursor-pointer first-letter:uppercase'>{data.username || 'KOKI-KIKO'}</span></p>
          <Badge variant="">{data.category}</Badge>
        </div>
      </div>
      {data.thumbnail && 
        <div className='w-72 h-44 bg-red-200 rounded-xl cursor-pointer'></div>
      }
    </div>
  )
}

export default BlogCard
