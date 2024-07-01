import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { hundlePlayFind } from "../../redux/slice/player";
import controller, { getAll } from "../../API";
import { endpoints } from "../../API/constants";
const PlaylistPage = () => {
  const { playList } = useSelector((state) => state.player);

  const [myPl, setMyPl] = useState([]);
  useEffect(() => {
    getAll(endpoints.playlist).then((res) => {
      setMyPl(res.data);
    });
  }, [playList]);

  console.log(myPl);
  const dispatch = useDispatch();
  return (
    <div className="boxPlayer" style={{ color: "white" }}>
      {myPl.length > 0 &&
        myPl.map((item) => (
          <Link
            onClick={() => dispatch(hundlePlayFind(item.id))}
            to={"/playlist"}
          >
            {" "}
            <div style={{ color: "white" }} className="playerData">
              <div className="playerData_title">
                <img src={item.img} alt="" />
              </div>
              <div className="playerData_item">
                <h2>
                  {item.textarea} {item.id}
                </h2>
                <p style={{ color: "white" }}>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PlaylistPage;
