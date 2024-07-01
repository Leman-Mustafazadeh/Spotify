import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Data from "./Data";
import { useSelector } from "react-redux";

const Popular = () => {
  const { allDAta } = useSelector(state => state.player);
  const [filter, setFilter] = useState(allDAta);

  const handleSubmit = (inpValue) => {
    const searchResults = allDAta.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(inpValue.toLowerCase().trim());
      const artistMatch = item.artist.toLowerCase().includes(inpValue.toLowerCase().trim());
      return nameMatch || artistMatch;
    });
    setFilter(searchResults);
  };

  useEffect(() => {
    setFilter(allDAta);
  }, [allDAta]);

  return (
    <div className="home_right home_right2">
      <div className="popular">
        <Navigation />
        <input type="text" placeholder="What do you want to play?" onChange={(e) => handleSubmit(e.target.value)} />
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
