import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    // submenu's location
    const [location, setLocation] = useState({});

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const openSubmenu = (text,coord) => {
        setIsSubmenuOpen(true);
        setLocation(coord)
    }
    const closeSubmenu = () => setIsSubmenuOpen(false);



    return(
        <AppContext.Provider value={{
            isSubmenuOpen, isSidebarOpen,
            openSidebar, openSubmenu,
            closeSidebar, closeSubmenu,
            location
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}