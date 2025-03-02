import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import Footer from '../../Components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
    const { userLoader } = useGetContext();

    if (userLoader) return <div className='flex justify-center items-center min-h-screen w-full'><Loader size={"4xl"} /></div>;


    return (
        <>
            <Navbar />
            <main className='m-0 p-0'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;