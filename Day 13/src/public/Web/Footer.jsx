import React from 'react'
import { LinkedinIcon } from 'lucide-react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const Footer = () => {
    return (
        <div className='w-full h-[12vh] flex flex-row justify-center items-center border-t-2 border-primary shadow-sm'>
            <div className='h-full w-1/4 flex justify-center items-center text-xl font-bold text-foreground'>
                ©️ timeturner.com
            </div>
            <div className='h-full w-1/4 flex flex-row justify-between items-center text-l font-semibold text-foreground'>
                <a href='aboutus'>About Us</a>
                <a href='contact'>Contact Us</a>
                <a href='features'>Features</a>
                <a href='pricing'>Pricing</a>
            </div>
            <div className='h-full w-1/4 flex flex-row justify-center items-center text-l font-semibold text-foreground'>
                <div>
                    <p>Email: support@yourapp.com</p>
                    <p>Phone: (123) 456-7890</p>

                </div>
            </div>
            <div className='h-full w-1/4 flex justify-center items-center text-xl font-bold text-foreground'>
                <a href='linkedIn.com' target='_blank' className='p-2'>
                    <LinkedinIcon />
                </a>
                <a href='google.com' target='_blank' className='p-2'>
                    <FontAwesomeIcon icon={['fab', 'google']} />
                </a>
                <a href='facebook.com' target='_blank' className='p-2'>
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href='instagram.com' target='_blank' className='p-2'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href='twitter.com' target='_blank' className='p-2'>
                    <FontAwesomeIcon icon={['fab', 'x-twitter']} />
                </a>

            </div>

        </div>

    )
}

export default Footer