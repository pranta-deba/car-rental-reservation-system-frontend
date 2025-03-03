import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Loader from '../Loader/Loader';
import CarCard from '../Cards/CarCard';

const Cars = ({ cars, carsLoader }) => {

    console.log(cars, carsLoader)
    return (
        <div className='container mx-auto'>
            <SectionHeader titleSplit={true} title='Feeatured Vehicles'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>

            {carsLoader && <div className='min-h-[400px] flex justify-center items-center'>
                <Loader size={'4xl'} />
            </div>}

            <div className='w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center'>
                {!carsLoader && cars.length > 0 && cars.map((car, index) => (
                    <CarCard key={index + 1} car={car}/>
                ))}
            </div>

        </div>
    );
};

export default Cars;