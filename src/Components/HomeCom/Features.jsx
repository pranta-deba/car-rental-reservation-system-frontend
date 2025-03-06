import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FaRoad, FaTrophy } from 'react-icons/fa';
import { MdBookmarkAdded } from 'react-icons/md';
import { CiLollipop } from 'react-icons/ci';

const Features = () => {
    return (
        <div className='container mx-auto'>
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <div className='flex justify-center items-center flex-col md:flex-row gap-4'>
                <div>
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <FaTrophy />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>First Class services</h2>
                            <p className='text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <FaRoad />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>24/7 road assistance</h2>
                            <p className='text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1/2'>
                    <img className='' src="./png5.webp" alt="Image....." />
                </div>
                <div>
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <MdBookmarkAdded />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>Quality at Minimum</h2>
                            <p className='text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate">
                            <CiLollipop />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold md:text-xl'>Free Pick-Up & Drop-Off</h2>
                            <p className='text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;