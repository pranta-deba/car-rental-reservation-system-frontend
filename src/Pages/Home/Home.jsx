import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';
import useGetCars from '../../Hooks/Fetched/useGetCars';

const Home = () => {
    const [cars, , loader] = useGetCars();

    
    return (
        <div className='m-0 p-0'>
            <Banner />
            <Cars cars={cars} carsLoader={loader} />
            <Features />
        </div>
    );
};

export default Home;