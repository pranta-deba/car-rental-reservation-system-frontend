import React, { useContext } from 'react';
import Banner from '../../Components/HomeCom/Banner';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';
import Model from '../../Components/Models/model';
import { CarDataContext } from '../../Providers/CarDataProvider';

const Home = () => {
    const { cars, loader, handleSearch, handleSort } = useContext(CarDataContext);

    return (
        <div className='m-0 p-0'>
            <Model />
            <Banner handleSearch={handleSearch} />
            <Cars cars={cars} carsLoader={loader} handleSort={handleSort} />
            <Features />
        </div>
    );
};

export default Home;