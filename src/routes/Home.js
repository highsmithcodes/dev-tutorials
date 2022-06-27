import React from 'react';
import {Link} from 'react-router-dom';
import posts from '../db.json';
import about from '../images/about-picture.png';

function Home(){ 
  return(
  <>
    <div className='home-banner'>
      <div className='home-header'>
        <h1>Dev Tutorials</h1>
        <div className='home-sub-head'>Free tutorials for the passionate developer</div>
      </div>
      <div className='header-image'>
          <div className='brackets'>[ ]</div>
          <div className='bubble'>rad tutorials bro!</div>
      </div>
    </div>
    <div className="page home container">
      <div className='w-80' id="intro-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='top-product-container'>
        <div id="top-products">
          <div className='product-grid'>
              {posts.slice(0, 3).map(post => ( 
                <div className='product-card' key={post.id}>
                  <Link  to={`/product/${post.id}`}>
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
        <div class="center-align">
          <Link to="/products"><button>Products</button></Link>
        </div>
      </div>
      <div id="about-us">
        <div className='split50'>
          <div>
            <img className="close" src={about} alt="about our content"/>
          </div>
          <div>
            <h2>About Us</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
            <Link to="/story"><button>Read more</button></Link>
          </div>
        </div>
      </div>

    </div>
  </>
  )
};

export default Home;