import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import FormCom from '../FormCom'
import { useSelector } from 'react-redux'

const PlayList = () => {

  const { playFind } = useSelector(state => state.player)
console.log(playFind);
  return (
    <div className="home_right home_right2">
      <div className="popular">
        <Navigation />

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
      <div className="artist">
        <div className="artist_head">
          <p>Playlist</p>
          <div>
            {playFind.img ? <div className="imgBox">
              <img src={playFind.img} alt="" />
            </div> : ""}
            <h1 style={{ color: "white" }}>{playFind.textarea}{playFind.id}</h1>
            <p>{playFind.name}</p>
          </div>
          <div style={{ backgroundColor: 'rgb(19, 18, 18)' }}>
            <FormCom l="l" playFind={playFind} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayList