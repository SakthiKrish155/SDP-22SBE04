import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '@/components/toggle-theme'

const UserNav = () => {
    return (
        <div className='h-[8vh] w-full flex justify-center items-center'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>UR</AvatarFallback>
                </Avatar>
                <ModeToggle/>
            </div>
        </div>
    )
}

export default UserNav