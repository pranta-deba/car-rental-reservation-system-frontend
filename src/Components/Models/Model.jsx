import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Link } from 'react-router-dom';

const Model = () => {
    const { user } = useGetContext();
    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                {/* Close Button */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                    viewBox="0 0 320.591 320.591"
                >
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                </svg>

                <div className="my-6 text-center space-y-3">
                    <img
                        className="max-h-36 w-full object-cover rounded"
                        src="https://i.ibb.co.com/Cs0PNmWK/EAS-0026-2048x2048.webp"
                        alt="Car"
                    />
                    {!user ? (
                        // If user does not exist
                        <div className='space-y-3'>
                            <h4 className="text-gray-800 text-lg font-semibold mt-4">
                                Please sign in to book this car.
                            </h4>
                            <Link
                                to={"/signin"}
                                className="mt-4 px-4 py-2 rounded-lg text-white text-sm bg-[#FF6E00] hover:bg-[#e65c00] active:bg-[#d45500]"
                            >
                                Sign in
                            </Link>
                        </div>
                    ) : user.role === "admin" ? (
                        <div className='space-y-3'>
                            <h4 className="text-gray-800 text-lg font-semibold">
                                Admins are not permitted to book this car!
                            </h4>
                        </div>
                    ) : (
                        <div>
                            <h4 className="text-gray-800 text-lg font-semibold">
                                Select Booking Details
                            </h4>
                            <form className="mt-4 space-y-3">
                                {/* Date */}
                                <input
                                    type="date"
                                    name='date'
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6E00]"
                                    min={new Date().toISOString().split("T")[0]}
                                />

                                {/* Start Time */}
                                <input
                                    type="time"
                                    name='startTime'
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6E00]"
                                    step="3600"
                                />
                            </form>
                            <button
                                type="button"
                                className="mt-6 px-4 py-2 rounded-lg text-white text-sm bg-[#FF6E00] hover:bg-[#e65c00] active:bg-[#d45500]"
                            >
                                Book Now
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Model;