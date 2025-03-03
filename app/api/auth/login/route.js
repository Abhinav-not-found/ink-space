import { connectToDatabase } from "@/lib/db";
import User from "@/models/User.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const userId = user._id;

    const response = NextResponse.json(
      { message: "Login successful", token, user: { id: user._id, username: user.username, email: user.email, gender:user.gender } },
      { status: 200 }
    );

    response.headers.set("Set-Cookie", `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
    response.headers.append("Set-Cookie", `userId=${userId}; Path=/; HttpOnly; Secure; SameSite=Strict`);

    return response;
    
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
