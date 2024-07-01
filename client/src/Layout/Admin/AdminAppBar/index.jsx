// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// const AdminAppBar = () => {
//   return (
//     <>
//       <nav className="nav">
//         <div className="logo">
//           <Link>
//             <h1 style={{color:"gray"}}>Admin Panel</h1>
//           </Link>
//         </div>
//         <ul>
//           <li>
//             <Link to="add-songs">
//               <i class="fa-solid fa-music"></i>
//               <span>Songs</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="">
//               <i class="fa-solid fa-user"></i>
//               <span>Users</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default AdminAppBar;



import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import "./style.css"
import { Button, Layout, Menu, theme } from 'antd';
import AddSongs from '../../../pages/Admin/AddSong';
import AdminDashboard from '../../../pages/Admin/AdminDashboard';
import { Link, Outlet } from 'react-router-dom';
import UploadSong from '../../../pages/Admin/UploadSong/UploadSong';
const { Header, Sider, Content } = Layout;
const AdminAppBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <Link style={{padding:0}} to="/admin">Dashboard</Link>,
              /* label: 'User', */
            },
            {
              key: '2',
              icon: <Link style={{padding:0}} to="add-songs">AddSongs</Link> ,
             /*  label: 'Add Songs', */
            },
            {
              key: '3',
              icon: <Link style={{padding:0}} to="uploadsong">Users </Link>,
            /*   label: 'nav 3', */
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminAppBar;
