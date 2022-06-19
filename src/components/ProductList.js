import React from 'react';
import posts from '../db.json';
import {Link, NavLink, Route} from 'react-router-dom';
import ProductCard from './ProductCard';

export const ProductList = () =>{
    return(

      <div>
          {posts.map(post => (
            <ProductCard 
              id={post.id}
              title={post.title} 
              image={post.image}
              description={post.description}
              price={post.price}
            />
          ))}
      </div>
    )

}

export default ProductList;
