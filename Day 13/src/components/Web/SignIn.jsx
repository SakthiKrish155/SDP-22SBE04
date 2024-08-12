
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, KeyRound, Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authService } from '@/service/auth';

const SignIn = () => {
    const navigate = useNavigate();

    const checkRedirect = async () => {
        if (authService.getToken() != null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                if (userRole === "Admin") {
                    navigate('/admin/content');
                } else if (userRole === 'PROJECTMANAGER') {
                    navigate('/manager/content');
                } else if (userRole === 'TEAMMEMBER') {
                    navigate('/user/content');
                } else {
                    toast.error("Something went wrong")
                }
            }
        }
    }
    useEffect(() => {
        checkRedirect();
    }, []);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const email = useRef(null)
    const password = useRef(null)
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await authService.SignIn(email.current.value, password.current.value);
            if (res.status === 200) {
                authService.setToken(res.data);
                toast.success("Hello again!!");
                setTimeout(() => {
                    checkRedirect();
                }, 3000);
            } else {
                toast.error('Invalid email or password');
            }
        } catch (error) {
            console.error('Login Error:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                toast.error(`Login failed: ${error.response.data.message || 'An error occurred'}`);
            } else if (error.request) {
                console.error('Request data:', error.request);
                toast.error('No response from server');
            } else {
                console.error('Error message:', error.message);
                toast.error('Error in setting up request');
            }
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <ToastContainer />
            <div className='border border-slate-400 rounded-md p-8 shadow-lg'>
                <h1 className='text-4xl text-black-bold text-center mb-6'>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex justify-between relative my-9'>
                        <User className='mr-5' />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            ref={email}
                        />
                    </div>
                    <div className='flex justify-between relative my-8'>
                        <KeyRound />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            ref={password}
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-0"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <label htmlFor='Remember Me'>Remember Me</label>
                        </div>
                        <Link to=''><span className='text-blue-500'>Forgot Password?</span></Link>
                    </div>
                    <button className="w-full h-9 mb-6 text-[18px] mt-6 rounded-full text-foreground hover:bg-primary hover:text-lg transition duration-75 border-2 border-slate-500 border-opacity-25" type="submit">
                        Login
                    </button>
                    <div>
                        <span className='flex justify-center items-center'>Yet to register?<Link to="/signUp" className='text-blue-500 ml-2'>Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
