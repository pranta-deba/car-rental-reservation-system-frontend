/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react';
import useGetCars from '../Hooks/Fetched/useGetCars';

export const CarDataContext = createContext(null);
const CarDataProvider = ({ children }) => {
    const [cars, refetch, loader, error] = useGetCars();

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


    const value = { cars, refetch, loader, error, handleSort, handleSearch }

    return <CarDataContext.Provider value={value}>
        {
            children
        }
    </CarDataContext.Provider>
};

export default CarDataProvider;