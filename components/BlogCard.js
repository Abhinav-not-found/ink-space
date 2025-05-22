'use client'
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'
import { MdDelete } from "react-icons/md";
import { Button } from './ui/button';
import { useMutation } from '@tanstack/react-query';
import { deleteBlog } from '@/services/blog';
import { useEffect, useState } from "react";
import Link from "next/link";

const BlogCard = ({ data, get }) => {
  const router = useRouter();
  const [localUserId, setLocalUserId] = useState(null);

  useEffect(() => {
    setLocalUserId(localStorage.getItem('userId'));
  }, []);

  const date = data.createdAt

  const { mutate: handleDeleteBlog, isPending } = useMutation({
    mutationFn: () => deleteBlog(data._id),
    onSuccess: () => {
      get()
    },
    onError: (err) => {
      console.error('Error deleting blog:', err.message);
    },
  });

  const handleEditBlog = () => {
    console.log('Edit')
  }

  return (
    <div className='mb-4 border p-4 rounded-xl flex justify-between shadow'>
      <div>
        <div className='flex gap-4'>
          <p onClick={() => router.push(`/blog/${data._id}`)} style={{ font: '16px' }} className='text-stone-500 dark:text-stone-300/90'>{new Date(data.createdAt).toLocaleDateString()}</p>
          <Badge variant="" className={'dark:bg-gray-300'}>{data.category}</Badge>
        </div>
        <p onClick={() => router.push(`/blog/${data._id}`)} style={{ fontSize: '30px' }} className='first-letter:uppercase mt-2 font-Satoshi text-3xl font-semibold mb-2 cursor-pointer hover:underline dark:text-gray-200'>{data.title || 'The Future of Web Development: Trends to Watch in 2025'}</p>
        <div className='flex items-center gap-6'>
          <Link href={`/profile/${data.userId}`}>by <span className='font-Poppins underline underline-offset-4 cursor-pointer first-letter:uppercase'>{data.username || 'KOKI-KIKO'}</span></Link>
          {data.userId === localUserId &&
            <div className="flex gap-4 items-center">

              <Button variant={'ghost'} onClick={handleDeleteBlog} aria-label="Delete blog">
                {isPending ? 'Wait...' : <MdDelete className="text-xl dark:text-gray-300" />}
              </Button>
              {/* <button onClick={handleEditBlog} className="cursor-pointer hover:text-yellow-400"><RiEdit2Fill className="text-xl" /></button> */}
            </div>
          }
        </div>
      </div>
      {data.thumbnail &&
        <div className='w-44 h-32 bg-red-200 rounded-xl cursor-pointer'></div>
      }
    </div>
  )
}

export default BlogCard
