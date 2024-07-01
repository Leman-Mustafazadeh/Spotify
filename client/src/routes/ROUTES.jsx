import Login from "../components/Login";
import Search from "../components/Search";
import SignUp from "../components/SignUp";
import Home from "../pages/Home";
import UserRouter from "../pages/UserRouter";
import Popular from "../components/Popular";
import PlayList from "../components/PlayList";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AddSongs from "../pages/Admin/AddSong";
import LikedSongs from "../components/LikedSongs";
import UploadSong from "../pages/Admin/UploadSong/UploadSong";

export const ROUTER = [
  {
    path: "/",
    element: <UserRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "playlist",
        element: <PlayList />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "likedsongs",
        element: <LikedSongs />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdminRoot />,
    children: [
      {
        index: true,
        element: <AdminDashboard /> 
      },
      {
        path: "add-songs",
        element: <AddSongs />,
      },
      {
        path:"uploadsong",
        element:  <UploadSong />,
      }
    ],
  },
];
