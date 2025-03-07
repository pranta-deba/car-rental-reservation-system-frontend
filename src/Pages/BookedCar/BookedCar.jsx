import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import useGetBookedCarByAdmin from '../../Hooks/Fetched/useGetBookedCarByAdmin';
import Loader from '../../Components/Loader/Loader';
import AxiosInstanceWithToken from '../../Config/AxiosInstanceWithToken';
import toast from 'react-hot-toast';
import { TbLoader3 } from "react-icons/tb";
import Swal from 'sweetalert2';

const BookedCar = () => {
    const [bookedCars, loader, refetch] = useGetBookedCarByAdmin();
    const [bookedLoader, setBookedLoader] = useState({ id: "", loader: false });

    const handleReturnedCar = async (booking) => {
        setBookedLoader({ id: booking._id, loader: true });

        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this booking!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF6E00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, returned it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const bookingId = booking._id;
                const endTime = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
                try {
                    const { data } = await AxiosInstanceWithToken.put('/bookings', { bookingId, endTime });
                    if (data?.success) {
                        refetch()
                        toast.success(data.message);
                        setBookedLoader({ id: booking.id, loader: false });
                    }
                } catch (error) {
                    if (!error?.response?.data?.success) {
                        toast.error(error?.response?.data?.message || "Something went wrong!");
                        setBookedLoader({ id: booking.id, loader: false });
                    }
                }
            } else {
                setBookedLoader({ id: booking.id, loader: false });
            }
        });

    }

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
                    <table className="w-full  shadow-md rounded-lg overflow-hidden text-sm md:text-base">
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
                                <tr key={booking?._id} className="border-b hover:bg-gray-300 hover:text-black transition-all">
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
                                    <td className="p-3">${booking?.totalCost ? Math.round(booking?.totalCost) : booking?.totalCost}</td>
                                    <td className="p-3">
                                        {booking?.car.status === "unavailable" ? <span className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-lg">
                                            {booking?.car.status}
                                        </span> : <span className="px-2 py-1 text-sm font-medium text-white bg-green-500 rounded-lg">
                                            {booking?.car.status}
                                        </span>}
                                    </td>
                                    <td className="p-3 text-center">
                                        {
                                            booking.car.status === 'unavailable' ? <button disabled={bookedLoader.loader} onClick={() => handleReturnedCar(booking)} className="bg-[#FF6E00] hover:bg-orange-700 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center">
                                                {bookedLoader.loader && bookedLoader.id === booking._id ? <TbLoader3 className='animate-spin' /> : "Return Car"}
                                            </button> : "Returned"
                                        }
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
