import axios from 'axios';

const API_URL = 'http://localhost:3310/api/products';

class ProductService {
    getAllProducts() {
        return axios.get(API_URL);
    }

    getProductById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    addProduct(product) {
        return axios.post(API_URL, product, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    updateProduct(id, product) {
        return axios.put(`${API_URL}/${id}`, product);
    }

    deleteProduct(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new ProductService();
