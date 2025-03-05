import React, { useContext } from 'react';
import { CarDataContext } from '../../Providers/CarDataProvider';

const useGetCarsContext = () => {
    const all = useContext(CarDataContext);
    return all
};

export default useGetCarsContext;