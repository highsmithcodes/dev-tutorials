import React from 'react';
import posts from '../db.json';
import {Link, NavLink, Route} from 'react-router-dom';
import Single from '../routes/Single';

export const ProductList = (props) =>{
  const testPosts = posts;

    return(

      <div className='test'>
        {testPosts.map(post => (
          <div className='product-card' key={post.id}>
            <Link to={`/products/${post.id}`}>
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
    )

}

export default ProductList;
