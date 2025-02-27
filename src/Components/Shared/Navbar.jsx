import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import useGetContext from '../../Hooks/UseContext/UseGetContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const all = useGetContext();
    console.log(all)

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
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <span className='font-bold text-2xl primary-text'><AiOutlineClose /></span> : <span className='font-bold text-2xl primary-text'><TiThMenuOutline /></span>}
                </button>
                <ul
                    className={`md:flex md:space-x-6 absolute md:static w-full left-0 md:w-auto bg-white shadow-md md:shadow-none md:flex-row flex-col items-center z-50 p-4 md:p-0 transition-all ease-in-out duration-300 ${isOpen ? "top-16" : "top-[-400px] "}`}
                >
                    {navLinks}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;