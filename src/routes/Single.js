import React from 'react'
import {useParams} from 'react-router-dom';
import posts from '../db.json';


function Single() {
  let params = useParams();
  const thisProduct = posts.find(post => post.id === params.id)

  console.log(thisProduct)
  return (
    <>
      <div className='container single'>
        
        <div className='single-image'>
          <img src={`.${thisProduct.image}`} alt={thisProduct.title} />
        </div>
        
        <div className='single-content'>
          <h1>{thisProduct.title}</h1>
          <div className='single-meta'>
            <p>{thisProduct.date_added}</p>
          </div>
          <p>{thisProduct.description}</p>
        </div>
      
      </div>
    </>
  
  );
}

export default Single;