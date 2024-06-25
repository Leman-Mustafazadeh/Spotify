import React, { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import CustomRange from "./Range";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import { useFullscreen, useToggle } from "react-use";

const FullScreen = ({ controls, state }) => {
  const { current } = useSelector((state) => state.player);
  console.log(current);

  function secondsToTime(seconds) {
    return new Date(1000 * seconds).toISOString().substr(14, 5);
  }
  const screenRef = useRef(null);
  const [show, toggle] = useToggle(false);

  const isFullscreen = useFullscreen(screenRef, show, {
    onClose: () => toggle(false),
  });

  const volumeIcon = useMemo(() => {
    if (!state || state.volume === undefined || state.muted)
      return (
        <i style={{ color: "white" }} className="fa-solid fa-volume-xmark"></i>
      );
  
    if (state.volume > 0 && state.volume < 0.33)
      return (
        <i style={{ color: "white" }} className="fa-solid fa-volume-low"></i>
      );
  
    if (state.volume >= 0.33 && state.volume < 0.66)
      return (
        <i style={{ color: "white" }} className="fa-solid fa-volume-medium"></i>
      );
  
    return (
      <i style={{ color: "white" }} className="fa-solid fa-volume-high"></i>
    );
  }, [state]);
  
  return (
    <div className="screen"   onClick={controls[state?.playing ? "pause" : "play"]}>
      <div
        className="bgcImg"
        style={{ backgroundImage: `url(${current?.imgSrc})` }}
      ></div>

      <div className="bgcImg_">
        <img src={current.imgSrc} alt="" />
        <h3>{current.title}</h3>
        <h6>{current.artist}</h6>
      </div>
      <div className="screen_title">
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
            style={{ width: "100%" }}
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div style={{ color: "white" }}>{secondsToTime(state?.duration)}</div>
        </div>

        <div className="screen_item">
          <div className="play_between">
            <p className="play_shuffle">
              <i className="fa-solid fa-shuffle"></i>
            </p>

            <p className="prev_play">
              <i className="fa-solid fa-backward"></i>
            </p>
            <button
              onClick={(e)=>{
                e.preventDefault()
                controls[state?.playing ? "pause" : "play"]()
              }}
              className="play_button"
            >
              <i
                className={
                  state.playing ? "fa-solid fa-pause" : "fa-solid fa-play"
                }
              ></i>
            </button>
            <p className="prev_play">
              <i className="fa-solid fa-forward"></i>
            </p>
            <p className="repeat_play">
              <i className="fa-solid fa-repeat"></i>
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p className="prev_play">
              <i
                className="fa-solid fa-microphone"
                style={{ color: "white" }}
              ></i>
            </p>

            <p className="prev_play">
              <QueueMusicRoundedIcon style={{ color: "white" }} />
            </p>

            <p className="prev_play">
              <i className="fa-solid fa-mobile" style={{ color: "white" }}></i>
            </p>
            <p
              className="prev_play"
              onClick={ controls[state.muted ? "unmute" : "mute"]()
              }
            >
              {volumeIcon}
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

            <p onClick={toggle}>
              <i
                class="fa-solid fa-expand"
                style={{ color: "white", fontSize: "20px" }}
              ></i>
            </p>

            <div ref={screenRef} >
            {isFullscreen && (
  <FullScreen toggle={toggle} state={state} controls={controls} onClick={(e)=>{
    e.stopPropagation();
  }} />
)}
              {/* <button onClick={toggle}>close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
