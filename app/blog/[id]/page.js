"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import "./blogDetailed.css";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import BlogSktn from "@/components/Skeletons/BlogSktn";
import { deleteBlog } from "@/services/blog";


const fetchBlog = async (id) => {
  const res = await fetch(`/api/blog/${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch blog");
  return data.blog;
};


const Page = () => {
  const { id } = useParams();
  const [owner, setOwner] = useState(false);
  const router = useRouter()
  const { data: blogData, isLoading, isError } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id),
    enabled: !!id,
  })

  useEffect(() => {
    if (blogData) {
      const localUserId = localStorage.getItem("userId");
      if (blogData.userId === localUserId) {
        setOwner(true);
      }
    }
  }, [blogData]);

  useEffect(() => {
    if (blogData?.title) {
      document.title = blogData.title;
    }
  }, [blogData?.title]);

  const { mutate: handleDeleteBlog, isPending } = useMutation({
    mutationFn: () => deleteBlog(_id),
    onSuccess: () => {
      router.push('/home')
    },
    onError: (err) => {
      console.error('Error deleting blog:', err.message);
    },
  });

  if (isLoading) {
    return (
      <BlogSktn/>
    );
  }

  if (isError || !blogData) {
    return <p className="text-center text-red-500">Error loading blog.</p>;
  }

   const { title, username, createdAt, category, desc, thumbnail, _id } = blogData;

 return (
    <div>
      <section>
        {thumbnail && <div className="bg-red-300 w-full h-60 rounded-2xl mb-6" />}
      </section>

      <section className="mb-8">
        <h1 className="title text-6xl font-bold first-letter:uppercase">
          {title || "Untitled Blog"}
        </h1>
        <div className="text-gray-500 text-sm mt-2 flex justify-between items-center">
          <div className="flex gap-4">
            <p className="text-lg username">
              By{" "}
              <span className="font-semibold first-letter:uppercase">
                {username || "Unknown"}
              </span>{" "}
              | Published on {createdAt?.split("T")[0] || "Unknown Date"}
            </p>
            <Badge>{category || "Uncategorized"}</Badge>
          </div>

          {owner && (
            <div className="flex gap-4 items-center">
              <Button onClick={handleDeleteBlog} variant="ghost">
                {isPending? 'Wait...': 
                  <MdDelete />
                }
              </Button>
              <Button variant="ghost">
                <RiEdit2Fill />
              </Button>
            </div>
          )}
        </div>
      </section>

      <section
        className="prose prose-lg mx-auto first-letter:uppercase"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
}

export default Page;
