import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Salary from './pages/salary.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/salory",
        element: <Salary/>,
        
      },
    {
        path: "/dashbord",
        element: <Dashboard/>,
        
      },
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
