import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FaRoad, FaTrophy } from 'react-icons/fa';

const Features = () => {
    return (
        <div className='container mx-auto'>
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <div className='flex justify-center items-center gap-4'>
                <div>
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-4xl bg-[#FF6E00] p-8 border-animate">
                            <FaTrophy />
                        </figure>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-xl'>First Class services</h2>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-3 gap-4'>
                        <figure className="text-4xl bg-[#FF6E00] p-8 border-animate">
                            <FaRoad />
                        </figure>
                        <div>
                            <h2>24/7 road assistance</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1/2'>
                    <img className='' src="./png5.webp" alt="Image....." />
                </div>
                <div>
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-4xl bg-[#FF6E00] p-8 border-animate">
                            <FaTrophy />
                        </figure>
                        <div>
                            <h2>First Class services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-row-reverse text-end justify-center p-3 gap-4'>
                        <figure className="text-4xl bg-[#FF6E00] p-8 border-animate">
                            <FaRoad />
                        </figure>
                        <div>
                            <h2>24/7 road assistance</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;