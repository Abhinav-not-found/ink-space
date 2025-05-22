import { connectToDatabase } from '@/lib/db'
import Blog from '@/models/Blog.model'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const userId = params.id

    await connectToDatabase()

    console.log('Fetching blogs for user ID:', userId)

    // Filter blogs by userId
    const blogs = await Blog.find({ userId }).sort({ createdAt: -1 })

    return NextResponse.json(blogs, { status: 200 }) // return array directly

  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 })
  }
}
