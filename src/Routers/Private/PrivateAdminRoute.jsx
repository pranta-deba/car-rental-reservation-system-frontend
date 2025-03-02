import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Navigate } from 'react-router-dom';

const PrivateAdminRoute = ({ children }) => {
    const { user } = useGetContext();
    if (user && user?.role === 'admin') {
        return children;
    }
    return <Navigate to="/" />;
};

export default PrivateAdminRoute;