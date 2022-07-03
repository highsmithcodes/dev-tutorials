import {Link} from 'react-router-dom';

const Posts = ({posts}) => (
  <div className="page container blog">
    <h1>Blog</h1>
    <div className='sub-head'>Our library may be small, but we are uploading new tech tutorials every week. Stay tuned for new informative tech tutorials if you can't find what you're looking for below.</div>
    <div className='product-grid'>
      {posts.map(post => ( 
          <div className='product-card' key={post.id}>
            <Link  to={`/blog/${post.url}`}>
              <div className='thumbnail'>
              <img src={post.image} alt={post.title} />
              </div>
              <div className="product-details">
                  <div className="product-title" >{post.title}</div>
                  <div className="product-description">{post.description}</div>
                  <div className="price">Read More</div>
              </div>
            </Link>
          </div>
      ))} 
    </div>
  </div>
);

export default Posts;