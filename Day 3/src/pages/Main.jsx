import React from 'react';
import Footer from '../public/Web/Footer';
import { FaTasks, FaClock, FaUsers, FaBell, FaChartBar, FaGlobe } from 'react-icons/fa'; // Importing icons

const Main = () => {
  return (
    <div>
      {/* Welcome Section */}
      <div className='text-center my-10'>
          <h1 className='text-7xl font-bold' style={{ fontFamily: 'initial' }}>Welcome to The Daily Prophet !!!</h1>
          <p className='text-3xl mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>"Revolutionize Your Task and Time Management"</p>
        </div>
      {/* Image Banner */}
      <div className='flex flex-row w-full justify-center items-center'>
        <div className='w-2/4 flex justify-center items-center bg-background p-5'>
          <img src='https://ik.imagekit.io/s06oi31ye/Images/Organizing%20projects-pana.svg?updatedAt=1721923592378' alt='Banner' className='h-auto w-full object-cover' />
        </div>

        {/* Description Section */}
        <div className='mx-auto w-2/4 max-w-4xl text-center p-4' style={{ fontFamily: 'IM Fell English, serif' }}>
          <p className='text-2xl text-center gap-6 leading-loose'>
            In the fast-paced, demanding environment of today’s world, effective time management and seamless task organization
            are pivotal for achieving success. <strong>The Daily Prophet</strong> is your ultimate solution to mastering these challenges.
            Designed for students, professionals, and entrepreneurs, our application empowers you to manage your tasks, projects,
            and schedules with unparalleled ease and efficiency.
          </p>
        </div>
      </div>



      {/* Key Features Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
        <div className='text-center'>
          <FaTasks size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Comprehensive Task Management</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Effortlessly create, organize, and prioritize tasks.</p>
        </div>
        <div className='text-center'>
          <FaClock size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Smart Time Tracking</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Integrated time tracking helps you monitor the time spent on each task.</p>
        </div>
        <div className='text-center'>
          <FaUsers size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Collaborative Workspace</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Enhance teamwork with real-time task sharing and assignment features.</p>
        </div>
        <div className='text-center'>
          <FaBell size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Customizable Notifications</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Stay ahead with customizable notifications and reminders.</p>
        </div>
        <div className='text-center'>
          <FaChartBar size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Analytics and Reports</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Leverage detailed analytics and reports to gain insights into your productivity.</p>
        </div>
        <div className='text-center'>
          <FaGlobe size={50} className='mx-auto text-blue-500' />
          <h3 className='text-2xl font-bold mt-4' style={{ fontFamily: 'IM Fell English, serif' }}>Cross-Platform Accessibility</h3>
          <p className='mt-2' style={{ fontFamily: 'IM Fell English, serif' }}>Access your tasks and schedules from anywhere, at any time.</p>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className='text-center my-10 p-6 bg-primary/10' style={{ fontFamily: 'IM Fell English, serif' }}>
        <blockquote className='text-2xl text-foreground italic'>
          "The key is in not spending time, but in investing it." - Stephen R. Covey
        </blockquote>
      </div>

      {/* Call to Action */}
      <div className='text-center my-10'>
        <button className='bg-blue-500 text-background px-6 py-3 rounded-full text-xl' style={{ fontFamily: 'IM Fell English, serif' }}>
          Start Your Journey Towards Better Productivity Today!
        </button>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
