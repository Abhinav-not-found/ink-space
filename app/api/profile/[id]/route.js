import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User.model"; 
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    const userId = await params.id;
    await connectToDatabase();

    console.log("Fetching user with ID:", userId);

    if (!mongoose.Types.ObjectId.isValid(userId)) { 
      return NextResponse.json({ error: "Invalid user ID format" }, { status: 400 });
    }

    const user = await User.findById(userId).select("-password"); 
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
