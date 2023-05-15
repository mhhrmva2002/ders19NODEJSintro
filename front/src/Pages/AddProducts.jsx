import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: '',
    price: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8080/products', product)
      .then(() => {
        window.location.href = '/';
      })
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="productName" value={product.productName} onChange={handleChange} />
        </div>
        <div>
          <label>Brand Name:</label>
          <input type="text" name="brandName" value={product.brandName} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label>Stock Count:</label>
          <input type="number" name="stockCount" value={product.stockCount} onChange={handleChange} />
        </div>
        <div>
          <label>Is Discounted:</label>
          <input type="checkbox" name="isDiscounted" checked={product.isDiscounted} onChange={handleChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>

  );
};

export default AddProduct;
