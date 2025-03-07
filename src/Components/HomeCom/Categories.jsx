import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Categories = () => {
    return (
        <div className='container mx-auto my-8'>
            <SectionHeader titleSplit={true} title='Vehicle Categories'>
                Exploring Innovation: Cutting-Edge Vehicles of Tomorrow
            </SectionHeader>

            <div>
                {/* Custom Navigation Buttons at the Top */}
                <div className="flex justify-between items-center mb-4 px-8">
                    <button className="swiper-button-prev-custom bg-[#FF6E00] py-2 px-5 text-white rounded-2xl cursor-pointer transition">
                        <FaChevronLeft size={24} />
                    </button>
                    <button className="swiper-button-next-custom bg-[#FF6E00] py-2 px-5 text-white rounded-2xl cursor-pointer transition">
                        <FaChevronRight size={24} />
                    </button>
                </div>
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
                    className="pb-10"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-xl font-semibold">
                                <figure>
                                    <img className='h-52 object-cover object-center' src="https://i.ibb.co.com/wZwktjCR/1972-chevrolet-chevelle-malibu.jpg" alt="image" />
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;