import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrent,
  setPlaying,
  setSideBar,
  pausePlaying,
} from "../../redux/slice/player";

const Data = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cards_item" key={item._id}>
      <div className="cards_item_img">
        <img src={item.imgSrc} alt="" />
      </div>

      {item.play ? (
        <button
          onClick={() => dispatch(pausePlaying(item._id))}
          className="song_icon"
        >
          {" "}
          <i className="fa-solid fa-pause"></i>{" "}
        </button>
      ) : (
        <button
          onClick={() => dispatch(setPlaying(item._id))}
          className="song_icon"
        >
          {" "}
          <i className="fa-solid fa-play"></i>{" "}
        </button>
      )}

      <h5>{item.artist}</h5>
      <p>{item.name}</p>
    </div>
  );
};

export default Data;
