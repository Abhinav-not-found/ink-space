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
    },
    userId:{
      type:String,
      required:true,
    },
    thumbnail:{
      type:Boolean,
      required:true,
      default:false
    }
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
