import React from 'react';
import {Link} from 'react-router-dom';

const Products = ({posts}) => (
  <div className="page container">
    <h1>Products</h1>
    <div className='sub-head'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    <div className='product-grid'>
      {posts.map(post => ( 
          <div className='product-card' key={post.id}>
            <Link  to={`/product/${post.id}`}>
              <div className='thumbnail'>
              <img src={post.image} alt={post.title} />
              </div>
              <div className="product-details">
                  <div className="product-title" >{post.title}</div>
                  <div className="product-description">{post.description}</div>
                  <div className="price">{post.price}</div>
              </div>
            </Link>
          </div>
      ))} 
    </div>
  </div>
);

export default Products;