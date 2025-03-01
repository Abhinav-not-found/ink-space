import { connectToDatabase } from "@/lib/db";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

//register route

export async function POST(req) {
  try {
    await connectToDatabase();
    const { username, email, password } = await req.json();

    if(!username || !email || !password){
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if(password.length < 6){
      return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
