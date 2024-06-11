import React from 'react'
import FullHome from './Home'
import { Outlet } from 'react-router-dom'
import PopularLeft from '../components/PopularLeft'

const UserRouter = () => {
  return (
    <div>
     <PopularLeft/>
     {/* <Outlet/> */}
    </div>
  )
}

export default UserRouter
