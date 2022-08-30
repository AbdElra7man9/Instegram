import React, { useState, useEffect } from 'react';
import { Instegramfont, Footer } from '../Components/Exports';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const SignIn = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  })
  const handleValidation = () => {
    const { password, email } = values;
    if (!email || !password) {
      return setError("Please Fill All Inputes.");
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
      const { email, password } = values;
      try {
        const { data } = await axios.post('/login', {
          email,
          password
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
    <div className=" mt-5 container mb-5">
      <div className=" row">

        <div className="col d-none d-md-block ">
          <img src="../Images/insta.png" className='instapic me-auto container' alt="insta"></img>
        </div>
        <div className='col'>
          <div className='container py-5 pb-4 px-5 signinform border'>
            <div className=" text-center  ">
              <form onSubmit={(event) => handleSubmit(event)} >
                <Link to="/"><p className="instalogo fw-bold"><Instegramfont /></p></Link>
                <div className="mb-3 mt-5">
                  <input className="form-control inputs m-auto mt-2" type="email" placeholder='Mobile Number Or Email' name="email"
                    onChange={(e) => handleChange(e)}></input>
                  <input className="form-control inputs m-auto mt-2" type="password" placeholder='Password' name="password"
                    onChange={(e) => handleChange(e)}></input>
                </div>
                <button className="btn btn-primary form-control" >LOG IN</button>
                <div className='mt-4 row mx-1'>
                  <hr className='line col mt-2'></hr>
                  <p className='col-3'>OR</p>
                  <hr className='line col mt-2'></hr>
                </div>
                <button className="btn form-control mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg><span className='ms-2'>Log In with Facebook</span></button>
                <Link to='/forgotpassword' className='mb-4 pb-2'>Forget Password ?</Link><br></br>
                {error && <span className="mt-3 text-danger fs-6 pt-3">{error}</span>}

              </form>
            </div>
          </div>
          <div className='container py-4 px-5 mt-3 signinform border text-center'>
            <p className='mb-0'>Have an account? <Link to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default SignIn;
