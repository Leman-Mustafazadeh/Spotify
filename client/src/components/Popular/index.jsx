import React, { useContext } from "react";
import "./style.css";
import { MenuProvider } from "../../context/ContextMenu";
const Popular = () => {
  const { songs, setSongs } = useContext(MenuProvider);

  return (
    <div>
      <div className="home_right">
        <div className="artist">
          <div className="artist_head">
            <p>Popular artists</p>

            <div className="cards">
              {songs.map((item) => {
                return (
                  <div className="cards_item" key={item._id}>
                    <img src={item.imgSrc} alt="" />
                    <div className="song_icon">
                      <i class="fa-solid fa-play"></i>
                    </div>
                    <h5>{item.artist}</h5>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
