import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import useGetBookedCarByAdmin from '../../Hooks/Fetched/useGetBookedCarByAdmin';
import Loader from '../../Components/Loader/Loader';

const BookedCar = () => {
    const [bookedCars, loader] = useGetBookedCarByAdmin();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-[#FF6E00]">Booked Cars</h1>

            {loader ? (
                <div className='min-h-[300px] w-full flex justify-center items-center'>
                    <Loader size={'4xl'} />
                </div>
            ) : bookedCars.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-600">
                    <FaExclamationTriangle className="text-4xl mb-2" />
                    <p className="text-lg">No booked cars available.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
                        <thead className="bg-[#FF6E00] text-white">
                            <tr>
                                <th className="p-3 text-left">Car</th>
                                <th className="p-3 text-left">User</th>
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-left">Time</th>
                                <th className="p-3 text-left">Total Cost</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedCars.map((booking) => (
                                <tr key={booking?._id} className="border-b hover:bg-gray-100">
                                    <td className="p-3 flex items-center">
                                        <img src={booking?.car.image} alt={booking?.car.name} className="w-16 h-16 object-cover rounded-lg mr-3" />
                                        <div>
                                            <p className="font-semibold">{booking?.car.name}</p>
                                            <p className="text-gray-600">{booking?.car.color}</p>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-semibold">{booking?.user.name}</p>
                                        <p className="text-gray-600 text-sm">{booking?.user.email}</p>
                                    </td>
                                    <td className="p-3">{new Date(booking?.date).toLocaleDateString()}</td>
                                    <td className="p-3">
                                        {booking?.startTime} - {booking?.endTime || 'Ongoing'}
                                    </td>
                                    <td className="p-3">${booking?.totalCost}</td>
                                    <td className="p-3">
                                        <span className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-lg">
                                            {booking?.car.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center">
                                        <button className="bg-[#FF6E00] hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                                            Return Car
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookedCar;
