import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetCars = () => {
    const [cars, setCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState({ url: '/cars', trigger: false });

    const refetch = (search = '', sort = '') => {
        if (search) {
            setUrl({ url: `/cars?searchTerm=${search}`, trigger: !url.trigger });
        } else if (sort) {
            setUrl({ url: `/cars?sort=${sort}`, trigger: !url.trigger });
        } else {
            setUrl({ url: '/cars', trigger: !url.trigger });
        }
    }

    useEffect(() => {
        setLoader(true);
        AxiosInstance.get(url.url).then(res => {
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