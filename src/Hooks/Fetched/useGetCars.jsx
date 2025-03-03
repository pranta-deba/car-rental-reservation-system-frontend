import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetCars = (sort) => {
    const [cars, setCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('/cars');

    const refetch = (search = '', sort = '') => {
        console.log({ search, sort })
        if (search) {
            console.log(`/cars?searchTerm=${search}`)
        } else if (sort) {
            console.log(`/cars?sort=${sort}`)
        } else {
            console.log('/cars')
        }
        // if (search) {
        //     setUrl(`/cars?searchTerm=${search}`);
        //     setReload(!reload);
        // } else if (sort) {
        //     setUrl(`/cars?sort=${sort}`);
        //     setReload(!reload);
        // } else {
        //     setUrl('/cars');
        //     setReload(!reload);
        // }
    }
    console.log(sort)

    useEffect(() => {
        setLoader(true);
        AxiosInstance.get('/cars').then(res => {
            setCars(res.data.data);
            setLoader(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setLoader(false);
        })
    }, [reload])

    return [cars, refetch, loader, error];
};

export default useGetCars;