import React, { useState, useEffect } from 'react';
import { Instegramfont, Footer } from '../Components/Exports';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ResetPassword = (match) => {
    const navigate = useNavigate();
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            navigate("/");
        }
    })
    const handleValidation = () => {
        if (!password1 || !password2) {
            return setError("Please add your new password");
        } else if (password1 !== password2) {
            return setError("Not identical");
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
                const { data } = await axios.post(`/passwordreset/${match.params.resetToken}`, {
                    password1,
                }, config);
                setSuccess(data.data);
                navigate("/signin");
            } catch (error) {
                console.log(error)
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
                            <p className='text-muted fs-5 fw-normal'>Reset Password</p>
                            <input className="form-control inputs m-auto mt-5" type="password" placeholder='Enter Password' name="password"
                                onChange={(e) => setPassword1(e.target.value)}></input>
                            <input className="form-control inputs m-auto mt-3 mb-3" type="password" placeholder='Confirm Password' name="password2"
                                onChange={(e) => setPassword2(e.target.value)}></input>
                            <button className="btn btn-primary form-control mb-3"><span className='ms-2'>Confirm</span></button>
                            <div className='mt-4 row mx-1'>
                                <hr className='line col mt-2'></hr>
                                <p className='col-3'>OR</p>
                                <hr className='line col mt-2'></hr>
                            </div>
                            <Link to='/signup' className='pb-2 text-dark '>Create New Account</Link><br></br>
                            {success && <span className="mt-3 text-primary fs-6 fw-bold">{success}</span>}
                            {error && <span className="mt-3 text-danger fs-6 fw-bold">{error}</span>}
                        </div>
                    </form>

                </div>
                <div className='mt-4 text-center px-0 py-3 border' style={{ backgroundColor: "#FAFAFA" }}>
                    <Link to='/signin' className='mb-4 pb-3 text-dark' style={{ fontWeight: "500" }}>Back To Login</Link><br></br>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResetPassword;
