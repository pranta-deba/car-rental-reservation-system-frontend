import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import useGetContext from '../../Hooks/UseContext/useGetContext';
import Loader from '../../Components/Loader/Loader';
import AxiosInstance from '../../Config/AxiosInstance';
import { setToken } from '../../Utils/token.config';

const SignIn = () => {
    const { googleSignIn, setUser } = useGetContext();
    const navigate = useNavigate();
    const [signInLoader, setSignInLoader] = useState(false);

    const handleSubmit = async (e) => {
        setSignInLoader(true)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!email || !password) {
            toast.error('Please fill in all fields');
            setSignInLoader(false)
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            setSignInLoader(false)
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            setSignInLoader(false)
            return;
        }
        const userData = { email, password }

        try {
            const { data } = await AxiosInstance.post('/auth/signin', userData);
            if (data?.success) {
                setToken(data?.token);
                setUser(data?.data);
                toast.success('Logged in successfully!');
                setSignInLoader(false)
                navigate('/');
            }
        } catch (error) {
            if (!error?.success) {
                toast.error(error?.response?.data?.message || "Error signing!");
                setSignInLoader(false)
                return;
            }
            toast.error('Something went wrong!');
            setSignInLoader(false)
            return;
        }
    };


    const handleGoogleLogin = async () => {
        googleSignIn()
            .then(() => {
                navigate('/')
            }).catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className='min-h-screen bg-[url("./png1.webp")] bg-no-repeat bg-cover'>
            <div className='container mx-auto'>
                <div className='flex gap-4 items-center p-6'>
                    <Link to={-1}><IoMdArrowRoundBack className='primary-text' size={25} /></Link>
                    <Link to={"/"}><IoMdHome className='primary-text' size={25} /></Link>
                </div>
                <div className='h-full w-full flex flex-row-reverse justify-center items-center gap-4'>
                    <div className='hidden md:flex'>
                        <figure>
                            <img src="./png2.webp" alt="" />
                        </figure>
                    </div>
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 md:shadow-2xl">
                        <h1 className="text-2xl font-bold text-center primary-text uppercase">Sign In</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                                <input type="text" name="email" id="email" placeholder="example@gmail.com" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                                <div className="flex justify-end text-xs dark:text-gray-600">
                                    <a rel="noopener noreferrer">Forgot Password?</a>
                                </div>
                            </div>
                            <button disabled={signInLoader} type='submit' className="overflow-hidden block w-full p-3 text-center rounded-sm bg-[#FF7C03] cursor-pointer hover:bg-[#FF7C03A3] uppercase">
                                {signInLoader ? <Loader size={"xl"} /> : "Sign in"}
                            </button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1 mb-3">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <div className="flex justify-center items-center gap-3 px-3 text-sm dark:text-gray-600">
                                Login with <button className='cursor-pointer' onClick={handleGoogleLogin}><FcGoogle size={26} /></button>
                            </div>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                            <Link rel="noopener noreferrer" to='/signup' className="underline dark:text-gray-800 text-[#FF7C03] font-bold">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;