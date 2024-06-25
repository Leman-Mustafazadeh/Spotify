import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Data from "./Data";
import { hundleAllDAta, setCurrent } from "../../redux/slice/player";
import { useDispatch, useSelector } from "react-redux";

const Popular = () => {
 
  const { allDAta } = useSelector(state => state.player)

  return (
    <div className="home_right home_right2">
      <div className="popular">
        <Navigation />
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
      <div className="artist">
        <div className="artist_head">
          <p>Popular artists</p>

          <div className="cards">
            {allDAta?.map((item) => <Data key={item._id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
