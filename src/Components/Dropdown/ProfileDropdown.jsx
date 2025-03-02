import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { removeToken } from '../../Utils/token.config';

const ProfileDropdown = ({ size, darkMode }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { LogOut, setUser } = useGetContext();


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogOut = async () => {
        LogOut();
        setUser(null);
        removeToken();
    };
    return (
        <div
            className={`${size === 'sm' ? "flex md:hidden" : ""} ${size === 'md' ? "hidden md:flex" : ""} relative`}
            ref={dropdownRef}
        >
            <button
                className="w-10 h-10 text-start relative primary-bg p-[1px] overflow-hidden rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <img src="./user.png" alt="User" className="object-cover rounded-full" />
            </button>

            {open && (
                <div className={`flex shadow-lg border border-[#FF6E00] rounded-bl-2xl rounded-br-2xl rounded-tl-2xl 
                ${darkMode ? "bg-[#001933]" : "bg-white"} 
                w-[200px] absolute flex-col gap-3 p-4 top-12 right-2 z-[60]`}>
                    <Link
                        to="/profile"
                        className="hover:bg-[#FF6E00] hover:text-white p-2 rounded-md"
                        onClick={() => setOpen(false)}
                    >
                        Profile
                    </Link>
                    <Link
                        className="hover:bg-[#FF6E00] hover:text-white p-2 rounded-md"
                        onClick={() => {
                            setOpen(false);
                            handleLogOut();
                        }}
                    >
                        Log out
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;