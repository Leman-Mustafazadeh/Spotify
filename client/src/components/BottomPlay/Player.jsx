import React, { useState } from "react";
import "./style.css";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import { useAudio } from "react-use";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const Player = () => {
  const STEP = 0.1;
  const MIN = 0;
  // const MAX = 100;
  // const [values, setValues] = useState([50]);
  const [isThumbHovered, setIsThumbHovered] = useState(false);
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });
  function secondsToTime(seconds) {
    return new Date(1000 * seconds).toISOString().substr(14, 5);
  }
  return (
    <div className="player">
      <div>sol</div>
      {/* {JSON.stringify(state)} */}
      <div>
        <div className="play_between">
          <p className="play_shuffle">
            <i className="fa-solid fa-shuffle"></i>
          </p>

          <p className="prev_play">
            <i className="fa-solid fa-backward"></i>
          </p>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
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
          <Range
            values={[state?.time]}
            step={STEP}
            min={MIN}
            max={state?.duration || 1}
            onChange={(values) => controls.seek(values[0])}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: [state?.time],
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: state?.duration || 1,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "12px",
                  width: "12px",
                  cursor: "pointer",
                  borderRadius: "25px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                  opacity: isThumbHovered || isDragged ? 1 : 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={() => setIsThumbHovered(true)}
                onMouseLeave={() => setIsThumbHovered(false)}
              >
                {/* You can add any content inside the thumb if needed */}
              </div>
            )}
          />

          <div style={{ color: "white" }}>{secondsToTime(state?.duration)}</div>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <p className="prev_play">
          <i class="fa-solid fa-microphone" style={{ color: "white" }}></i>
        </p>

        <p className="prev_play">
          <i class="fa-solid fa-mobile" style={{ color: "white" }}></i>
        </p>

        <p className="prev_play">
          <i class="fa-solid fa-mobile" style={{ color: "white" }}></i>
        </p>

        <p className="prev_play">
          <VolumeUpIcon style={{color:'white'}}/>
        </p>
      </div>
    </div>
  );
};

export default Player;
