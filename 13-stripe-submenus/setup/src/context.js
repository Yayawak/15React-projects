import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    // submenu's location
    const [location, setLocation] = useState({});
    const [page,setPage] = useState({
        page: '', links: []
    });

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => {setIsSidebarOpen(false);}
    const openSubmenu = (pageName,coord) => {
        const _page = sublinks.find((link) => link.page === pageName);
        setPage(_page);
        setIsSubmenuOpen(true);
        setLocation(coord);

    }
    const closeSubmenu = () => setIsSubmenuOpen(false);



    return(
        <AppContext.Provider value={{
            isSubmenuOpen, isSidebarOpen,
            openSidebar, openSubmenu,
            closeSidebar, closeSubmenu,
            location, page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}