import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './component/users/Users.jsx';
import Update from './component/users/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/users",
    loader: () => fetch('http://localhost:5000/users'),
    element: <Users></Users>
  },
  {
    path: "/update/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    element: <Update></Update>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
