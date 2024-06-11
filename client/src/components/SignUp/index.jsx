import React from "react";
// import {Link} from 'react-router-dom'
import "./style.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup_icon">
        {/* <FontAwesomeIcon icon="fa-brands fa-spotify" /> */}
        <i class="fa-brands fa-spotify"></i>
        <h1>Sign up to start listening</h1>
      </div>
      <div className="signup_head">
        <label htmlFor="">Email address</label>
        <input type="email" placeholder="Email address" />
      </div>
      <div className="signup_head">
        <label htmlFor=""> Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div className="signup_head">
        <label htmlFor=""> UserName</label>
        <input type="text" placeholder="username" />
      </div>
      <button>Sign Up</button>
      <p>
        Already have an account? <Link to={"/login"}>Log in here.</Link>
      </p>
    </div>
  );
};
export default SignUp;
