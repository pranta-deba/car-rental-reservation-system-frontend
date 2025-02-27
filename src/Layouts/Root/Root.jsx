import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import Footer from '../../Components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;