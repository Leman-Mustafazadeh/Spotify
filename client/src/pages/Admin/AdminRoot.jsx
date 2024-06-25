import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminAppBar from '../../Layout/Admin/AdminAppBar'
import './admin.css'
const AdminRoot = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminAppBar className='appbar' />
        <div style={{ width: "calc(100% - 272px)" }}>
          {/* <Header /> */}
          <Outlet />
        </div>

      </div>
   
      </>
  )
}

export default AdminRoot
