import React, { useEffect, useState } from 'react';
import AxiosInstanceWithToken from '../../Config/AxiosInstanceWithToken';

const useGetBookedCarByAdmin = () => {
    const [bookedCars, setBookedCars] = useState([]);
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(true);
    const [error, setError] = useState(null);

    const refetch = () => {
        setReload(!reload);
    }

    useEffect(() => {
        AxiosInstanceWithToken.get('/bookings/booked').then(res => {
            setBookedCars(res.data.data);
            setLoader(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setLoader(false);
        })
    }, [reload])

    return [bookedCars, loader, refetch, error]
};

export default useGetBookedCarByAdmin;