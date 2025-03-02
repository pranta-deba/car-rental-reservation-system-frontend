import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseCircle } from "react-icons/io5";
import uploadImageToImgBB from '../../Utils/uploadImage';


const CreateCar = () => {
    const [features, setFeatures] = useState([]);
    const featureRef = useRef();
    const [uploadImage, setUploadImage] = useState('');

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
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadImage(imageUrl);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const color = e.target.color.value;
        const electric = e.target.isElectric.value;
        const pricePerHour = e.target.pricePerHour.value;
        const image = e.target.image.files[0];

        if (!name || !description || !color || !pricePerHour || !image || !electric || features.length === 0) {
            toast.error('Please fill in all required fields');
            return;
        }
        const isElectric = electric === "yes" ? true : electric === "no" ? false : null
        if (isElectric === null) {
            toast.error('Please select a valid electric option');
            return;
        }

        try {
            // image upload
            const imgURL = await uploadImageToImgBB(image);
            if (!imgURL) {
                toast.error('Failed to upload image');
                return;
            }

            const car = {
                name,
                description,
                color,
                isElectric,
                pricePerHour,
                image: imgURL,
                features
            };

            console.log(car)

        } catch (error) {
            toast.error('An error occurred while creating the car!');
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
                                <input required id="name" type="text" placeholder="Name" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="color" className="text-sm">Car Color</label>
                                <input required id="color" type="text" placeholder="Color" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="pricePerHour" className="text-sm">Price Per Hour</label>
                                <input required id="pricePerHour" type="number" placeholder="Price" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="description" className="text-sm">Price Per Hour</label>
                                <textarea required name="description" id="description" placeholder="Description" className="p-2 w-full rounded-md  border-none bg-[#E78B401F] focus:outline-[#E78B40]"></textarea>
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
                                <select required id="isElectric" name='isElectric' className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40]">
                                    <option value={-1}>Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-sm">Image</label>
                                <div className="flex items-center space-x-2">
                                    <img src={uploadImage ? uploadImage : 'png.png'} alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full" />
                                    <input onChange={handleImageChange} required type="file" id='image' name='image' className="w-full px-4 py-3 rounded-md border-none bg-[#E78B401F] focus:outline-[#E78B40] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='text-center'>
                        <button type='submit' className="overflow-hidden p-3 text-center rounded-sm bg-[#FF7C03] cursor-pointer hover:bg-[#FF7C03A3] uppercase">
                            Add Car
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CreateCar;