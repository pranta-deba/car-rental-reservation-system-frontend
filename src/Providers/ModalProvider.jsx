/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import AxiosInstanceWithToken from '../Config/AxiosInstanceWithToken';


export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
    const [bookingLoader, setBookingLoader] = useState(false);
    const [bookingModal, setBookingModal] = useState(false);
    const [bookingCar, setBookingCar] = useState('');

    // booking car by user
    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        setBookingLoader(true);
        const today = new Date().toISOString().split("T")[0];
        const date = e.target.date.value;
        const startTime = e.target.startTime.value;

        if (!date || !startTime) {
            toast.error('Please fill in all fields');
            setBookingLoader(false);
            return;
        }

        if (date < today) {
            toast.error('Booking for past dates is not allowed. Please select today or a future date.');
            setBookingLoader(false);
            return;
        }
        if (bookingCar?.status === 'unavailable') {
            toast.error('This car already booked!. Please select another car.');
            setBookingLoader(false);
            return;
        }

        const bookingData = {
            car: bookingCar._id,
            date,
            startTime
        }

        try {

            const { data } = await AxiosInstanceWithToken.post("/bookings", bookingData);
            if (data?.success) {
                toast.success(data.message);
                setBookingModal(false);
                setBookingLoader(false);
            }
        } catch (error) {
            if (!error?.response?.data?.success) {
                toast.error('Something wrong!. Please try again later.');
                setBookingLoader(false);
            }
        }

    }



    const value = {
        bookingLoader,
        setBookingLoader,
        bookingModal,
        setBookingModal,
        handleBookingSubmit,
        bookingCar,
        setBookingCar
    }
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
};

export default ModalProvider;