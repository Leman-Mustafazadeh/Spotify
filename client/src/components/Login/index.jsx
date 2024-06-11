import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  return (
    <div className="login_page">
      <div className="login_head">
        {/* <FontAwesomeIcon icon="fa-brands fa-spotify" /> */}
        <i class="fa-brands fa-spotify"></i>
        <h1>Log in to Spotify</h1>
      </div>
      <div className="login_title">
        <div className="login_item">
          <label htmlFor="">Email or Username</label>
          <input type="text" placeholder="Email or Username" />
        </div>

        <div className="login_item login_pass">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" />
        </div>
      </div>

      <button>Login</button>

      <a href="">Forgot your password?</a>
      <hr />

      <p>Don't have an account? <Link to={'/signup'}>Sign up for Spotify</Link></p>
    </div>
  );
};

export default Login;
