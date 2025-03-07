import React from 'react';
import img1 from "../../assets/about-img1.jpg"
import img2 from "../../assets/about-img-1.jpg"
import { LuTarget } from 'react-icons/lu';
import { PiTargetBold } from 'react-icons/pi';
import author from "../../assets/author.png";

const About = () => {
    return (
        <div className='container mx-auto mt-4 md:mt-10 mb-20'>
            <div className='flex flex-col md:flex-row justify-center gap-8 px-4'>
                <div className='md:w-1/2 space-y-8'>
                    <div className='space-y-2'>
                        <h1 className="text-3xl md:text-5xl font-bold drop-shadow">
                            <span>PXrent </span>
                            <span className="primary-text">About</span></h1>
                        <p className="text-sm md:text-base text-gray-500">At PXrent, we are dedicated to making car rentals seamless, affordable, and hassle-free. Whether you need a vehicle for a business trip, a weekend getaway, or everyday use, we offer a wide selection of well-maintained cars to suit your needs.</p>
                    </div>
                    <div className='flex gap-3 my-8 justify-center items-center text-center'>
                        <div className='w-full shadow-xl p-4 flex flex-col justify-center items-center gap-3 rounded-3xl'>
                            <figure className='w-[50px] md:w-[100px] text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                                <LuTarget />
                            </figure>
                            <h1 className='text-xl'>Our Vision</h1>
                            <p className='text-sm text-gray-500'>To become the leading digital car rental platform, offering effortless, eco-friendly.</p>
                        </div>
                        <div className='w-full shadow-xl p-4 flex flex-col justify-center items-center gap-3 rounded-3xl'>
                            <figure className='w-[50px] md:w-[100px] text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                                <PiTargetBold />
                            </figure>
                            <h1 className='text-xl'>Our Mision</h1>
                            <p className='text-sm text-gray-500'>Provide an intuitive and efficient platform that allows customers to book their ideal car.</p>
                        </div>
                    </div>
                    <p className='border-l-4 border-[#FF6E00] p-2 text-gray-600'>Our platform is designed to provide a smooth booking experience, ensuring that you get the right car at the right time—without unnecessary complications.
                        With a focus on convenience, affordability, and reliability, we are revolutionizing the car rental industry by integrating technology, security, and customer-first service.
                    </p>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10'>
                        <p className='text-white w-full  bg-gray-800 p-8 flex flex-col justify-center items-center'><span className='text-3xl font-bold'>10</span><span>Years Of Experience</span></p>
                        <ul className='px-6 md:px-0 w-full list-["✅"]'>
                            <li>Years of Industry Experience</li>
                            <li>Wide Range of Vehicles</li>
                            <li>YSeamless Booking Process</li>
                            <li>Affordable & Transparent Pricing</li>
                            <li>Safe & Well-Maintained Cars</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6'>
                        <figure className='border-4 border-[#FF6E00] w-[80px] h-[80px] rounded-full overflow-hidden'>
                            <img src={author} alt="" className='object-center object-cover' />
                        </figure>
                        <div>
                            <h1 className='text-xl font-semibold'>Pritom Deb</h1>
                            <p className='text-gray-500'>Author</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <figure className=''>
                        <img className='md:h-full w-full object-center object-cover rounded-3xl' src={img1} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default About;