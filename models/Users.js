import mongoose from 'mongoose';
const usesrSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max:50
    },
    username: {
      type: String,
      min: 3,
      max:20
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePic:{
      type:String,
      default:""
    },
    followers:{
      type:Array,
      default:[]
    },
    following:{
      type:Array,
      default:[]
    },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);
const Users = mongoose.model('Users', usesrSchema);
export default Users;
