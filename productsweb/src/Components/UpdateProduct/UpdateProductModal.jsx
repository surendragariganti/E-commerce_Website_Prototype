// UpdateProductModal.jsx
import React, { useState, useEffect } from 'react';
import './UpdateProductModal.css';

const UpdateProductModal = ({ show, handleClose, product, handleUpdate }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setQuantity(product.quantity);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, name, description, price: parseFloat(price), quantity: parseInt(quantity) };
        handleUpdate(updatedProduct);
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Update Product</h2>
                    <button className="close-button" onClick={handleClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required step="0.01" />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="submit-button">Update Product</button>
                        <button type="button" className="close-button" onClick={handleClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProductModal;
