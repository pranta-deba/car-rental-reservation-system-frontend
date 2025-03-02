import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Navigate } from 'react-router-dom';

const PrivateUserRoute = ({ children }) => {
    const { user } = useGetContext();
    if (user && user?.role === 'user') {
        return children;
    }
    return <Navigate to="/" />;
};

export default PrivateUserRoute;