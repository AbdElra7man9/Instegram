import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile, Footer, SignIn, Signup, Home, Header } from './Components/Exports';

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
