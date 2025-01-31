import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useAudio, useFullscreen, useToggle } from "react-use";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import CustomRange from "./Range";
import { useDispatch, useSelector } from "react-redux";
import { handleLikeSongs, handleNextSong, handlePrevSong, setControls, setCurrent, setSideBar } from "../../redux/slice/player";
import FullScreen from "./FullScreen";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const { current, sideBar, allDAta } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [audio, state, controls, ref] = useAudio({
    src: current?.musicSrc
  });

  const screenRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(screenRef, show, {
    onClose: () => toggle(false),
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false); 
  const [shuffledPlaylist, setShuffledPlaylist] = useState([]); 

  useEffect(() => {
    if (controls && current) {
      dispatch(setControls(controls));
      controls.play();
      setIsPlaying(true);
    } else {
      controls.pause();
    }
  }, [dispatch, current]);

  useEffect(() => {
    if (shuffleMode && allDAta) {
      const shuffledSongs = shuffleArray(allDAta.filter(song => song._id !== current?._id));
      setShuffledPlaylist(shuffledSongs);
      dispatch(setCurrent(shuffledSongs[0]));
    } else {
      setShuffledPlaylist([]);
    }
  }, [shuffleMode]);
  

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

  const toggleShuffle = () => {
    setShuffleMode(!shuffleMode); 
  };

  const shuffleArray = (array) => {
    if (!array || array.length === 0) {
      return [];
    }
  
    let currentIndex = array.length, temporaryValue, randomIndex;
    let newArray = array.slice();
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  
    return newArray;
  }
  
  const volumeIcon = () => {
    if (!state) return null;

    if (state.volume === 0 || state.muted)
      return (
        <span style={{ color: "white" }} className="fa-solid fa-volume-xmark"></span>
      );

    if (state.volume > 0 && state.volume < 0.33)
      return (
        <span style={{ color: "white" }} className="fa-solid fa-volume-low"></span>
      );

    if (state.volume >= 0.33 && state.volume < 0.66)
      return (
        <span style={{ color: "white" }} className="fa-solid fa-volume-medium"></span>
      );

    return (
      <span style={{ color: "white" }} className="fa-solid fa-volume-high"></span>
    );
  };

  function secondsToTime(seconds) {
    return new Date(1000 * seconds).toISOString().substr(14, 5);
  }

  return (
    <div className="player" onClick={(e) => e.stopPropagation()}>
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        className="left_title"
      >
       {sideBar && current && current.imgSrc && (
  <div
    style={{
      width: "200px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "3px",
    }}
    className="left_img"
  >
    <img
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={current.imgSrc}
      alt=""
    />
    <div>
      <h5 style={{ width: "150px" }}>{current.title}</h5>
      <p style={{ width: "150px" }}>{current.artist}</p>
    </div>
    <p className="like_icon" onClick={() => {
      if (user.id != null && user.role === 'client') {
        dispatch(handleLikeSongs(current._id));
      } else {
        navigate("/login"); 
      }
    }}>
      <i className="fa-solid fa-plus"></i>
    </p>
  </div>
)}

      </div>

      <div>
        <div className="play_between">
          <p className={`play_shuffle ${shuffleMode ? "active" : ""}`} onClick={toggleShuffle}>
            <span className="fa-solid fa-shuffle"></span>
          </p>
          <p onClick={() => dispatch(handlePrevSong())} className="prev_play">
            <span className="fa-solid fa-backward"></span>
          </p>
          <span
            onClick={togglePlay}
            className="play_button"
          >
            <i
              className={
                isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"
              }
            ></i>
          </span>
          <p onClick={() => dispatch(handleNextSong())} className="prev_play">
            <span className="fa-solid fa-forward"></span>
          </p>
          <p className="repeat_play">
            <span className="fa-solid fa-repeat"></span>
          </p>
        </div>
        {audio}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "white" }}>{secondsToTime(state?.time)}</div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div style={{ color: "white" }}>{secondsToTime(state?.duration)}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <p
          className="prev_play"
          onClick={() => controls[state.muted ? "unmute" : "mute"]()}
        >
          {volumeIcon()}
        </p>
        <div style={{ width: "5rem" }}>
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <p onClick={() => toggle()}>
          <span
            className="fa-solid fa-expand"
            style={{ color: "white", fontSize: "20px" }}
          ></span>
        </p>
        <div ref={screenRef} onClick={(e) => e.stopPropagation()}>
          {isFullscreen && (
            <FullScreen toggle={toggle} state={state} controls={controls} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
