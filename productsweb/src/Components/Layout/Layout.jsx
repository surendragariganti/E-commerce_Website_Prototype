import React from 'react';
import Header from '../Header/Header';
import './Layout.css'; // Optional, for layout-specific styling

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;
