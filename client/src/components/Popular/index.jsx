import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Data from "./Data";
import { hundleAllDAta, setCurrent } from "../../redux/slice/player";
import { useDispatch, useSelector } from "react-redux";

const Popular = () => {
 
  const { allDAta } = useSelector(state => state.player)
  const [filter, setFilter] = useState(allDAta)
  const handleSubmit = (inpValue) => {
    const search = allDAta.filter((x) => x.name.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
    setFilter(search)
  }
  useEffect(() => {
    setFilter(allDAta)
  }, [allDAta])
  return (
    <div className="home_right home_right2">
      <div className="popular">
        <Navigation />
        <input type="text" placeholder="What do you want to play?" onChange={(e)=>handleSubmit(e.target.value)}/>
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
            {filter?.map((item) => <Data key={item._id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
