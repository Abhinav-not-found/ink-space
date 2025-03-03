'use client'
import { Button } from '@/components/ui/button';
import { useContext, useState } from "react";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import TipTapEditor from "@/components/TipTapEditor";
import { AuthContext } from '@/context/authContext';
import { FaCheck } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(false)
  const router = useRouter();
  const { user } = useContext(AuthContext)

  const handleSubmit = async () => {
    if (!title || !desc || !category) return toast.error('This field is empty!');

    setLoading(true);
    const username = user.username
    try {
      const res = await fetch('/api/blog', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, desc, category, username }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setTitle('');
        setDesc('');
        console.log(data);
        router.push('/home');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log('Error in creating blog:', error.message);
      toast.error(error.message);
    }
    setLoading(false);
  };


  return (
    <div className='flex flex-col gap-4 mt-10'>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='border border-x-0 border-t-0 text-4xl border-gray-500 outline-none mb-10'
        placeholder='Title'
      />

      <TipTapEditor
        content={desc}
        setContent={setDesc}
        placeholder='Tell your story...'
        className='text-xl border border-x-0 border-t-0 border-gray-500 mt-10 placeholder:italic outline-none'
      />
      <div className='flex gap-20'>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className='w-fit border border-x-0 border-t-0 cursor-pointer p-2 border-gray-500 text-2xl mt-4 text-gray-500 dark:text-stone-400/90 outline-none'
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Business">Business</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>


        <div className='flex flex-col text-gray-500'>
          <div className='mt-4 flex items-center gap-4'>
            <p className='text-2xl mt-4'>Do you want thumbnail?</p>
            <div className='flex gap-4 items-center mt-4 text-2xl'>
              <button onClick={() => setThumbnail(true)} className={`flex gap-1 items-center cursor-pointer hover:text-green-300 capitalize ${thumbnail ? 'underline' : ''}`}>yes</button>
              <p> or </p>
              <button onClick={() => setThumbnail(false)} className={`flex gap-1 items-center cursor-pointer hover:text-red-300 capitalize ${!thumbnail ? 'underline' :''}`}>no</button>
            </div>
          </div>
          {thumbnail &&
            <input type="file" className='border border-white cursor-pointer' />
          }
        </div>


      </div>

      <Button onClick={handleSubmit} className={'cursor-pointer w-fit mt-10'}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
};


export default Page;
