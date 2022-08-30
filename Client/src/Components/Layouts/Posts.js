import React from 'react';
import { Morebtn, Heart, Comments, Share, Savebtn, Emoji } from '../Exports';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostSkeleton from '../SKeletons/PostSkeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Posts = () => {  // eslint-disable-next-line
  const [Posts, setPost] = useState([
    {
      id: 1,
      accountimg: './Images/post.avif',
      postimg: './Images/post.avif',
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
    {
      id: 2,
      accountimg: './Images/post.avif',
      postimg: './Images/post.avif',
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
    {
      id: 3,
      accountimg: './Images/post.avif',
      postimg: './Images/post.avif',
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
    {Posts.map((post) =>
    <div className=" col col-lg-7 mt-3 pe-2">
      <div className="posts">
      {/* <PostSkeleton/> */}
        <div className="d-flex toppost">
          <span className="profileiconspan ms-2 mt-2">
            <img
              className="profileicon"
              src="./Images/profile.jpg"
              alt="profile"></img>
          </span>
          <div className="ms-auto mt-3 pe-3">
            <Button variant="" onClick={handleShow}>
              <Morebtn />
            </Button>
            <Modal show={show} onHide={handleClose} centered >
              <Modal.Body>
                <div className='text-center'>
                  <Link to='/profile' className='text-danger fw-bold'><p>Report</p></Link><hr></hr>
                  <Link to='/' className='text-danger fw-bold'><p>Unfollow</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Add to favourite</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Go to post</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Share to</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Copy link</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Embed</p></Link><hr></hr>
                  <Link to='/' className='text-dark'><p>Cancel</p></Link>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        
        <div className="postimg">
          <img key={post.id} src={post.accountimg || <Skeleton />} className="postimg" alt="postimage" />
        </div>
        <div className="likesandcomments d-flex mt-2">
          <div>
            <button className="btn likebtn"><Heart /></button>
            <button className="btn likebtn"><Comments /></button>
            <button className="btn likebtn"><Share /></button>
          </div>
          <div className="ms-auto">
            <button className="btn likebtn"><Savebtn /></button>
          </div>
        </div>
        <h6 className="ms-3 mt-2 fw-bold" key={post.id}>{post.likes + ' likes' || <Skeleton />} </h6>
        <p className="ms-3" key={post.id}>{post.des || <Skeleton />}</p>
        <p className="ms-3 viewall fw-normal" >{'View all ' + post.comments +' Comments' || <Skeleton />}</p>
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
  )}
  </div>
  );
};

export default Posts;
