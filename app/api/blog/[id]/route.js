import { connectToDatabase } from "@/lib/db";
import Blog from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function GET(_req, context) {
    try {
        await connectToDatabase();
        const { id } = context.params;

        if (!id) {
            return NextResponse.json({ message: "Blog ID is required" }, { status: 400 });
        }

        const blog = await Blog.findById(id);

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog fetched successfully", blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}
