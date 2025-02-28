import { connectToDatabase } from "@/lib/db";
import Blog from "@/models/Blog.model";
import { NextResponse } from "next/server";

// creating blog
export async function POST(req) {
    try {
        await connectToDatabase();
        const { title, desc, category } = await req.json();

        if (!title || !desc || !category) {
            return NextResponse.json({ message: "Title and Description are required" }, { status: 400 });
        }

        const newBlog = new Blog({ title, desc, category });
        console.log("Before Saving:", newBlog);
        const savedBlog = await newBlog.save();
        console.log("After Saving:", savedBlog);

        return NextResponse.json({ message: "Blog Created successfully!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}
// getting all blogs
export async function GET() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find().sort({ createdAt: -1 });

        return NextResponse.json({ message: "Blogs fetched successfully!", blogs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}
