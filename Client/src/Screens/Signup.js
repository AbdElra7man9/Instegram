import React, { useState, useEffect } from 'react';
import { Instegramfont, Footer } from '../Components/Exports';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Signup = () => {
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        // theme: "dark",
    };
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        fullname: "",
    });
    const [error, setError] = useState("");
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            navigate("/");
        }
    })
    const handleValidation = () => {
        const { password, fullname, username, email } = values;
        if (!email || !password || !fullname || !username) {
            return setError("Please Fill All Inputes.");
            // toast.error(
            //     "Please Fill All Inputes.",
            //     toastOptions
            // );
            // return false;
        } else if (username.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;
        }
        else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        } else if (fullname === "") {
            toast.error("fullname is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json"
            },
        };
        if (handleValidation()) {
            const { email, username, password, fullname } = values;
            try {// eslint-disable-next-line
                const { data } = await axios.post('/signup', {
                    username,
                    email,
                    password,
                    fullname
                }, config);
                // localStorage.setItem("authToken", data.token);
                navigate("/");
            } catch (error) {
                setError(error.response.data.msg);
                setTimeout(() => {
                    setError("");
                }, 10000);
            }

        }
    };

    return (
        <div>
            <div className='container py-5 pb-4 px-5 signinform border'>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className=" text-center  ">
                        <Link to="/"><p className="instalogo fw-bold"><Instegramfont /></p></Link>
                        <p className='text-muted fs-6 fw-bold'>Sign up to see photos and videos from your friends.</p>
                        <Link to="/" className="btn btn-primary form-control"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg><span className='ms-2'>Log In with Facebook</span></Link>
                        <div className="mb-3 mt-5">
                            <input className="form-control inputs m-auto mt-2" type="email" placeholder='Mobile Number Or Email' name="email"
                                onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="text" placeholder='Full Name' name="fullname"
                                onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="text" placeholder='Username' name="username"
                                onChange={(e) => handleChange(e)}></input>
                            <input className="form-control inputs m-auto mt-2" type="password" placeholder='Password' name="password"
                                onChange={(e) => handleChange(e)}></input>
                        </div>
                        <p className='text-muted privacygtext'>People who use our service may have uploaded your contact information to Instagram. Learn<Link to='/learnmore' className='text-muted fw-bold'> More</Link></p>
                        <p className='text-muted privacygtext'>By signing up, you agree to our Terms ,<Link to='/learnmore' className='text-muted fw-bold'>Privacy Policy </Link> and <Link to='/learnmore' className='text-muted fw-bold'> Cookies Policy .</Link></p>
                        <button className="btn btn-primary form-control mb-3" type='submit'>Sign Up</button>
                        {error && <span className="mt-3 text-danger fs-6 fw-bold">{error}</span>}

                    </div>
                </form>
            </div>
            <div className='container py-4 px-5 mt-3 signinform border text-center'>
                <p className='mb-0'>Have an account? <Link to='/signin'>Log In</Link></p>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Signup;
