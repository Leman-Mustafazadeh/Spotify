import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import "./style.css";
import { useSelector } from "react-redux";
const Search = () => {
  return (
    <div style={{ marginTop:"5px", marginLeft: "310px", width: "75.1vw" }}>
      <div className="popular">
        <div className="popular_left">
          <Navigation />
          <div className="search_icon">
          <i class="fa-solid fa-magnifying-glass" style={{color:'white'}}></i>
          </div>
          <input type="text" placeholder="What do you want to play?" />
        </div>
        <div className="popular_item">
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
      
      <div>
        <h2>Browse All</h2>
        
      </div>

    </div>
  );
};

export default Search;
