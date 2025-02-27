import React, { useContext } from 'react';
import { AppContext } from '../../Providers/AppProvider';

const useGetContext = () => {
    const all = useContext(AppContext);
    return all
};

export default useGetContext;