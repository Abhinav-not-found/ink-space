import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User.model"; 
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    await connectToDatabase();

    const userId = params.id;
    console.log("Fetching user with ID:", userId);

    if (!mongoose.Types.ObjectId.isValid(userId)) { 
      return NextResponse.json({ error: "Invalid user ID format" }, { status: 400 });
    }

    // ✅ Fixed: Using `_id` instead of `id`
    const user = await User.findById(userId).select("_id username email"); 
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
