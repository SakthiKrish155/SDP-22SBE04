import { ModeToggle } from '@/components/toggle-theme'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { CircleHelp, Clipboard, ClipboardCheck, ClipboardX, Home, Loader, Power, Settings, Settings2, Star, StickyNote, UserCircleIcon } from 'lucide-react'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const UserDashboard = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/user/content',
      icon: Home
    },
    {
      title: 'All Tasks',
      link: '/user/allTasks',
      icon: Clipboard
    },
    {
      title: 'Completed',
      link: '/user/completed',
      icon: ClipboardCheck
    },
    {
      title: 'Important',
      link: '/user/important',
      icon: Star
    },
    {
      title: 'In Progress',
      link: '/user/inProgress',
      icon: Loader
    },
    {
      title: 'Yet To Start',
      link: '/user/yetToStart',
      icon: ClipboardX
    },
    {
      title: 'Settings',
      link: '/user/settings',
      icon: Settings2
    }
  ]

  return (
    <div className='h-screen w-1/6 flex flex-col justify-center items-center'>
      <div className='h-[15%] text-primary font-bold text-l flex flex-col justify-between items-center'>
        <img src='https://ik.imagekit.io/s06oi31ye/Images/logo-svg.svg?updatedAt=1722105104552' className='h-60 w-60' />
      </div>
      <div className='h-[90%] w-full flex flex-col justify-center items center gap-2'>
        {
          AdminLinks.map((data, index) => (
            <NavLink key={index} to={data.link} className='hover:bg-primary/10 font-bold mt-2 w-full'>
              <span className='flex justify-start items-center py-2 my-1 font-medium rounded-md cursor-pointer'>
                {React.createElement(data.icon, { size: 20, className: "flex gap-3 mr-5 ml-5" })}
                {data.title}
              </span>
            </NavLink>
          ))
        }
        <hr className="my-3" />
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
      <div className='h-[8vh] w-95% flex justify-center items-center gap-7'>
          <div className='w-full h-full flex items-center justify-start'>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="font-medium text-primary">
                <div>Jese Leos</div>
              </div>
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default UserDashboard