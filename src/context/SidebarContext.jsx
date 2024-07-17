import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    const openSidebar = () => {
        setisSidebarOpen(true);
    };
    
    const closeSidebar = () => {
        setisSidebarOpen(false);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};