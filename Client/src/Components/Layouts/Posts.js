import React from 'react';
import{Morebtn,Heart,Comments,Share,Savebtn,Emoji} from '../Exports';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Posts = () => {
  let img1 =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';// eslint-disable-next-line
  let img2 = '';// eslint-disable-next-line
  let img3 = '';// eslint-disable-next-line
  const [Posts, setPost] = useState([
    {
      id: 1,
      accountimg: img1,
      postimg: img1,
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
    {
      id: 1,
      accountimg: img1,
      postimg: img1,
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
    {
      id: 1,
      accountimg: img1,
      postimg: img1,
      des: 'youm7 #مبابي يسجل أسرع هدف في تاريخ الدوري الفرنسي بعد 8 ثوان',
      likes: 200,
      comments: 20,
    },
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return Posts.map((post) => (
    <div className=" col col-lg-7 mt-3 pe-2">
      <div className="posts">
        <div className="d-flex toppost">
          <span className="profileiconspan ms-2 mt-2">
            <img
              className="profileicon"
              src="./Images/profile.jpg"
              alt="profile"
            ></img>
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
          <img src="./Images/post.avif" className="postimg" alt="" />
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
  ));
};

export default Posts;
