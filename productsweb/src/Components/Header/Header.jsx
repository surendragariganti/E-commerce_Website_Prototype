import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-bar">
            <nav className="nav-container">
                <div className="nav-left">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-right">
                    <Link to="/products">View Products</Link>
                    <Link to="/add-product">Add Product</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
