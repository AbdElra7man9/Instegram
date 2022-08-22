import React from "react";
import Morebtn from "./SVG/Morebtn";
import Heart from "./SVG/Heart";
import Comments from "./SVG/Comments";
import Share from "./SVG/Share";
import Savebtn from "./SVG/Savebtn";
import Emoji from "./SVG/Emoji";
import { useState } from "react";
const Posts = () => {
  let img1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80";
  let img2 = "";
  let img3 = "";
  const [Posts,setPost] = useState([
    {id:1, accountimg : img1 , postimg:img1,des:"youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان",likes:200,comments:20},
    {id:1, accountimg : img1 , postimg:img1,des:"youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان",likes:200,comments:20},
    {id:1, accountimg : img1 , postimg:img1,des:"youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان",likes:200,comments:20},
  ]);
  return (
    Posts.map((post) =>(
    <div className=" col col-lg-7 mt-3 pe-2">
      <div className="posts">
        <div className="d-flex toppost">
          <span className="profileiconspan ms-2 mt-2">
            <img
              className="profileicon"
              src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
            ></img>
          </span>
          <div className="ms-auto mt-3 pe-3">
            <Morebtn />
          </div>
        </div>
        <div className="postimg">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            className="postimg"
            alt=""
          />
        </div>
        <div className="likesandcomments d-flex mt-2">
          <div>
            <button className="btn likebtn">
              <Heart />
            </button>
            <button className="btn likebtn">
              <Comments />
            </button>
            <button className="btn likebtn">
              <Share />
            </button>
          </div>
          <div className="ms-auto">
            <button className="btn likebtn">
              <Savebtn />
            </button>
          </div>
        </div>
        <h6 className="ms-3 mt-2 fw-bold">200 likes</h6>
        <p className="ms-3" key={post.id}>
          {post.des}
        </p>
        <p className="ms-3 viewall fw-normal">View all 200 comments</p>
        <p className="ms-3 posttime fw-normal">30 MINTES AGO</p>
        <hr></hr>
        <form>
          <div className="ms-3 d-flex">
            <Emoji />
            <input
              className="form-control ms-2 addcoment pb-3"
              type="text"
              placeholder="Add a comment..."
            ></input>
            <button className="btn postbtn ms-auto me-2 pb-3">Post</button>
          </div>
        </form>
      </div>
    </div>
        ))

  );
};

export default Posts;
