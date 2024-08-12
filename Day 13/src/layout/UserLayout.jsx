import UserDashboard from '@/public/User/UserDashboard'
// import UserNav from '@/public/User/UserNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className=' h-screen w-screen flex flex-row overflow-x-hidden m-0 p-0 overflow-y-auto'>
      <UserDashboard />
      <div className='w-5/6 flex justify-center items-center flex-col bg-primary/10'>
        {/* <UserNav /> */}
        <div className='h-[100vh] w-full'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default UserLayout