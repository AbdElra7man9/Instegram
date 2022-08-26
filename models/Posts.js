import mongoose from "mongoose";
const PostsSchema = new mongoose.Schema({
    description:{
        type:String
    },
    image:{
        type:String,
        require:true,
    }
},
    {timestamps:true}
);
const Posts = mongoose.model('posts',PostsSchema);
export default Posts
