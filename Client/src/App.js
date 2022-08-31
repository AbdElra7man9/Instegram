import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile, SignIn, Signup, Home,ForgotPassword,EmailSent,ResetPassword } from './Components/Exports';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/sentemail' element={<EmailSent />}></Route>
          <Route path='/passwordreset/:resetToken' element={<ResetPassword />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
