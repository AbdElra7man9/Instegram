import React from "react";

const Suggetions = () => {
  return (
    <div className="suggest col-4 d-lg-block d-none ">
      <div className="d-flex">
        <p className="h5 suggesttext">Suggestions For You</p>
        <p className="h6 ms-auto">See All</p>
      </div>
      <span className="mt-3 row">
          <img
            className="col-3 Suggestionicon"
            src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
            alt="profile"></img>
          <p className="p-0 fw-bold col">Egypt</p>
          <p className=" fw-bold text-primary d-flex justify-content-end col">Follow</p>
        </span> 
    </div>

  );
};

export default Suggetions;
