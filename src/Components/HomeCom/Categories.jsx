import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const Categories = ({ cars, carsLoader }) => {

    return (
        <div className='container mx-auto my-8'>
            <SectionHeader titleSplit={true} title='Vehicle Categories'>
                Exploring Innovation: Cutting-Edge Vehicles of Tomorrow
            </SectionHeader>

            {carsLoader && <div className='min-h-[400px] flex justify-center items-center'>
                <Loader size={'4xl'} />
            </div>}

            <div>
                {/* Custom Navigation Buttons at the Top */}
                <div className="flex justify-between items-center mb-4 px-2 md:px-8">
                    <button className="swiper-button-prev-custom bg-[#FF6E00] hover:bg-[#FF6E00A4] transition-all py-2 px-5 text-white rounded-2xl cursor-pointer">
                        <FaChevronLeft size={24} />
                    </button>
                    <button className="swiper-button-next-custom bg-[#FF6E00] hover:bg-[#FF6E00A4] transition-all py-2 px-5 text-white rounded-2xl cursor-pointer">
                        <FaChevronRight size={24} />
                    </button>
                </div>
                <div className='mb-6'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            1024: { slidesPerView: 5 },
                            768: { slidesPerView: 3 },
                            480: { slidesPerView: 2 },
                            320: { slidesPerView: 1 }
                        }}
                        style={{ paddingBottom: "20px" }}
                    >
                        {cars.map((item) => (
                            item.status === "available" && <SwiperSlide key={item._id}>
                                <div className="rounded-lg shadow-md hover:shadow-2xl p-4 space-y-2 transition-all">
                                    <figure className='h-36 w-full overflow-hidden'>
                                        <Link to={`/car/${item._id}`}>
                                            <img className='hover:scale-110 transition-all w-full h-full object-cover object-center rounded-2xl' src={item?.image} alt={item?.name} /></Link>
                                    </figure>
                                    <div className='space-y-2'>
                                        <h1>{item?.name}</h1>
                                        <p className='text-[#FF6E00] font-semibold'>${item?.pricePerHour}</p>
                                        <Link to={`/car/${item._id}`} className='block text-center w-full bg-[#FF6E00] hover:bg-[#FF6E00A4] transition-all p-2 rounded-4xl text-white cursor-pointer text-base'>Details</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Categories;