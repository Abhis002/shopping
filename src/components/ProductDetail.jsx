import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';//axios for making HTTP requests

const ProductDetail = () => {
  const { id } = useParams();  //'id' parameter from the URL (like /product/1)
  const [product, setProduct] = useState(null);//store product data fetched from API
  const [error, setError] = useState(''); // error message

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)// API request to fetch product details by 'id'
      .then(res => setProduct(res.data)) // if okay
      .catch(() => setError('Product not found.'));// if get erroo
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;


  // Return JSX to render product details
  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
