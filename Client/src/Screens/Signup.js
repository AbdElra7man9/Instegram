import React, { useState } from 'react';
import Instegramfont from '../Components/SVG/Instegramfont';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
    const {data,setData}=useState({
        email:"",
        username:"",
        fullname:"",
        password:""
    })
    const handleSubmit =(event) => {
        event.preventResult();
        alert("hgfgghj")
    }
    const handleChange = (event) => {
        setData({...data,[event.target.name]:event.target.value});
    }
    
    return (
        <div>

            <div className='container py-5 pb-4 px-5 signinform border'>
                <form onSubmit={(event) => handleSubmit (event)}>
                    <div className=" text-center  ">
                        <Link to="/"><p className="instalogo fw-bold"><Instegramfont /></p></Link>
                        <p className='text-muted fs-6 fw-bold'>Sign up to see photos and videos from your friends.</p>
                        <Link to="/" className="btn btn-primary form-control"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg><span className='ms-2'>Log In with Facebook</span></Link>
                        <div className="mb-3 mt-5">
                            <input className="form-control inputs m-auto mt-2" type="email" reaquired placeholder='Mobile Number Or Email' name="email"
                                onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="text" reaquired placeholder='Full Name' name="fullname"
                                 onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="text" reaquired placeholder='Username' name="username"
                                 onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="password" reaquired placeholder='Password' name="password"
                                 onChange={(e) => handleChange(e)}></input>
                        </div>
                        <p className='text-muted privacygtext'>People who use our service may have uploaded your contact information to Instagram. Learn<Link to='/learnmore' className='text-muted fw-bold'> More</Link></p>
                        <p className='text-muted privacygtext'>By signing up, you agree to our Terms ,<Link to='/learnmore' className='text-muted fw-bold'>Privacy Policy </Link> and <Link to='/learnmore' className='text-muted fw-bold'> Cookies Policy .</Link></p>
                        <button className="btn btn-primary form-control">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className='container py-4 px-5 mt-3 signinform border text-center'>
                <p className='mb-0'>Have an account? <Link to='/signin'>Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;
