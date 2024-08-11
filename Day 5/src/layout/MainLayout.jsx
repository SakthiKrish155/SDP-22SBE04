import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../public/Web/Navbar'

const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout