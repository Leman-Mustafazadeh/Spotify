import React from 'react'
import FullHome from './Home'
import { Outlet } from 'react-router-dom'
import PopularLeft from '../components/PopularLeft'
import Player from '../components/BottomPlay/Player'

const UserRouter = () => {
  return (
    <div>
     <PopularLeft/>
     <Outlet/>
     <Player/>
    </div>
  )
}

export default UserRouter
