import React from 'react';
import useGetCars from '../../Hooks/Fetched/useGetCars';

const Cars = () => {
    const [cars, , loader] = useGetCars();
    console.log(cars, loader)
    return (
        <div>

        </div>
    );
};

export default Cars;