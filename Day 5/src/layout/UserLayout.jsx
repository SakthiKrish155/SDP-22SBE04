import UserNav from '@/public/User/UserNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <UserNav/>
      <Outlet/>
    </div>
  )
}

export default UserLayout