import React from 'react'
import { Badge } from './ui/badge'
import Link from 'next/link'

const BlogCard2 = ({ blog }) => {
  return (
    <div className='w-[22em] h-52 rounded-lg border p-4 dark:text-gray-300'>
      <div className='flex gap-4 mb-2'>
        <p style={{fontSize:'16px'}} className='text-muted-foreground'>{new Date(blog.createdAt).toLocaleDateString()}</p>
        <Badge className='dark:bg-gray-300'>{blog.category }</Badge>
      </div>
      <Link href={`/blog/${blog._id}`} className='text-2xl font-semibold first-letter:uppercase hover:underline cursor-pointer'>{blog.title}</Link>
      
    </div>
  )
}

export default BlogCard2
