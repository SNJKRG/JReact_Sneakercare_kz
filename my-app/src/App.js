import logo from './logo.svg';
// import './App.css';
import { LoginSignup } from './Components/LoginForm/LoginSignup';
import { Checkbox } from './Components/LoginForm/Checkbox';
import  Register  from './Components/RegistrationForm/Register';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = "/LoginForm/LoginSignup" Component={LoginSignup}/>
          <Route path = "/RegistrationForm/Register" Component={Register}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
