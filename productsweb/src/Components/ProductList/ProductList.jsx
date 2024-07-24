import React, { useEffect, useState } from 'react';
import ProductService from '../../api';
import './ProductList.css';
import UpdateProductModal from '../UpdateProduct/UpdateProductModal.jsx';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); // To handle potential errors
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const fetchProducts = async () => {
        try {
            const response = await ProductService.getAllProducts();
            if (response.data.length === 0) {
                setError("No products available.");
            } else {
                setProducts(response.data);
            }
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleUpdate = async (updatedProduct) => {
        try {
            await ProductService.updateProduct(updatedProduct.id, updatedProduct);
            setShowModal(false);
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ProductService.deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            setError("Failed to delete product.");
        }
    };

    const openUpdateModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeUpdateModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    if (products.length === 0) {
        return (
            <div className="no-products">
                <p>No products available</p>
            </div>
        );
    }

    return (
        <div className="product-list-container">
            {error ? (
                <div className="no-products">{error}</div>
            ) : (
                <>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => openUpdateModal(product)}>Update</button>
                                        <button className="delete" onClick={() => handleDelete(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
                )
            }
            <UpdateProductModal 
                show={showModal} 
                handleClose={closeUpdateModal} 
                product={selectedProduct} 
                handleUpdate={handleUpdate} 
            />
        </div>
    );
};

export default ProductList;
