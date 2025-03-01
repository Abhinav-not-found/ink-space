import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default:'category'
    },
    username:{
      type:String,
      required:true,
    }
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
