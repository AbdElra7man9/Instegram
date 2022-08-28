import React, { useState } from 'react';
import Instegramfont from '../Components/SVG/Instegramfont';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/");

      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
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
              <form>
                {/* {loading && <LoadingBox></LoadingBox>} */}
                {/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}
                <Link to="/"><p className="instalogo fw-bold"><Instegramfont /></p></Link>

                <div className="mb-3 mt-5">
                  <input className="form-control inputs m-auto mt-2" type="email" reaquired placeholder='Mobile Number Or Email' name="email"
                    onChange={handleChange} value={data.email}></input>
                  <input className="form-control inputs m-auto mt-2" type="password" reaquired placeholder='Password' name="password"
                    onChange={handleChange} value={data.password}></input>
                </div>
                <button className="btn btn-primary form-control" onClick={handleSubmit}>Sign Up</button>
                <div className='mt-4 row mx-1'>
                  <hr className='line col mt-2'></hr>
                  <p className='col-3'>OR</p>
                  <hr className='line col mt-2'></hr>
                </div>
                <button className="btn form-control mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg><span className='ms-2'>Log In with Facebook</span></button>
                <Link to='/forgetpassword'>Forget Password ?</Link>
              </form>
            </div>
          </div>
          <div className='container py-4 px-5 mt-3 signinform border text-center'>
            <p className='mb-0'>Have an account? <Link to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
