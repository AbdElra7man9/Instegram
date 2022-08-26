import './index.css';
import Header from './Components/Layouts/Header';
import Home from './Screens/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Screens/Profile';
import Footer from './Components/Layouts/Footer';
import SignIn from './Screens/SignIn';
import Signup from './Screens/Signup';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
