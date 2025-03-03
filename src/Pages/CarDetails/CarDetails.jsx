import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const car = useLoaderData();

    return (
        <div className="container mx-auto bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-xl p-6 w-full ">
                <img
                    src={car?.data?.image}
                    alt={car?.data?.name}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <h2 className="text-4xl font-extrabold text-gray-900 mt-4">{car?.data?.name}</h2>
                <p className="text-gray-600 mt-2 text-lg">{car?.data?.description}</p>
                <div className="mt-4">
                    <span className="font-semibold text-gray-900">Color:</span>
                    <span className="ml-2 px-3 py-1 rounded-full">{car?.data?.color}</span>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-gray-900">Electric:</span> 
                    <span className={`ml-2 px-3 py-1 rounded-full text-white ${car?.data?.isElectric ? 'bg-green-500' : 'bg-red-500'}`}>
                        {car?.data?.isElectric ? 'Yes' : 'No'}
                    </span>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-gray-900">Features:</span>
                    <ul className="list-none mt-2 grid grid-cols-2 gap-2 text-gray-700">
                        {car?.data?.features?.map((feature, index) => (
                            <li key={index} className="bg-gray-100 p-2 rounded-lg shadow-sm text-center">{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <span className="text-2xl font-semibold text-gray-900">${car?.data?.pricePerHour} / hour</span>
                    <button className="bg-[#FF6E00] cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-[#e66000] transition transform hover:scale-105 shadow-lg">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;