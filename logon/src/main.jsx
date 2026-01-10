import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Users from './routes/Users.jsx'
import Login from './routes/Login.jsx'
import Registar from './routes/Registar.jsx'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'Users',
        element: <Users />
      },
      {
        path: 'Register',
        element: <Registar />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
