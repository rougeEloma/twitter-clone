import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SideBar from "./components/sidebar-cpts/sideBar.jsx";
import Trends from "./components/trends-cpts/wholeTrends.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {

  const Layout = () => {
    return (
      <div className="app">
        <SideBar/>
        <Outlet/>
        <Trends/>
      </div>
    )
  }

  const router = createBrowserRouter( [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    },
  ]);

  return (
    <div><RouterProvider router={router}/></div>
  );
}
