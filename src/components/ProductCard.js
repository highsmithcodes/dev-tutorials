import React from 'react';
import {Link, NavLink, Route} from 'react-router-dom';

export const ProductCard = ({title, description, price, image, id}) =>{
    
    return( 
        <div className='product-card' key={id}>
        <Link 
        to={{
            pathname: `/products/${id}`,
            id: {id},
            title: {title},
            price: {price},
            description: {description}
          }}
        >
            <div className='thumbnail'>
            <img src={image} alt={title} />
            </div>
            <div className="product-details">
                <div className="product-title" >{title}</div>
                <div className="product-description">{description}</div>
                <div className="price">{price}</div>
            </div>
            </Link>
        </div>
    )

}

export default ProductCard;
