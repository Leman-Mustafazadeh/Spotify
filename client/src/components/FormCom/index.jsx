import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Upload } from "antd";
const { TextArea } = Input;
import { styled } from "@mui/material/styles";
import "./style.css";
import InputFileUpload from "../Upload";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlayerData,
  editPlayerData,
  editPlayerData2,
} from "../../redux/slice/player";
import { endpoints } from "../../API/constants";
import { getAll, post } from "../../API";

const FormCom = ({ playFind }) => {
  console.log(playFind.id, "playFind");
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [upload, setUpload] = useState({});
  const [upload2, setUpload2] = useState("");

  const { playList } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const normFile = (e) => {
    e.preventDefault();
    let img = URL.createObjectURL(upload?.files[0]);
    const editPlayer = playList.map((item) => {
      if (item.id === playFind.id) {
        return {
          ...item,
          img: img,
          name:textarea ,
          textarea:  input,
        };
      }
      return item;
    });

    dispatch(
      editPlayerData2(editPlayer.find((play) => play.id === playFind.id))
    );
    dispatch(editPlayerData(editPlayer));
    const playerObj = {
      name: input,
      textarea: textarea,
      img: img,
    };

    dispatch(getPlayerData(playerObj));

    post(endpoints.playlist, playerObj);
    form.resetFields(); // Formu sıfırla

    // State'leri sıfırla
    setInput("");
    setTextarea("");
    setUpload(null);
  };
 
  // const [filter, setFilter] = useState(menu)
  // const handleSubmit = (inpValue) => {
  //   const search = menu.filter((x) => x.name.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
  //   setFilter(search)
  // }
  // useEffect(() => {
  //   setFilter(menu)
  // }, [menu])
  const { allDAta } = useSelector(state => state.player)
  const [filter, setFilter] = useState(allDAta);


  

  const handleSearch = (inpValue) => {
    const search = allDAta.filter((x)=>x.songName.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
    setFilter(search)
  };
  useEffect(()=>{
    setFilter(allDAta)
  },[allDAta])

  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <div className="formCom">
      
      <Form onSubmitCapture={normFile}>
        <div className="com_head">
          <InputFileUpload setUpload={setUpload} />

          <div className="formCom_title">
            <Form.Item style={{ color: "white" }} label="Name">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  backgroundColor: " rgb(27, 24, 24)",
                  color: "white",
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
                rows={4}
                style={{ backgroundColor: " rgb(32, 30, 30)", width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <button className="save">Save</button>
        </Form.Item>
      </Form>

      <div className="com_search">
        <h4>Let's find something for your playlist</h4>

        <div>
          <input
            type="text"
            placeholder="Search for songs"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="music">
          {filter.map((item) => (
          <div className="music_wrap">
            <div className="music_head">
              <div className="music_img">
                <img src={item.imgSrc} alt="" />
              </div>
              <div className="music_title">
                <p>{item.artist}</p>
                <span>{item.name}</span>
              </div>
            </div>

            <button >Add</button>
          </div>
          ))}
        </div>
      </div>

      <div className="company">
        <ul>
          <p>
            <li>
              <a href="">Company</a>
            </li>
          </p>

          <li>
            <a href="https://www.spotify.com/az-az/about-us/contact/">About</a>
          </li>
          <li>
            <a href="https://www.lifeatspotify.com/">Jobs</a>
          </li>
          <li>
            <a href="https://newsroom.spotify.com/">For the Record</a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>

        <ul>
          <p>
            <li>
              <a href="">Communities</a>
            </li>
          </p>
          <li>
            <a href="https://artists.spotify.com/">For Artists</a>
          </li>
          <li>
            <a href="https://developer.spotify.com/">Developers</a>
          </li>
          <li>
            <a href="https://ads.spotify.com/en-US/">Advertising</a>
          </li>
          <li>
            <a href="https://investors.spotify.com/home/default.aspx">
              Investors
            </a>
          </li>
          <li>
            <a href="https://spotifyforvendors.com/">Vendors</a>
          </li>
        </ul>

        <ul>
          <p>
            <li>
              <a href="">Useful links</a>
            </li>
          </p>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Free Mobile App</a>
          </li>
        </ul>

        <ul>
          <p>
            <li>
              <a href="">Spotify Plans</a>
            </li>
          </p>
          <li>
            <a href="">Premium Individual</a>
          </li>
          <li>
            <a href="">Premium Duo</a>
          </li>
          <li>
            <a href="">Premium Family</a>
          </li>
          <li>
            <a href="">Premium Student</a>
          </li>
          <li>
            <a href="">Spotify Free</a>
          </li>
        </ul>

        <div className="company_icon">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};
export default FormCom;
