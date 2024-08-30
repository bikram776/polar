import "../components/signup.css";
import { useState } from "react";

function Signup({ onClose }) {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setLogIn] = useState(true);

  const handleButton = (id) =>{
    if(id === "signup-btn"){
      setShowSignup(true);
      setLogIn(false);
    }else if(id === 'login-btn'){
      setShowSignup(false);
      setLogIn(true);
    }
  }

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <div className="buttons">
          <button className="btn active" id="signup-btn" onClick={() => handleButton('signup-btn')} >
            Sign Up
          </button>
          <button className="btn" id="login-btn" onClick={() => handleButton('login-btn')}>
            Login
          </button>
        </div>
        {showSignup && (<form className="form" id="signup-form">
          <fieldset>
            <legend>Username</legend>
            <input
              type="text"
              name="username"
              placeholder="Username"
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input
              type="text"
              name="username"
              placeholder="Email"
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="text"
              name="username"
              placeholder="password"
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>)}

        {showLogin && (<form className="form" id="login-form">
        <fieldset>
            <legend>Username</legend>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="current-password"
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              name="username"
              placeholder="Password"
              autoComplete="current-password"
            />
          </fieldset>
          <button type="submit">Login</button>
        </form>)}
        
        <button id="closebtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Signup;
