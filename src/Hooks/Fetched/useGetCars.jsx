import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetCars = () => {
    const [cars, setCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(true);
    const [error, setError] = useState(null);

    const refetch = () => {
        setReload(!reload);
    }

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