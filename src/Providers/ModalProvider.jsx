/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';


export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
    const [bookingLoader, setBookingLoader] = useState(false);
    const [bookingModal, setBookingModal] = useState(false);

    // booking car by user
    const handleBookingSubmit = (e) => {
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


        console.log({ date, today })
        setBookingLoader(false);

    }



    const value = { bookingLoader, setBookingLoader, bookingModal, setBookingModal, handleBookingSubmit }
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
};

export default ModalProvider;