import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { Link } from 'react-router-dom'
import { hundlePlayFind } from '../../redux/slice/player'
const PlaylistPage = () => {
 /*  const {playerData} = useSelector(state=>state.player) */
  const { playList} = useSelector(state=>state.player);
  const dispatch = useDispatch();
  return (
    <div className='boxPlayer' style={{color:"white"}}>
     {playList?.map((item)=>(
      <Link onClick={()=>dispatch(hundlePlayFind(item.id))} to={"/playlist"}> <div style={{color:"white"}} className='playerData'>
        <div className='playerData_title'>
        { item.img ? <img src={item.img} alt="" />  :      <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="playlist" class="Svg-sc-ytk21e-0 bneLcE" viewBox="0 0 24 24"><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>}
        </div>
        <div  className='playerData_item'>
          <h2>{item.textarea} {item.id}</h2>
          <p style={{color:'white'}}>{item.name}</p>
        </div>
       
      </div></Link>
     ))}
    </div>
  )
}

export default PlaylistPage


/* 

<div style={{color:"white"}} className='playerData'>
        <div className='playerData_title'>
          <img src={item.img} alt="" />
        </div>
        <div  className='playerData_item'>
          <h4 style={{color:'white'}}>{item.name}</h4>
          <p>{item.textarea}</p>
        </div>
       
      </div>

*/
