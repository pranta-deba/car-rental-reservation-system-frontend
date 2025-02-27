import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden z-10">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./car.mp4"
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000006b] flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow">YoungGun Solution</h1>
                <p className="text-lg md:text-2xl mt-4">Welcome to the Ultimate Car Rental Experience</p>

                {/* Search Input */}
                <div className="mt-6 flex items-center w-full max-w-lg bg-white rounded-full p-2 shadow-md">
                    <input
                        type="text"
                        placeholder="Search for cars..."
                        className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-black"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-full font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;