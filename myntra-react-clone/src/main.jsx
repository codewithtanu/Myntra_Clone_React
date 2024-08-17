import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bags from './routes/Bags.jsx'
import Home from './routes/Home.jsx'
import myntraStore from './store/index.js'
// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.css"
const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/> },
      {
        path:"/bag",
        element:<Bags/>,
        
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore} >
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
