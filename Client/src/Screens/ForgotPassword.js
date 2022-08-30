import React, { useState, useEffect } from 'react';
import { Instegramfont, Footer } from '../Components/Exports';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ForgotPassword = () => {
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
            try {
                const { data } = await axios.post('/signup', {
                    username,
                    email,
                    password,
                    fullname
                }, config);
                localStorage.setItem("authToken", data.token);
                navigate("/");
            } catch (error) {
                setError(error.response.data.error);
                setTimeout(() => {
                    setError("");
                }, 5000);
            }

        }
    };

    return (
        <div>
            <div className='container pt-5 px-0 signinform border mb-5'>
                <div className='px-5'>
                    <form action="" onSubmit={(event) => handleSubmit(event)}>
                        <div className=" text-center  ">
                            <Link to="/"><p className="instalogo fw-bold"><Instegramfont /></p></Link>
                            <p className='text-muted fs-6 fw-bold'>Trouble Logging In?</p>
                            <p className='text-muted privacygtext'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                            <input className="form-control inputs m-auto mt-5 mb-3" type="email" placeholder='Mobile Number Or Email' name="email"
                                onChange={(e) => handleChange(e)}></input>
                            <Link to="/" className="btn btn-primary form-control mb-3"><span className='ms-2'>Send Login Link</span></Link>
                            <Link to='/forgotpassword' className='mb-4 pb-2 text-dark'>Can't Reset Your Password ?</Link><br></br>
                            <div className='mt-4 row mx-1'>
                                <hr className='line col mt-2'></hr>
                                <p className='col-3'>OR</p>
                                <hr className='line col mt-2'></hr>
                            </div>
                            <Link to='/signup' className='pb-2 text-dark '>Create New Account</Link><br></br>

                            {error && <span className="mt-3 text-danger fs-6 fw-bold">{error}</span>}
                        </div>
                    </form>

                </div>
                <div className='mt-4 text-center px-0 py-3 border' style={{ backgroundColor: "#FAFAFA" }}>
                    <Link to='/signin' className='mb-4 pb-3 text-dark' style={{ fontWeight: "500" }}>Back To Login</Link><br></br>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default ForgotPassword;
