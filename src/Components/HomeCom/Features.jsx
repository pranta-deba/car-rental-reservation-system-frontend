import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FaRoad, FaTrophy } from 'react-icons/fa';
import { MdBookmarkAdded } from 'react-icons/md';
import { CiLollipop } from 'react-icons/ci';

const Features = () => {
    return (
        <div className='container mx-auto overflow-hidden'>
            <SectionHeader titleSplit={true} title='PXrent Features'>
            At PXRent, we ensure a seamless and premium car rental experience with top-tier services designed for your convenience and satisfaction.
            </SectionHeader>
            <div className='flex justify-center items-center flex-col md:flex-row gap-4'>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <FaTrophy />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>First Class services</h2>
                            <p className='text-sm md:text-base text-gray-500'>Enjoy a hassle-free car rental experience with our well-maintained, high-quality vehicles.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <FaRoad />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>24/7 road assistance</h2>
                            <p className='text-sm md:text-base text-gray-500'>Drive with confidence knowing that our round-the-clock road assistance is just a call away.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-up" data-aos-duration="1000" className='flex-1/2'>
                    <img className='' src="./png5.webp" alt="Image....." />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <MdBookmarkAdded />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>Quality at Minimum</h2>
                            <p className='text-sm md:text-base text-gray-500'>We believe in providing top-notch vehicles at affordable prices.</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <CiLollipop />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>Free Pick-Up & Drop-Off</h2>
                            <p className='text-sm md:text-base text-gray-500'>Save time with our complimentary pick-up and drop-off service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;