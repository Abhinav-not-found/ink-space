'use client'
import BlogCard2 from '@/components/BlogCard2'
import Blog2Sktn from '@/components/Skeletons/Blog2Sktn'
import ProfileSktn from '@/components/Skeletons/ProfileSktn'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { getUserInfo, getUserBlogs } from '@/services/profile'

const page = () => {
  const userId = useParams()
  const { data: userInfo, isPending: isUserInfoLoading, error: userInfoError } = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: ()=> getUserInfo(userId.id)
  })

  const { data: userBlogs, isPending: isBlogsLoading, error: userBlogsError } = useQuery({
    queryKey: ['getUserBlogs'],
    queryFn: ()=>getUserBlogs(userId.id)
  })

  return (
    <div className='flex '>

      <div className='w-2/3 h-[92vh] grid grid-cols-2 auto-rows-max gap-y-10 gap-x-0 overflow-y-scroll'>

        {isBlogsLoading && <Blog2Sktn/>}
        {userBlogsError && <p>Cannot fetch blogs</p>}
        {userBlogs?.map((blog, index) => (
          <BlogCard2 key={index} blog={blog} />
        ))}

      </div>

      {isUserInfoLoading &&
        <ProfileSktn />
      }
      {userInfoError && <>Cannot fetch user info</>}
      {userInfo &&
        <div className='w-1/3 h-[92vh] border-2 border-r-0 border-y-0 p-4 dark:text-gray-300'>
          <div className='bg-gray-100 dark:bg-gray-700 w-24 h-24 rounded-full uppercase flex items-center justify-center text-xl'>
            {userInfo.username.slice(0, 1)[0]}
          </div>
          <p className='text-lg font-semibold mt-2 capitalize'>{userInfo.username}</p>
          <p className=''>{userInfo.email}</p>
          <p className='my-4'>{userInfo?.bio || 'bio'}</p>
          <p className='text-muted-foreground'>Joined on {new Date(userInfo.createdAt).toLocaleDateString()}</p>
        </div>

      }

    </div>
  )
}

export default page
