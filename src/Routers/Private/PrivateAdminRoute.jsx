import React from 'react';
import useGetContext from '../../Hooks/UseContext/useGetContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAdminRoute = ({ children }) => {
    const { user, userLoader } = useGetContext();
    const location = useLocation();
    const form = location.pathname || "/"

    if (!userLoader && !user?.role === 'admin') {
        return <Navigate to={form} />;
    }
    return children;
};

export default PrivateAdminRoute;