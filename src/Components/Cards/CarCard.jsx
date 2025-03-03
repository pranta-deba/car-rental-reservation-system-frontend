import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    const { name, pricePerHour, image, status, _id } = car || {};
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-3 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-sm md:text-xl font-semibold tracking-wide text-center md:text-start">{name}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-[12px] md:text-base">{status}</p>
                        <p className="">
                            <span className="text-[12px] md:text-base font-semibold primary-text">${pricePerHour}</span>
                            <span className="text-[8px] md:text-[10px]">/hour</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-2">
                    <button type="button" className="w-full p-2 md:p-3 text-sm md:text-md md:font-semibold tracking-wide rounded-md primary-bg cursor-pointer">Book Now</button>
                    <Link to={`/car/${_id}`} className="w-full text-center p-2 md:p-3 text-sm md:text-md md:font-semibold tracking-wide rounded-md primary-bg cursor-pointer">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;