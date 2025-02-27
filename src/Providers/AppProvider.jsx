/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState('light');



    const appValue = {
        user,
        setUser,
        theme,
        setTheme
    }

    return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>
};

export default AppProvider;