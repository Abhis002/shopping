import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {error && <p>{error}</p>}
      <div className="grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
