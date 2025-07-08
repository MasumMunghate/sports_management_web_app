

import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Sidebar/Sidebar'
import Navbar from '../Component/Navbar/Navbar'

const Rootlayout = () => {
  return (
    <>
    
     <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <Navbar />
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Rootlayout