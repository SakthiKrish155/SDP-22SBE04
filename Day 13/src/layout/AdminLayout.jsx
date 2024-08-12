import Admin from '@/pages/Admin'
import AdminDashboard from '@/public/Admin/AdminDashboard'
// import AdminNav from '@/public/Admin/AdminNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen flex flex-row overflow-x-hidden m-0 p-0 overflow-y-auto'>
      <AdminDashboard/>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col bg-primary/10'>
        {/* <AdminNav /> */}
        <div className='h-[92vh] w-full'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout