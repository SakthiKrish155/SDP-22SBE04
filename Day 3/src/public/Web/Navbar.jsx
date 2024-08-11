import { ModeToggle } from '@/components/toggle-theme';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='top-0 left-0 w-full h-[10vh] flex flex-row justify-center items-center border-b-2 border-primary shadow-xl'>
                <div className='h-full w-3/4 flex justify-start p-5 items-center text-xl font-bold text-foreground'>
                    The Daily Prophet
                </div>
                <div className='h-full w-1/4 flex justify-end pr-7 items-center text-xl font-bold text-foreground'>
                    <Link to="/signIn">
                        <h1 className="text-lg text-end p-8">SignIn</h1>
                    </Link>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
