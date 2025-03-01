import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import ProfileDropdown from '../Dropdown/ProfileDropdown';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );



    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const navLinks = <>
        <li>
            <NavLink to="/" className="block py-2 px-4">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="block py-2 px-4">About</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="block py-2 px-4">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/signup" className="block py-2 px-4">Sign up</NavLink>
        </li>
        <li>
            <NavLink to="/signin" className={`${darkMode ? "inline-block md:inline" : ""} block py-2 px-4 bg-[#FF6E00] text-white rounded-3xl hover:bg-[#FF6E00A3]`}>Sign in</NavLink>
        </li>
        <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Light" : "Dark"}
            className="hidden md:block py-2 px-4 text-2xl cursor-pointer"
        >
            {darkMode ? "☀️" : "🌙"}
        </button>
         {/* profile dropdown md */}
         <ProfileDropdown size='md' />
    </>

    return (
        <nav className="p-4 shadow z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <span className='primary-text'>P</span>
                    <span>X</span>
                    <span><img src="./logo.png" alt="logo.." className='w-6' /></span>
                    <span>R</span>
                    <span className='primary-text'>ent</span>
                </Link>
                <div className='flex flex-row-reverse gap-3 justify-center items-center'>
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <span className='font-bold text-2xl primary-text'><AiOutlineClose /></span> : <span className='font-bold text-2xl primary-text'><TiThMenuOutline /></span>}
                    </button>
                    {/* profile dropdown sm */}
                    <ProfileDropdown size='sm' />

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        title={darkMode ? "Light" : "Dark"}
                        className="block md:hidden py-2 px-2 text-2xl cursor-pointer"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>
                <ul
                    className={`md:flex md:space-x-3 absolute md:static w-full left-0 md:w-auto 
                        ${darkMode ? 'bg-[#001933]' : "bg-white"}  
                        md:bg-transparent shadow-md md:shadow-none md:flex-row flex-col items-center z-50 p-4 md:p-0 transition-all ease-in-out duration-300 
                        ${isOpen ? "top-16" : "top-[-400px] "}`}
                >
                    {navLinks}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;