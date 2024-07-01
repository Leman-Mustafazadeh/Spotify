import React from 'react'
import AdminAppBar from '../../Layout/Admin/AdminAppBar'
import './admin.css'
const AdminRoot = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminAppBar className='appbar' />
      </div>
    </>
  )
}

export default AdminRoot
