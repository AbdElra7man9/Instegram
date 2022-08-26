import React from 'react';
import{Posts,Stories,Suggetions,Addpost} from '../Components/Exports';
const Home = () => {
  return (
    <div className="container">
      <div className="main row ">
        <Stories />
        <Suggetions />
        <Addpost />
      </div>
      <Posts />
    </div>
  );
};

export default Home;
