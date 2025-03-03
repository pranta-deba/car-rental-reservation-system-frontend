import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';
import useGetCars from '../../Hooks/Fetched/useGetCars';

const Home = () => {
    const [cars, refetch, loader] = useGetCars('price');

    const handleSort = (e) => {
        if (!e.target.value) {
            return;
        }
        refetch("", e.target.value);
    }


    return (
        <div className='m-0 p-0'>
            <Banner />
            <button onClick={() => refetch("bmw", "price")}>click</button>
            <Cars cars={cars} carsLoader={loader} handleSort={handleSort} />
            <Features />
        </div>
    );
};

export default Home;