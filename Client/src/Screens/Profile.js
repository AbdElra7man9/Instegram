import React from 'react'
import {Sitting,Postsicon,Savebtn,Tagged,Profileposts} from '../Components/Exports';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container profilepage'>
      <div className='row'>
        <div className='col-5 col-sm-4'>
          <img className="profilepageicon" src="./Images/profile.jpg" alt="profile"></img>

        </div>
        <div className='col p-0 ms-3'>
          <div className='d-flex mt-4'>
            <div className=''><p className='fs-4'>AbdElrahamn Shaban</p></div>
            <div className='mx-4'><button className='btn border '>Edit Profile</button></div>
            <div className="pe-3 ">
              <Button variant="" onClick={handleShow} className="p-0">
                <Sitting />
              </Button>
              <Modal show={show} onHide={handleClose} centered >
                <Modal.Body>
                  <div className='text-center'>
                    <Link to='/' className='text-dark'><p>Change Password</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>QR Code</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Apps and Websites</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Notifications</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Privacy and Security</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Login Activity</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Emails from Instegram</p></Link><hr></hr>
                    <Link to='/' className='text-dark'><p>Report a Proplem</p></Link>
                    <Link to='/' className='text-dark'><p>Embed</p></Link>
                    <Link to='/' className='text-dark'><p>Cancel</p></Link>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'><p className='fs-5'>0 Posts</p></div>
            <div className='col'><Link to='/' className='text-dark fs-5'>4 followers</Link></div>
            <div className='col'><Link to='/' className='text-dark fs-5'>0 following</Link></div>
          </div>
          <p className='fs-5 fw-bold'> AbdElrahamn</p>
        </div>
      </div>
      <hr className='mt-5'></hr>
      <div className='d-flex justify-content-center profilesnipped'>
        <Link to="/" className='snippes d-flex mx-4'>
          <Postsicon />
          <p className='fs-6 ms-2'>Posts</p>
        </Link>
        <Link to="/" className='snippes d-flex mx-4 savedicon fs-2'>
          <Savebtn />
          <p className='fs-6 ms-2'>Saved</p>
        </Link>
        <Link to="/" className='snippes d-flex mx-4'>
          <Tagged />
          <p className='fs-6 ms-2'>Tagged</p>
        </Link>
      </div>
      <div className='text-center'>
        <Profileposts />
        <p className='fs-3'>Share Photos</p>
        <p className='fs-5'>When you share photos, they will appear on your profile.</p>
        <Link to='/' className='text-primary fw-bold'>Share your first Photo</Link>
      </div>
    </div>
  )
}

export default Profile
