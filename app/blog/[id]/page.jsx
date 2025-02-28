"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(false);
  const date = blogData.createdAt;
  // console.log(blogData)

  const getSpecificBlogInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blog/${id}`);
      const data = await res.json();
      if (res.ok) {
        setBlogData(data.blog);
      } else {
        console.log("Error fetching blog: ", data.message);
      }
    } catch (error) {
      console.log("Error getting specific blog: ", error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getSpecificBlogInfo();
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <Skeleton className='w-full h-60' />
          <Skeleton className='w-full mt-6 h-14' />
          <Skeleton className='w-1/3 mt-4 h-6' />
          <Skeleton className='w-full mt-6 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
          <Skeleton className='w-full mt-2 h-8' />
        </>
      ) : (
        <div className="">
          <section>
            <div className="bg-red-300 w-full h-60 rounded-2xl mb-6"></div>
          </section>
          <section className="mb-8">
            <h1 className="text-5xl font-bold first-letter:uppercase">
              {blogData.title || "The Future of Web Development"}
            </h1>
            <div className="text-gray-500 text-sm mt-2 flex  gap-4">
              <p className="text-lg">
                By <span className="font-semibold">John Doe</span> | Published
                on {date?.split("T")[0]}
              </p>
              <Badge>{ blogData.category || 'Category'}</Badge>
            </div>
          </section>
          <section className="prose prose-lg mx-auto first-letter:uppercase"
          dangerouslySetInnerHTML={{ __html: blogData.desc }}></section>
        </div>
      )}
    </div>
  );
};

export default page;
