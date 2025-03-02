import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateUserRoute = ({ children }) => {
    const { user } = useGetContext();
    const location = useLocation();
    const form = location.pathname || "/"

    
    if (user && user?.role === 'user') {
        return children;
    }
    return <Navigate to={form} />;
};

export default PrivateUserRoute;