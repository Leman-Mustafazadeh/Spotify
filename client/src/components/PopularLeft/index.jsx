import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Popular from "../Popular";
import PlaylistPage from "../PlaylistPage";
import Navigation from "../Navigation";
import UserLoginPage from "../UserLoginPage";

const PopularLeft = () => {
  return (
    <div className="home">
      <div className="home_left">
        <div className="">
          <div className="home_head">
            {/* Use correct class names for Font Awesome icons */}
            <i className="fab fa-spotify"></i>
            <h3>Spotify</h3>
          </div>
          <div className="home_item">
            <i className="fas fa-house"></i>
            <p><Link to={'/popular'}>Home</Link></p>
          </div>
          <div className="home_item">
            <i className="fas fa-search"></i>
            <p>
              <Link to={"/search"}>Search</Link>
            </p>
          </div>
          <div className="home_item library">
            <i className="fas fa-book"></i>
            <p><Link to={'/library'}>Your Library</Link></p>
          </div>
          <div className="home_item">
            <i className="fas fa-plus-square"></i>
            <p>Create Playlist</p>
          </div>
        </div>
          <PlaylistPage/>
       
        <div className="home_lang">
          <i className="fas fa-globe-americas"></i>
          <p>English</p>
        </div>
      </div>
      <div className="home_right">
       
        <div className="popular">
        <Navigation/>
       <div className="popular_item">
          {/* <UserLoginPage/> */}
       <a>
            <Link style={{ textDecoration: "none" }} to={"/signup"}>
              Sign up
            </Link>
          </a>
          <a>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
            Log in
            </Link>
          </a>
       </div>
        </div>

        <Popular/>
      </div>
    </div>
  );
};

export default PopularLeft;
