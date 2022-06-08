import React from 'react';
import data from '../db.json';
import {Link} from 'react-router-dom';

function ProductList(){
  const DisplayData=data.map((info)=>{
          return(
            <div className='product-card'>
              <Link to={info.url}>
                <div class="thumbnail">
                  <img src={info.image} alt={info.title} />
                </div>
                <div className="product-details">
                  <div className="product-title">{info.title}</div>
                  <div className="product-description">{info.description}</div>
                  <div className="price">{info.price}</div>
                </div>
              </Link>
            </div>
          )
      }
  )

  return(
    <>
      {DisplayData}
    </>
  )
}

export default ProductList;