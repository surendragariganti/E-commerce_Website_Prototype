import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout'; // Ensure the path is correct
import HomePage from './Components/Home/HomePage';
import ProductList from './Components/ProductList/ProductList';
import AddProduct from './Components/AddProduct/AddProduct';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
