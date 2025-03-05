import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import useGetBookingCarByUser from '../../Hooks/Fetched/useGetBookingCarByUser';
import Loader from '../../Components/Loader/Loader';

const Booking = () => {
    const [bookings, loader] = useGetBookingCarByUser();

    return (
        <div className="container mx-auto mt-3 p-4">
            <h1 className="text-2xl font-bold mb-4 text-[#FF6E00]">Your Bookings</h1>
            {loader ? (
                <div className='min-h-[300px] w-full flex justify-center items-center'>
                    <Loader size={'4xl'} />
                </div>
            ) : bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-600">
                    <FaExclamationTriangle className="text-4xl mb-2" />
                    <p className="text-lg">No bookings found.</p>
                </div>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="border border-gray-300 p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-bold mb-2">{booking.car.name}</h2>
                            <p className="text-gray-600 mb-2">{new Date(booking.date).toLocaleDateString()} || {booking.startTime} - {booking.endTime || 'Ongoing'}</p>
                            <p className="text-gray-600 mb-2">Total Cost: ${booking.totalCost}</p>
                            <p className="text-gray-600 mb-2">Address: {booking.user.address}</p>
                            <img src={booking.car.image} alt={booking.car.name} className="rounded-lg mt-2 h-56 w-full object-cover object-center" style={{ maxWidth: '100%' }} />
                            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none cursor-pointer">Cancel</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Booking;