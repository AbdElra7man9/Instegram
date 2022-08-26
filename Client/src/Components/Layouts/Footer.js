import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className='footer mt-4 mb-4'>
      <div className='d-flex justify-content-center'>
        <ul className="nav ">
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Meta</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Jops</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Help</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">API</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Privacy</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Top Accounts</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">HashTags</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Locations</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Instegram Lite</Link></li>
            <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Contact Uploading & Non-Users</Link></li>
            </ul>
        </div>
        <div className='d-flex justify-content-center'>
            <ul className="nav ">
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Dance</Link></li>
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Food & Drink</Link></li>
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Home & Garden</Link></li>
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Music</Link></li>
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">Visual Arts</Link></li>
            </ul>
        </div>
        <div className='d-flex justify-content-center'>
            <ul className="nav ">
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">English</Link></li>
                <li className="nav-item"><Link className="nav-link text-muted" aria-current="page" to="/">@2022 Instegram from Meta</Link></li>

            </ul>
        </div>
  </footer>

  );
};

export default Footer;
