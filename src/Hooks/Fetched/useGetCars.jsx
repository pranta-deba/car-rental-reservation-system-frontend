import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetCars = () => {
    const [cars, setCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('/cars');

    const refetch = (search = '', sort = '') => {
        if (search) {
            setUrl(`/cars?searchTerm=${search}`);
        } else if (sort) {
            setUrl(`/cars?sort=${sort}`);
        } else {
            setUrl('/cars');
        }
    }

    useEffect(() => {
        setLoader(true);
        AxiosInstance.get(url).then(res => {
            setCars(res.data.data);
            setLoader(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setLoader(false);
        })
    }, [url])

    return [cars, refetch, loader, error];
};

export default useGetCars;