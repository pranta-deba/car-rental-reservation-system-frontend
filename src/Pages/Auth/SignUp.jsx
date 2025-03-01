import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";

const SignUp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        if (!name || !email || !password || !phone || !address) {
            toast.error('Please fill in all fields');
            return;
        }
    };


    const handleGoogleLogin = async () => {
        // Google OAuth Login Code Here
        toast.success('Google OAuth Login Code Here');
    };



    return (
        <div className='p-0 m-0 min-h-screen bg-[url("./png1.webp")] bg-no-repeat bg-cover scale-x-[-1]'>
            <div className='container mx-auto'>
                <div className='flex gap-4 items-center p-6 scale-x-[-1]'>
                    <Link to={-1}><IoMdArrowRoundBack className='text-[#E78B40] md:text-white' size={25} /></Link>
                    <Link to={"/"}><IoMdHome className='text-[#E78B40] md:text-white' size={25} /></Link>
                </div>
                <div className='h-full w-full flex flex-row-reverse justify-center items-center gap-4'>
                    <div className='hidden md:flex'>
                        <figure>
                            <img src="./png2.webp" alt="" />
                        </figure>
                    </div>
                    <div className="w-full max-w-lg p-8  rounded-xl dark:bg-gray-50 dark:text-gray-800 md:shadow-2xl scale-x-[-1]">
                        <h1 className="text-2xl font-bold text-center primary-text uppercase">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                                <input type="text" name="email" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className='w-full flex gap-3'>
                                <div className="flex-1 text-sm">
                                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                                    <input type="text" name="email" id="email" placeholder="example@gmail.com" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                                </div>
                                <div className="flex-1 text-sm">
                                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                                    <div className="flex justify-end text-xs dark:text-gray-600">
                                        <a rel="noopener noreferrer">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="phone" className="block dark:text-gray-600">Phone No.</label>
                                <input type="text" name="phone" id="phone" placeholder="Phone No." className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="address" className="block dark:text-gray-600">Address</label>
                                <input type="text" name="address" id="address" placeholder="Address" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <button type='submit' className="block w-full p-3 text-center rounded-sm bg-[#FF7C03] cursor-pointer hover:bg-[#FF7C03A3] uppercase">Sign up</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1 mb-3">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <div className="flex justify-center items-center gap-3 px-3 text-sm dark:text-gray-600">
                                Login with <button onClick={handleGoogleLogin} className='cursor-pointer'><FcGoogle size={26} /></button>
                            </div>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <div className="text-xs text-center sm:px-6 dark:text-gray-600">Already account?
                            <Link to='/signin' className="underline dark:text-gray-800 text-[#FF7C03] font-bold">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;