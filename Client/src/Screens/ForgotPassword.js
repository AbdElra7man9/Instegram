import React, { useState, useEffect } from 'react';
import { Instegramfont, Footer } from '../Components/Exports';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            navigate("/");
        }
    })
    const handleValidation = () => {
        if (!email) {
            return setError("Please add email address.");
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
            try {
                const { data } = await axios.post('/forgotpassword', {
                    email,
                }, config);
                setSuccess(data.data);
                navigate("/sentemail");
            } catch (error) {
                setError(error.response.data.error);
                setEmail("");
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
                                onChange={(e) => setEmail(e.target.value)} value={email}></input>
                            <button className="btn btn-primary form-control mb-3"><span className='ms-2'>Send Login Link</span></button>
                            <Link to='/forgotpassword' className='mb-4 pb-2 text-dark'>Can't Reset Your Password ?</Link><br></br>
                            <div className='mt-4 row mx-1'>
                                <hr className='line col mt-2'></hr>
                                <p className='col-3'>OR</p>
                                <hr className='line col mt-2'></hr>
                            </div>
                            <Link to='/signup' className='pb-2 text-dark '>Create New Account</Link><br></br>
                            {success && <span className="success-message">{success}</span>}
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
