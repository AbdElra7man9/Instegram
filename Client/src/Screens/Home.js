import React from 'react';
import { Posts, Stories, Suggetions, Addpost,Header,Footer } from '../Components/Exports';
const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main row ">
          <Stories />
          <Suggetions />
          <Addpost />
        </div>
        <Posts />
      </div>
      <Footer />

    </div>
  );
};

export default Home;
