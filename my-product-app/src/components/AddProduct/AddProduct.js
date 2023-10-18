// src/AddProduct.js
import React, { useState } from 'react';

function AddProduct() {
  // Initialize state to store form data
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show an alert with the form data
    alert(JSON.stringify(formData, null, 2));
    // Log the form data to the console
    console.log(formData);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
