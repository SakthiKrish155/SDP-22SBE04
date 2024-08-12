import ManagerDashboard from '@/public/Manager/ManagerDashboard'
import React from 'react'
import { Outlet } from 'react-router-dom'

const ManagerLayout = () => {
  return (
    <div className='h-screen w-screen flex flex-row overflow-x-hidden m-0 p-0 overflow-y-auto'>
      <ManagerDashboard/>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col bg-primary/10'>
        {/* <AdminNav /> */}
        <div className='h-[92vh] w-full'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default ManagerLayout