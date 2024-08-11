import { Button } from '@/components/ui/button'
import { faDashboard, faProjectDiagram, faTasks, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Power } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard',
      icon: faDashboard
    },
    {
      title: 'Projects',
      link: '/admin/projects',
      icon: faProjectDiagram
    },
    {
      title: 'Tasks',
      link: '/admin/tasks',
      icon: faTasks
    },
    {
      title: 'Users',
      link: '/admin/users',
      icon: faUser
    }
  ]

  return (
    <div className='h-screen w-1/6 flex flex-col justify-center items-center border-solid border-r-2'>
      <div className='h-[5%] text-primary font-bold text-l flex flex-row justify-between items-center'>
        <img src='https://ik.imagekit.io/s06oi31ye/Images/logo-transparent-svg.svg?updatedAt=1722052288163' className='h-64 w-64' />
      </div>
      <div className='h-[85%] w-full flex flex-col justify-start items center gap-3'>
        {
          AdminLinks.map((data, index) => {
            <Link key={index} to={data.link}>
              <span className='flex flex-row justify-start items-center gap-2'>
                {React.createElement(data.icon, { size: 20 })}
                {data.title}
              </span>
            </Link>
          })
        }
      </div>
      <div className='h-[5%] w-full flex flex-col justify-center items-center'>
        <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
          <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
            <Power size={20} /> Logout
          </span>
        </Button>
      </div>
    </div>
  )
}

export default AdminDashboard