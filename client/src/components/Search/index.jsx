import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import "./style.css";
import { useSelector } from "react-redux";

const Search = () => {
  const { allDAta } = useSelector(state => state.player)
console.log(allDAta);
const [filter, setFilter] = useState(allDAta)
const handleSubmit = (inpValue) => {
  const search = allDAta.filter((x) => x.genre.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
  setFilter(search)
}
useEffect(() => {
  setFilter(allDAta)
}, [allDAta])

  return (
    <div style={{ marginTop: "5px", marginLeft: "200px", width: "75.1vw" }}>
      <div className="popular">
        <div className="popular_left">
          <Navigation />
          <div className="search_icon">
            <i className="fa-solid fa-magnifying-glass" style={{ color: 'white' }}></i>
          </div>
          <input type="text" placeholder="What do you want to play?" onChange={(e)=>handleSubmit(e.target.value)}/>
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
        <div className="headSearch">
          {filter.map((item, index) => (
            <div key={index} className="search_wrap" style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.photo} alt="" />
              <p>{item.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
