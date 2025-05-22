import axios from 'axios';

export const deleteBlog = async (id) => {
  const res = await axios.delete(`/api/blog/delete/${id}`);
  return res.data;
};

export const fetchBlogs = async() =>{
  const res = await axios.get('/api/blog');
  return res.data.blogs
}
