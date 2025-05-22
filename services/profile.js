import axios from "axios"

export const getUserInfo = async (id) => {
  const res = await axios.get(`/api/profile/${id}`)
  return res.data
}

export const getUserBlogs = async (id) => {
  const res = await axios.get(`/api/blog/user/${id}`)
  return res.data
}
