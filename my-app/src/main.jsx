import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './output.css'

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Navbar from "./navbar.jsx"
import Demo from "./routes/demo.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
