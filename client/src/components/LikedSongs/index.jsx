import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import "./like.css";
import { useDispatch, useSelector } from "react-redux";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { handleLikedData, playLikeSong, setControls } from "../../redux/slice/player";
import { deleteOne } from "../../API";
import Swal from "sweetalert2";
import { endpoints } from "../../API/constants";

const LikedSongs = () => {
  const { current, likeSongs } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const [audio, state, controls, ref] = useAudio({
    src: current?.musicSrc,
  });

  const screenRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(screenRef, show, {
    onClose: () => toggle(false),
  });

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
  }, [dispatch, current]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(endpoints.like, id)
          .then(() => {
            const updatedSongs = likeSongs.filter((song) => song._id !== id);
            dispatch(handleLikedData(updatedSongs));
            Swal.fire({
              title: "Deleted!",
              text: "Your song has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error("Error deleting song:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the song.",
              icon: "error",
            });
          });
      }
    });
  };

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
          <i className="fa-solid fa-heart"></i>
        </div>

        <div className="heart_title">
          <p>Playlist</p>
          <h1>Liked Songs</h1>
        </div>
      </div>

      <div className="musics">
        {likeSongs.map((item) => (
          <div className="music_like_wrap" key={item._id}>
            <span
              style={{ position: "relative", zIndex: "10000" }}
              onClick={() => dispatch(playLikeSong(item._id))}
              className="likes_button"
            >
              <i
                style={{ fontSize: "17px", color: "white" }}
                className={
                  item._id === current._id
                    ? "fa-solid fa-pause"
                    : "fa-solid fa-play"
                }
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

              {/* Silme ikonu */}
              <i className="fa-solid fa-trash" onClick={() => handleDelete(item._id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;
