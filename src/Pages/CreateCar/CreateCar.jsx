import React, { useRef, useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";


const CreateCar = () => {
    const [features, setFeatures] = useState([]);
    const featureRef = useRef();

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

    const handleImageChange = (e) => {

    }

    return (
        <div>
            <section className="p-6">
                <form className="container flex flex-col mx-auto space-y-8">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Basic Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Car Full Name</label>
                                <input id="name" type="text" placeholder="Name" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="color" className="text-sm">Car Color</label>
                                <input id="color" type="text" placeholder="Color" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="pricePerHour" className="text-sm">Price Per Hour</label>
                                <input id="pricePerHour" type="number" placeholder="Price" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="description" className="text-sm">Price Per Hour</label>
                                <textarea name="description" id="description" placeholder="Description" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]"></textarea>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-4 gap-6 px-6 py-4 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Other</p>
                            <p className="text-xs">Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full relative">
                                <div className='flex flex-wrap gap-3'>
                                    {
                                        features.length > -1 && features.map((feature, idx) => (
                                            <div className='relative px-2 py-1 rounded-sm bg-amber-200' key={idx + 1}>
                                                <span className='text-sm'>
                                                    {feature}
                                                </span>
                                                <button type='button' className='absolute -top-4 -right-4 rounded-full p-1 cursor-pointer'>
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
                                <select id="isElectric" name='isElectric' className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]">
                                    <option value={-1}>Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src="" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full" />
                                    <input onChange={handleImageChange} type="file" className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default CreateCar;