import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import ReactMarkdown from "react-markdown";

const Single = ({posts}) => {
  let params = useParams();
  const thisProduct = posts.find(post => post.id == params.id)
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`.${thisProduct.body}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

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
          <div className='single-body'>
            <ReactMarkdown children={content} />
          </div>
        </div>
      
      </div>
    </>
  
  );
}

export default Single;