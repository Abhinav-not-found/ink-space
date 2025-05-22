'use client'
import BlogCard from "@/components/BlogCard";
import Create from "@/components/Create";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/services/blog";
import HomeSktn from "@/components/Skeletons/HomeSktn";


export default function Home() {

  const { data: allBlogs = [], isLoading, error, refetch } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: fetchBlogs,
  })

  return (
    <div className="">
      <Create />
      <div className="mt-10">
        {isLoading ? ( <HomeSktn/> )
          :error? (
            <div className="text-center mt-4">Failed to load blogs.</div>
          )
          : allBlogs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg mt-10">
            🚀 No blogs yet! Be the first to share your thoughts and inspire others. ✨
            </div> )
          : (
            allBlogs.map((data, index) => (
              <BlogCard key={index} get={refetch} data={data} />
            )))
          }
      </div>
    </div>
  );
}
