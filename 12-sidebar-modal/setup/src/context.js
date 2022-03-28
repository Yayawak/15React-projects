import React, { useState, useContext } from 'react'

const AppContext = React.createContext();
// wrap whole App into AppProvider
const AppProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return <AppContext.Provider value={
        // sent object with no defalut value
        {
        isModalOpen, isSidebarOpen, 
        openModal, openSidebar,
        closeModal, closeSidebar

        }
    }>
        {children}
    </AppContext.Provider>
}


// custom hook, reusable function like useFetch(url)-hook.
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};