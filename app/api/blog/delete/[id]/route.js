import { connectToDatabase } from "@/lib/db";
import Blog from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        await connectToDatabase();
        const { id } = params;

        if (!id) {
            return NextResponse.json({ message: "Blog ID is required" }, { status: 400 });
        }

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog Deleted successfully", blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}
