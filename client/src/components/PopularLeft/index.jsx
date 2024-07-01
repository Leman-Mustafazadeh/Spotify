import React, { useContext } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Popular from "../Popular";
import PlaylistPage from "../PlaylistPage";
import Navigation from "../Navigation";
import UserLoginPage from "../UserLoginPage";
import { useDispatch, useSelector } from "react-redux";
import { hundlePlayList } from "../../redux/slice/player";

const PopularLeft = () => {
  const dispatch = useDispatch();
  const { playList } = useSelector((state) => state.player);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate(); 
  let playListId = 0;

  const CreatePlayListFunc = () => {
    playListId++;
    const myPlayList = {
      id: playListId + "#",
      name: "Playlist",
      img: "",
      textarea: "My Playlist",
    };
    dispatch(hundlePlayList([...playList, myPlayList]));
  };

  return (
    <div>
      <div className="home">
        <div className="home_left">
          <div className="">
            <div className="leftHead">
              <div className="home_head">
                <i className="fab fa-spotify"></i>
                <h3>Spotify</h3>
              </div>
              <div className="home_item">
                <i className="fas fa-house"></i>
                <p>
                  <Link
                    to={"/popular"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Home
                  </Link>
                </p>
              </div>
            </div>
            <div className="centerHead">
              <div className="home_item">
                <i className="fas fa-search"></i>
                <p>
                  <Link
                    to={"/search"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Search
                  </Link>
                </p>
              </div>
          
              <div className="home_item">
                <i
                  onClick={() =>{ if(user.id!==null && user.role==="client"){
                    CreatePlayListFunc()
                  }else{
                    navigate("/login");
                  }} }
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  className="fas fa-plus-square"
                ></i>
                <p
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Create Playlist
                </p>
              </div>

              <div className="home_item library">
                <i class="fa-solid fa-heart"></i>
                <p>
                  <Link
                    to={"/likedsongs"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Liked Songs
                  </Link>
                </p>
              </div>
              <PlaylistPage />
            </div>
          </div>

          <div className="home_lang">
            <i className="fas fa-globe-americas"></i>
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLeft;
