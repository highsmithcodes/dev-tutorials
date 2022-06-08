import React from 'react';
import ProductList from '../components/ProductList';

const Products = () => (
  <div className="page">
    <h1>Products</h1>
    <div className='sub-head'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    <div className='product-grid'>
      <ProductList />
    </div>
  </div>
);

export default Products;