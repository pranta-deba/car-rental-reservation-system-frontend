import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import Footer from '../../Components/Shared/Footer';
import { Outlet } from 'react-router-dom';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import Loader from '../../Components/Loader/Loader';
import ModalProvider from '../../Providers/ModalProvider';

const Root = () => {
    const { userLoader } = useGetContext();

    if (userLoader) return (<div className='overflow-hidden flex justify-center items-center min-h-screen w-full'>
        <Loader size={"4xl"} />
    </div>)


    return (
        <>
            <Navbar />
            <main className='m-0 p-0 min-h-[calc(100vh-351.987px)]'>
                <ModalProvider>
                    <Outlet />
                </ModalProvider>
            </main>
            <Footer />
        </>
    );
};

export default Root;