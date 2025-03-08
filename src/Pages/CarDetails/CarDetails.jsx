import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Components/Modals/BookingModal';
import useGetModalContext from '../../Hooks/UseContext/useGetModalContext';

const CarDetails = () => {
    const car = useLoaderData();
    const { bookingModal, setBookingModal, setBookingCar } = useGetModalContext();

    const handleModalShow = () => {
        setBookingCar(car?.data);
        setBookingModal(!bookingModal);
    }

    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-6">
            <BookingModal />

            {/* Left Side - Car Image */}
            <div className="w-full md:w-1/2">
                <img
                    src={car?.data?.image}
                    alt={car?.data?.name}
                    className="w-full h-80 md:h-[450px] object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side - Car Details */}
            <div className="w-full md:w-1/2 shadow-xl rounded-xl p-6">
                <h2 className="text-2xl md:text-4xl font-extrabold">{car?.data?.name}</h2>
                <p className="mt-2 md:text-lg text-gray-600">{car?.data?.description}</p>

                {/* Car Information */}
                <div className="mt-4 space-y-3">
                    <div>
                        <span className="font-semibold">Color:</span>
                        <span className="ml-2 px-3 py-1 rounded-full bg-gray-100 text-black">{car?.data?.color}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Electric:</span>
                        <span className={`ml-2 px-3 py-1 rounded-full text-white ${car?.data?.isElectric ? 'bg-green-500' : 'bg-red-500'}`}>
                            {car?.data?.isElectric ? 'Yes' : 'No'}
                        </span>
                    </div>
                </div>

                {/* Features List */}
                <div className="mt-4">
                    <span className="font-semibold">Features:</span>
                    <ul className="list-none mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                        {car?.data?.features?.map((feature, index) => (
                            <li key={index} className="p-2 rounded-lg shadow-md text-center">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing & Booking Button */}
                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="text-2xl font-semibold">
                        <span className="text-[#FF6E00]">${car?.data?.pricePerHour}</span>
                        <span className="text-sm"> / hour</span>
                    </span>

                    {car?.data?.status === 'unavailable' ? (
                        <span className="text-sm text-gray-500">Booked</span>
                    ) : (
                        <button
                            type='button'
                            onClick={handleModalShow}
                            className="bg-[#FF6E00] cursor-pointer px-6 py-3 rounded-lg hover:bg-[#e66000] transition transform hover:scale-105 shadow-lg"
                        >
                            Book Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
