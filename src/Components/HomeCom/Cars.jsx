import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Loader from '../Loader/Loader';
import CarCard from '../Cards/CarCard';
import { AiOutlineCar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Cars = ({ cars, carsLoader, handleSort }) => {

    return (
        <div className='container mx-auto'>
            <SectionHeader titleSplit={true} title='Featured Vehicles'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <div className='flex justify-end px-4'>
                {/* price sorting */}
                <select onChange={handleSort} className="border-2 border-[#FF6E00] text-sm md:text-base p-1 md:p-2 rounded cursor-pointer bg-transparent">
                    <option value="" className="bg-yellow-200 text-black">Sort by </option>
                    <option value="name" className='bg-yellow-200 text-black'>Name</option>
                    <option value="pricePerHour" className='bg-yellow-200 text-black'>Price</option>
                </select>
            </div>

            {carsLoader && <div className='min-h-[400px] flex justify-center items-center'>
                <Loader size={'4xl'} />
            </div>}

            {
                !carsLoader && cars.length === 0 && <div className='w-full min-h-[300px] flex flex-col justify-center items-center text-gray-600'>
                    <AiOutlineCar size={50} color="#FF6E00" />
                    <p className='text-lg font-semibold text-[#FF6E00] mt-2'>No cars available to show</p>
                </div>
            }


            <div className='w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center'>
                {!carsLoader && cars.length > 0 && cars.map((car, index) => (
                    <CarCard key={index + 1} car={car} />
                ))}
            </div>

            <div className='text-center'>
                <button className='bg-[#FF6E00] text-white px-4 py-2 rounded-sm'>
                    <Link to={"/cars"}>See All</Link>
                </button>
            </div>

        </div>
    );
};

export default Cars;