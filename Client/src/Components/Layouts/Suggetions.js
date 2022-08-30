import React from "react";
import { Link } from "react-router-dom";

const Suggetions = () => {
  return (
    <div className="suggest col-4 d-lg-block d-none ">
      <div className="d-flex">
        <p className="h5 suggesttext">Suggestions For You</p>
        <p className="h6 ms-auto">See All</p>
      </div>
      <div className="d-flex">
        <Link to="/" className="mt-3 row">
          <img
            className="col-3 Suggestionicon"
            src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
            alt="profile"></img>
          <p className="p-0 fw-bold col">Egypt</p>
        </Link>
        <Link to="/" className=" fw-bold text-primary d-flex justify-content-end col mt-3">Follow</Link>
      </div>
    </div>


  );
};

export default Suggetions;
