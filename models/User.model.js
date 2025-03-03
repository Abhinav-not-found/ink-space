import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender:{type:String, enum:['male','female'],default:'male'}
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
