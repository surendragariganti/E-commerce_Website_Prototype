import React, { useState } from 'react';
import ProductService from '../../api'; 
import './AddProduct.css'; 
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const floatValueOfPrice = parseFloat(price).toFixed(2)
            var product = {
                name: name,
                description: description,
                price: floatValueOfPrice,
                quantity: parseInt(quantity)
            }
            await ProductService.addProduct(product);
            alert('Product added successfully');
            navigate('/products');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />

                <button type="submit" onClick={(e) => handleSubmit(e)}>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
