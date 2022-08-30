import React from 'react';
import { Link, } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const EmailSent = () => {
    

    return (
        <div >
            <div className='container pt-5 px-0 signinform border position-absolute top-50 start-50 translate-middle'>
                <div className='px-5 '>
                    <div className=" text-center  ">
                        <p className='text-muted fs-6 fw-bold'>Email Sent</p>
                        <p className='text-muted privacygtext'>We sent an email to the email you provided with a link to get back into your account.</p>
                        <Link to="/" className="btn btn-primary form-control mb-3"><span className='ms-2'>OK</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailSent;
