import { Link } from "react-router-dom";
import useGetModalContext from "../../Hooks/UseContext/useGetModalContext";

const CarCard = ({ car }) => {
    const { name, pricePerHour, image, status, _id } = car || {};
    const { setBookingCar, bookingModal, setBookingModal } = useGetModalContext()

    const handleModalShow = () => {
        setBookingCar(car);
        setBookingModal(!bookingModal);
    }


    return (
        <div className="border-[0.5px] border-white max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 transform hover:scale-105 transition duration-300">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-3 space-y-3">
                <div className="space-y-2">
                    <h2 className="overflow-hidden h-10  md:h-14 text-sm md:text-xl font-semibold tracking-wide text-start">{name}</h2>
                    <div className="flex justify-between items-center">
                        {status === "unavailable" && <p className="text-[12px] md:text-base text-red-500">{status}</p>}
                        {status === "available" && <p className="text-[12px] md:text-base">{status}</p>}
                        <p className="">
                            <span className="text-[12px] md:text-base font-semibold primary-text">${pricePerHour}</span>
                            <span className="text-[8px] md:text-[10px]">/hour</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-2">
                    <button onClick={handleModalShow} type="button" className="w-full p-2 md:p-3 text-[10px] md:text-md md:font-semibold tracking-wide rounded-md bg-[#FF6E00] cursor-pointer hover:bg-[#FF6E00A3] transition-all">Book Now</button>
                    <Link to={`/car/${_id}`} className="w-full text-center p-2 md:p-3 text-[10px] md:text-md md:font-semibold tracking-wide rounded-md bg-[#FF6E00] cursor-pointer hover:bg-[#FF6E00A3] transition-all">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;