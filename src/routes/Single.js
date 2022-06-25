import React from 'react'
import {Link, useParams} from 'react-router-dom';
import posts from '../db.json';


function Single() {
  let params = useParams();
  const thisProduct = posts.find(post => post.id == params.id)

  console.log(thisProduct)
  return (
    <>
      <h1>Post {params.id}</h1>
      <p>{thisProduct.title}</p>
    </>
  
  );
}

export default Single;