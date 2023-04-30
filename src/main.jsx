import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './components/layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx'
import Orders from './components/Orders/Orders.jsx'
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes.jsx'
import Profile from './components/Profile/Profile.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/orders",
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
 
 
)
