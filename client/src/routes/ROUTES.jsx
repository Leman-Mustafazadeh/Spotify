import Login from "../components/Login";
import Search from "../components/Search";
import SignUp from "../components/SignUp";
import Home from "../components/PopularLeft";
import UserRouter from "../pages/UserRouter";
import Popular from "../components/Popular";
import Library from "../components/Library";

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
        path: "login",
        element: <Login />,
      },
      {
        path:"signup",
        element:<SignUp/>
      },
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"popular",
        element:<Popular/>
      }, {
        path:"library",
        element:<Library/>
      }
     
    ],
  },
];
