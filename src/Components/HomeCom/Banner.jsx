import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden z-10 m-0 p-0">
            {/* Background Video */}
            <video
                className="absolute inset-0 top-0 left-0 w-full h-full object-cover blur-xs"
                src="./car.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow">Fast, <span className='primary-text'>Powerful</span>, Reliable</h1>
                <p className="text-lg md:text-2xl mt-4">Find the perfect car for your journey — <br /> Book now and hit the road with confidence!</p>

                {/* Search Input */}
                <div className="mt-6 flex items-center w-full max-w-lg bg-white rounded-full p-2 shadow-md">
                    <input
                        type="text"
                        placeholder="Search for cars..."
                        className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-black"
                    />
                    <button className="bg-[#FF6E00] hover:bg-[#FF6E00A3] text-white px-6 py-2 rounded-r-full font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;