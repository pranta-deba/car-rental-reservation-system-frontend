import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../Config/AxiosInstance';

const useGetBookingCarByUser = () => {
    const [bookings, setBookings] = useState([]);
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(true);
    const [error, setError] = useState(null);

    const refetch = () => {
        setReload(!reload);
    }

    useEffect(() => {
        AxiosInstance.get('/bookings').then(res => {
            setBookings(res.data.data);
            setLoader(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setLoader(false);
        })
    }, [reload])

    return [bookings, loader, refetch, error]
};

export default useGetBookingCarByUser;