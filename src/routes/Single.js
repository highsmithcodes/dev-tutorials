import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import {Helmet} from 'react-helmet';

const Single = ({posts}) => {
  let params = useParams();
  const thisProduct = posts.find(post => post.url == params.url)
  const [content, setContent] = useState("");
  var tags = thisProduct.tags;

  useEffect(() => {
    fetch(`.${thisProduct.body}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
    <Helmet>
        <title>{thisProduct.title}</title>
        <meta name="description" content="{thisProduct.description}" />
    </Helmet>
      <div className='container single'>
        
        <div className='single-image'>
          <img src={`.${thisProduct.image}`} alt={thisProduct.title} />
        </div>
        
        <div className='single-content'>
          <h1>{thisProduct.title}</h1>
          <div className='single-meta'>
            <p>{thisProduct.date_added}</p>
          </div>
          <div className='single-body'>
            <ReactMarkdown children={content} />
          </div>
          <div className='tags'>
              <ul>
                {tags.split(",").map((i) => (
                  <li key={i}>
                    {/* <Link to={`/category/${i}`}> */}
                      {i}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      
      </div>
    </>
  
  );
}

export default Single;