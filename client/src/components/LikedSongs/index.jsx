import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import "./like.css";
import { useDispatch, useSelector } from "react-redux";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { setControls } from "../../redux/slice/player";
const LikedSongs = () => {
  const { allDAta,current } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.musicSrc
  });

  const screenRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(screenRef, show, {
    onClose: () => toggle(false),
  });
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false); 
  
  const togglePlay = () => {
    if (controls) {
      if (isPlaying) {
        controls.pause(); 
      } else {
        controls.play();
      }
      setIsPlaying(!isPlaying); 
    }
  };
  useEffect(() => {
    if (controls && current) {
      dispatch(setControls(controls));
      controls.play(); 
      setIsPlaying(true); 
    }
  }, [dispatch,  current]);
  const {likeSongs}= useSelector((state)=>state.player)
  return (
    <div style={{ marginTop: "5px", marginLeft: "310px", width: "75.1vw" }}>
      <div className="popular">
        <div className="popular_left">
          <Navigation />
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

      <div className="heart_head">
        <div className="heart_icon">
          <i class="fa-solid fa-heart"></i>
        </div>

        <div className="heart_title">
          <p>Playlist</p>
          <h1>Liked Songs</h1>
        </div>
      </div>

      <div className="musics">
        {likeSongs.map((item) => (
          <div className="music_like_wrap">
            <span onClick={togglePlay} className="likes_button">
              <i style={{fontSize:'17px',color:'white'}}
                className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}
              ></i>
            </span>
            <div className="music_like">
              <div className="music_like_head">
                <div className="music_like_img">
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className="music_like_title">
                  <p>{item.artist}</p>
                  <span>{item.name}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;
