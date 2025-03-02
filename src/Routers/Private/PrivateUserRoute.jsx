import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateUserRoute = ({ children }) => {
    const { user, userLoader } = useGetContext();
    const location = useLocation();
    const form = location.pathname || "/"


    if (!userLoader && !user?.role === 'user') {
        return <Navigate to={form} />;
    }
    return children;
};

export default PrivateUserRoute;