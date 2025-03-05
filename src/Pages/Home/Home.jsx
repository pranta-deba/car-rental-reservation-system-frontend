import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';
import useGetCars from '../../Hooks/Fetched/useGetCars';
import Model from '../../Components/Models/model';
import CarDataProvider from '../../Providers/CarDataProvider';

const Home = () => {
    const [cars, refetch, loader] = useGetCars();

    const handleSort = (e) => {
        if (!e.target.value) {
            return;
        }
        refetch("", e.target.value);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        if (!e.target.search.value) {
            refetch();
            return;
        }
        refetch(e.target.search.value, "");
    }


    return (
        <div className='m-0 p-0'>
            <Model />
            <CarDataProvider>
                <Banner handleSearch={handleSearch} />
                <Cars cars={cars} carsLoader={loader} handleSort={handleSort} />
            </CarDataProvider>
            <Features />
        </div>
    );
};

export default Home;