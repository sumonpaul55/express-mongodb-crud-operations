import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './component/users/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/users",
    loader: () => fetch('http://localhost:5000/users'),
    element: <Users></Users>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
