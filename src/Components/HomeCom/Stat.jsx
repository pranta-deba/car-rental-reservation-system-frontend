import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaBuilding, FaCar } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import CountUp from 'react-countup';

const Stat = () => {
    return (
        <div className={`bg-[url("./fact-bg.jpg")] bg-center bg-cover bg-fixed my-8 text-white`}>
            <div className='stat-bg'>
                <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 lg:gap-40 md:px-10  py-10 md:py-32'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <figure className='text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                            <AiFillLike />
                        </figure>
                        <h1 className='text-2xl md:text-3xl'><CountUp delay={2} end={829} /> +</h1>
                        <p className='md:text-xl'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <figure className='text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                            <FaCar />
                        </figure>
                        <h1 className='text-2xl md:text-3xl'><CountUp delay={2} end={56} /> +</h1>
                        <p className='md:text-xl'>Number of Cars</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <figure className='text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                            <FaBuilding />
                        </figure>
                        <h1 className='text-2xl md:text-3xl'><CountUp delay={2} end={127} /> +</h1>
                        <p className='md:text-xl'>Car Center</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <figure className='text-xl md:text-4xl bg-[#FF6E00] p-4 md:p-8 border-animate'>
                            <IoIosTime />
                        </figure>
                        <h1 className='text-2xl md:text-3xl'><CountUp delay={2} end={589} /> +</h1>
                        <p className='md:text-xl'>Total kilometers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;