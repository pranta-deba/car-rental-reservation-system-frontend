import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useGetContext from '../../Hooks/UseContext/useGetContext';

const LoggedRoute = ({ children }) => {
    const { user } = useGetContext();
    const location = useLocation();
    if (!user) {
        return <Navigate to="/signIn" state={location.pathname} />;
    }

    return children;
};

export default LoggedRoute;