'use client'
import BlogCard from "@/components/BlogCard";
import Create from "@/components/Create";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"



export default function Home() {
  const [allBlogs, setAllBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  // console.log(allBlogs)
  const getAllBlogs = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/blog', { method: 'GET' })
      const data = await res.json()
      if (res.ok && data.blogs) {
        setAllBlogs(data.blogs)
      }
      else {
        console.log('Error fetching blogs:', data.message)
      }
    } catch (error) {
      console.log('Error getting all blogs: ', error)
    }
    setLoading(false)
  }
  useEffect(() => {
    getAllBlogs()
  }, [])
  return (
    <div className="">
      <Create />
      <div className="mt-10">
        {loading ? <div className="flex flex-col gap-4"><Skeleton className="w-full h-40" /><Skeleton className="w-full h-40" /><Skeleton className="w-full h-40" /></div>
          : allBlogs.length === 0 ? <div className="text-center text-gray-500 text-lg mt-10">
            🚀 No blogs yet! Be the first to share your thoughts and inspire others. ✨
          </div> :
            allBlogs.map((data, index) => (
              <BlogCard key={index} data={data} />
            ))}
      </div>
    </div>
  );
}
