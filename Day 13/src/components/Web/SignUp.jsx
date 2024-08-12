import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, KeyRound, Eye, EyeOff, Users, Phone, Calendar } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpManager, SignUpMember } from '@/service/api'; // Adjust import based on your file structure
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const [registerdata, setRegisterdata] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
        role: 'Team Member'
    });

    const handleChange = (e) => {
        setRegisterdata({ ...registerdata, [e.target.id]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Register Data:', registerdata);

        if (!registerdata.role) {
            toast.error('Please select a role');
            return;
        }

        try {
            if (registerdata.role === "Project Manager") {
                const res = await SignUpManager(
                    registerdata.name,
                    registerdata.email,
                    registerdata.contact,
                    registerdata.password,
                    "PROJECTMANAGER"
                );
                console.log('Project Manager Response:', res.data);
                axios.post()
                if (res.data === "Project Manager registered successfully") {
                    toast.success('Registeration successfull');
                } else {
                    toast.error('Registration failed');
                }
            } else if (registerdata.role === "Team Member") {
                const res = await SignUpMember(
                    registerdata.name,
                    registerdata.email,
                    registerdata.contact,
                    registerdata.password,
                    "TEAMMEMBER"
                );
                console.log('Team Member Response:', res.data);
                if (res.data === "Team Member registered successfully") {
                    toast.success('Registeration successfull');
                } else {
                    toast.error('Registration failed');
                }
            }
            setTimeout(() => {
                navigate('/signIn');
            }, 5000);
        } catch (error) {
            console.error('Registration Error:', error);
            toast.error('An error occurred');
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <ToastContainer />
            <div className='border border-slate-400 rounded-md p-8 shadow-lg'>
                <h1 className='text-4xl text-black-bold text-center mb-6'>Sign Up</h1>
                <form onSubmit={handleRegister}>
                    <div className='flex justify-between relative my-8'>
                        <User className='mr-5' />
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex justify-between relative my-8'>
                        <User className='mr-5' />
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex justify-between relative my-8'>
                        <KeyRound />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-0"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                    </div>
                    <div className='flex justify-between relative my-8'>
                        <Phone className='mr-5' />
                        <input
                            type="text"
                            id="contact"
                            placeholder="Your Contact"
                            className='text-xl cursor-default placeholder:text-base block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Uncomment and adjust the date input if needed */}
                    {/* <div className='flex justify-between relative my-8'>
                        <Calendar className='mr-5' />
                        <input
                            type="date"
                            id="dob"
                            placeholder="Your Date Of Birth"
                            className='text-xl cursor-default placeholder:text-opacity-25 block w-72 py-2.3 px-0 text-foreground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.dob}
                            onChange={handleChange}
                            required
                        />
                    </div> */}

                    <div className='flex flex-row justify-between relative my-8 items-center'>
                        <Users />
                        <select
                            id="role"
                            className='text-xl cursor-default placeholder:text-background block w-72 py-2.3 px-0 text-foreground bg-background border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-foreground focus:border-foreground peer'
                            value={registerdata.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="Team Member">Team Member</option>
                            <option value="Project Manager">Project Manager</option>
                        </select>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor='rememberMe'>Remember Me</label>
                        </div>
                        <Link to=''><span className='text-primary'>Forgot Password?</span></Link>
                    </div>
                    <button className="w-full h-9 mb-6 text-[18px] mt-6 rounded-full text-foreground hover:bg-primary hover:text-lg transition duration-75 border-2 border-slate-400 border-opacity-25" type="submit">
                        Register
                    </button>
                    <div>
                        <span className='flex justify-center items-center'>Already registered?<Link to="/signIn" className='text-primary ml-2'>SignIn</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
