import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseCircle } from 'react-icons/io5';
import { TbLoader3 } from 'react-icons/tb';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AxiosInstanceWithToken from '../../Config/AxiosInstanceWithToken';
import { CarDataContext } from '../../Providers/CarDataProvider';

const UpdateCar = () => {
    const { data: car } = useLoaderData();
    const { refetch } = useContext(CarDataContext);
    const [features, setFeatures] = useState(car?.features || []);
    const featureRef = useRef();
    const [updateLoader, setUpdateLoader] = useState(false);
    const navigate = useNavigate();

    const handleDeleteFeatures = (idx) => {
        setFeatures(features.filter((_, i) => i !== idx));
    }
    const handleAddFeature = () => {
        const newFeature = featureRef.current.value.trim();
        if (newFeature) {
            setFeatures([...features, newFeature]);
            featureRef.current.value = '';
        }
    }

    const handleSubmit = async (e) => {
        setUpdateLoader(true);
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const color = e.target.color.value;
        const electric = e.target.isElectric.value;
        const pricePerHour = e.target.pricePerHour.value;
        if (!name || !description || !color || !pricePerHour || !electric || features.length === 0) {
            toast.error('Please fill in all required fields');
            setUpdateLoader(false);
            return;
        }
        const isElectric = electric === "yes" ? true : electric === "no" ? false : null
        if (isElectric === null) {
            toast.error('Please select a valid electric option');
            setUpdateLoader(false);
            return;
        }

        const updatedData = { name, description, isElectric, color, pricePerHour: Number(pricePerHour), features };

        try {
            const { data } = await AxiosInstanceWithToken.put(`/cars/${car._id}`, updatedData);
            if (data?.success) {
                toast.success(data.message || 'Car updated successfully');
                setUpdateLoader(false);
                refetch("", "", 0);
                navigate("/cars", { replace: true });
            }
        } catch (error) {
            if (!error?.response?.data?.success) {
                toast.error(error?.response?.data?.message || 'Something went wrong!');
                setUpdateLoader(false);
            }
        }
    }

    return (
        <div>
            <section className="p-6">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-8">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Basic Inormation</p>
                            <p className="text-xs">Provide the essential details about the car, including its name, color, pricing, and description.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Car Full Name</label>
                                <input defaultValue={car?.name} required id="name" type="text" placeholder="Name" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="color" className="text-sm">Car Color</label>
                                <input defaultValue={car?.color} name='color' required id="color" type="text" placeholder="Color" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="pricePerHour" className="text-sm">Price Per Hour</label>
                                <input required defaultValue={car?.pricePerHour} name='pricePerHour' id="pricePerHour" type="number" placeholder="Price" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <textarea defaultValue={car?.description} required name="description" id="description" placeholder="Description" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]"></textarea>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-4 gap-6 px-6 py-4 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Other</p>
                            <p className="text-xs">Highlight additional information about the car, including special features and images.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full relative">
                                <div className='flex flex-wrap gap-3'>
                                    {
                                        features.length > 0 && features.map((feature, idx) => (
                                            <div id='featuresList' className='relative px-2 py-1 rounded-sm bg-amber-200' key={idx + 1}>
                                                <span className='text-sm'>
                                                    {feature}
                                                </span>
                                                <button id='featuresBtn' type='button' className='absolute -top-4 -right-4 rounded-full p-1 cursor-pointer'>
                                                    <IoCloseCircle size={25} onClick={() => handleDeleteFeatures(idx)} />
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                                <label htmlFor="features" className="text-sm">Features</label>
                                <input ref={featureRef} id="features" type="text" placeholder="feature" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                                <button onClick={handleAddFeature} type='button' className='absolute right-2 bottom-1 text-2xl bg-[#E78B40] px-2 rounded-md cursor-pointer text-white'>+</button>
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="isElectric" className="text-sm">Electric</label>
                                <select defaultValue={car?.isElectric ? "yes" : "no"} required id="isElectric" name='isElectric' className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]">
                                    <option value={-1}>Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                    <div className='text-center'>
                        <button disabled={updateLoader} type='submit' className="overflow-hidden p-3 text-center rounded-sm bg-[#FF7C03] cursor-pointer hover:bg-[#FF7C03A3] uppercase">
                            <span className='flex items-center justify-center gap-2'>
                                Update Car {updateLoader && <TbLoader3 className='animate-spin' />}
                            </span>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateCar;