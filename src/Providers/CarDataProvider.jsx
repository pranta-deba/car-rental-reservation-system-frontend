/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import useGetCars from '../Hooks/Fetched/useGetCars';
import Swal from 'sweetalert2';
import AxiosInstanceWithToken from '../Config/AxiosInstanceWithToken';
import toast from 'react-hot-toast';
import useGetContext from '../Hooks/UseContext/useGetContext';

export const CarDataContext = createContext(null);
const CarDataProvider = ({ children }) => {
    const [cars, refetch, loader, carsMeta, error] = useGetCars();
    const [deleteLoader, setDeleteLoader] = useState(false);
    const { user } = useGetContext();

    const handleSort = (e) => {
        if (!e.target.value) {
            return;
        }
        refetch("", e.target.value, 1);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        if (!e.target.search.value) {
            refetch();
            return;
        }
        refetch(e.target.search.value, "", 1);
    }

    const handleDeleteCar = async (id) => {
        setDeleteLoader(true);

        if (!user) {
            toast.error('You must be logged in to delete a car');
            setDeleteLoader(false)
            return;
        }
        if (!user.role === 'admin') {
            toast.error('Only admins can delete cars');
            setDeleteLoader(false)
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this car!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF6E00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await AxiosInstanceWithToken.delete(`/cars/${id}`);
                    if (data.success) {
                        refetch("", "", 0);
                        toast.success(data?.message || 'Car deleted successfully');
                        setDeleteLoader(false)
                    }
                } catch (error) {
                    if (!error?.response?.data?.success) {
                        toast.error(error?.response?.data?.message || "Something went wrong!");
                        setDeleteLoader(false)
                    }
                }
            } else {
                setDeleteLoader(false);
            }
        });
    }


    const value = { cars, refetch, loader, carsMeta, error, handleSort, handleSearch, handleDeleteCar, setDeleteLoader, deleteLoader }

    return <CarDataContext.Provider value={value}>
        {
            children
        }
    </CarDataContext.Provider>
};

export default CarDataProvider;