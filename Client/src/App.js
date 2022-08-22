import './index.css';
import Header from './Components/header';
import Posts from './Components/Posts';
import Stories from './Components/Stories';
import Suggetions from './Components/Suggetions';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Switch} from "react-router-dom"

function App() {
  // let name = "ahmed";
  // let [name, setName] = useState('hello Abdo');

  // let btnhandler = () => {
  //   setName('Hello yastaaaaaaaaa');
  //   console.log(name);
  //   console.log('3bdo');
  // };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main row ">
          <Stories />
          <Suggetions />
        </div>
        <Posts />
        {/* <p>{name}</p>
        <button className="btn btn-warning" onClick={btnhandler}>
          Click ME
        </button> */}
      </div>
    </div>
  );
}

export default App;
