import React, { useContext } from 'react';
import Banner from '../../Components/HomeCom/Banner';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';
import { CarDataContext } from '../../Providers/CarDataProvider';
import BookingModal from '../../Components/Modals/BookingModal';
import Stat from '../../Components/HomeCom/Stat';
import Categories from '../../Components/HomeCom/Categories';

const Home = () => {
    const { cars, loader, handleSearch, handleSort } = useContext(CarDataContext);

    return (
        <div className='m-0 p-0'>
            <BookingModal />
            <Banner handleSearch={handleSearch} />
            <Cars cars={cars} carsLoader={loader} handleSort={handleSort} />
            <Features />
            <Stat />
            <Categories />
        </div>
    );
};

export default Home;