import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminAppBar from '../../Layout/Admin/AdminAppBar'
import './admin.css'
const AdminRoot = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminAppBar className='appbar' />
        <div >
          {/* <Header /> */}
          <Outlet />
        </div>

      </div>
   
      </>
  )
}

export default AdminRoot
