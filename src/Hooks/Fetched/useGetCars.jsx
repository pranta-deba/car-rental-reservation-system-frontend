import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetCars = () => {
    const [cars, setCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);
    const [carsMeta, setCarsMeta] = useState({});
    const [url, setUrl] = useState({ url: '/cars', trigger: false });

    const refetch = (search = '', sort = '', page = 1) => {
        if (search) {
            setUrl({ url: `/cars?searchTerm=${search}`, trigger: !url.trigger });
        } else if (sort) {
            setUrl({ url: `/cars?sort=${sort}`, trigger: !url.trigger });
        } else if (page >= 1) {
            setUrl({ url: `/cars?page=${page}`, trigger: !url.trigger });
        } else {
            setUrl({ url: '/cars', trigger: !url.trigger });
        }
    }

    useEffect(() => {
        setLoader(true);
        AxiosInstance.get(url.url).then(res => {
            setCars(res.data.data);
            setCarsMeta(res.data.meta)
            setLoader(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setLoader(false);
        })
    }, [url])

    return [cars, refetch, loader, carsMeta, error];
};

export default useGetCars;