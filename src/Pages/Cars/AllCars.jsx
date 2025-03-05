import React, { useContext } from 'react';
import { CarDataContext } from '../../Providers/CarDataProvider';
import Loader from '../../Components/Loader/Loader';
import CarCard from '../../Components/Cards/CarCard';
import BookingModal from '../../Components/Modals/BookingModal';

const AllCars = () => {
    const { cars, loader: carsLoader, carsMeta, refetch, handleSearch, handleSort } = useContext(CarDataContext);
    const { page, totalPage } = carsMeta;
    console.log(carsMeta)

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPage) {
            refetch("", "", newPage);
        }
    };


    return (
        <div className='container mx-auto p-4 space-y-4 mb-4'>
            <div className='flex flex-row-reverse w-full justify-between items-center gap-3'>
                {/* Search Input */}
                <form onSubmit={handleSearch} className="flex items-center w-full max-w-lg bg-white rounded-full p-1 md:p-2 shadow-md">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for cars..."
                        className="flex-grow text-sm md:text-base px-2 md:px-4 py-1 md:py-2 rounded-l-full focus:outline-none text-black"
                    />
                    <button type='submit' className="bg-[#FF6E00] hover:bg-[#FF6E00A3] text-sm md:text-base cursor-pointer text-white px-2 md:px-6 py-2 rounded-r-full md:font-semibold">Search</button>
                </form>
                <div>
                    <select onChange={handleSort} className="border-2 border-[#FF6E00] text-sm md:text-base p-1 md:p-2 rounded cursor-pointer bg-transparent">
                        <option value="" className="bg-yellow-200 text-black">Sort by </option>
                        <option value="name" className='bg-yellow-200 text-black'>Name</option>
                        <option value="pricePerHour" className='bg-yellow-200 text-black'>Price</option>
                    </select>
                </div>
            </div>


            {carsLoader && <div className='min-h-[400px] flex justify-center items-center'>
                <Loader size={'4xl'} />
            </div>}

            {
                !carsLoader && cars.length === 0 && <div className='w-full min-h-[300px] flex flex-col justify-center items-center text-gray-600'>
                    <AiOutlineCar size={50} color="#FF6E00" />
                    <p className='text-lg font-semibold text-[#FF6E00] mt-2'>No cars available to show</p>
                </div>
            }

            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center'>
                {!carsLoader && cars.length > 0 && cars.map((car) => (
                    <CarCard key={car._id} car={car} />
                ))}
            </div>

            {!carsLoader && cars.length > 0 && <div className="bg-white p-4 flex items-center flex-wrap justify-center">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex">
                        {/* Previous Button */}
                        <li>
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                className={`h-10 px-5 text-[#FF6E00] transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                            </button>
                        </li>

                        {/* Page Numbers */}
                        {[...Array(totalPage)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <li key={pageNumber}>
                                    <button
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`h-10 px-5 transition-colors duration-150 focus:shadow-outline ${pageNumber === page ? 'bg-[#FF6E00] text-white border border-[#FF6E00]' : 'text-[#FF6E00] hover:bg-green-100 cursor-pointer'}`}
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            );
                        })}

                        {/* Next Button */}
                        <li>
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPage}
                                className={`h-10 px-5 text-[#FF6E00] transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-green-100  ${page === totalPage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            }

            <BookingModal />
        </div>
    );
};

export default AllCars;