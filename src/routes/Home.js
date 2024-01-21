import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
// import posts from '../db.json';
import {s3} from '../config/aws-config';

function Home(){ 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await s3.listObjectsV2({
          Bucket: 'devweight',
          Prefix: 'posts/',
        }).promise();
  
        const objects = response.Contents;
  
        console.log('objects', objects)
  
        // Fetch the content of each .md file
        const postsData = await Promise.all(objects.map(async (object) => {
          const mdFileKey = object.Key;
          console.log('mdFileKey', mdFileKey)
  
          // Skip the "posts/" directory itself
          if (mdFileKey.endsWith('/')) {
            return null;
          }
  
          const mdFileResponse = await s3.getObject({
            Bucket: 'devweight',
            Key: mdFileKey,
          }).promise();
  
          // Assuming your .md files contain the post data in JSON format
          return JSON.parse(mdFileResponse.Body.toString());
        }));
  
        // Filter out null values (directory entry) and setPosts with valid data
        setPosts(postsData.filter(post => post !== null), () => {
          console.log('Updated Posts:', posts); // Add this line for debugging
        });
  
        console.log('posts', posts); // Move this line here
      } catch (error) {
        console.error('Error fetching posts from S3:', error);
      }
    };
  
    fetchPosts();
  }, []);

  console.log('posts', posts)

  return(
  <>
    <div className='home-banner'>
      <div className='home-header'>
        <h1>Dev Tutorials</h1>
        <div className='home-sub-head'>for the passionate developer</div>
      </div>
      <div className='header-image'>
          <div className='brackets'>[ ]</div>
          <div className='bubble'>rad tutorials bro!</div>
      </div>
    </div>
    <div className="page home container">
      <div className='w-80' id="intro-section">
        <p>DevWeight is an educational platform helping the everyday developer sharpen their skills. Browse some of our most recent tutorials below.</p>
      </div>
      <div className='top-product-container'>
        <h2>Tutorials</h2>
        <div id="top-products">
          <div className='product-grid'>
          {posts.slice(0, 4).map((post) => (
            <div className='product-card' key={post.id}>
              <Link to={`/blog/${post.url}`}>
                <div className='thumbnail'>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className='product-details'>
                  <div className='product-title'>{post.title}</div>
                  <div className='product-description'>{post.description}</div>
                  <div className='price'>Read More</div>
                </div>
              </Link>
            </div>
          ))}
            </div>
        </div>
        <div class="center-align">
          <Link to="/blog"><button>View all tutorials</button></Link>
        </div>
      </div>

      {/* <div id="about-us">
          <div>
            <h2>About Us</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?</p>
            <Link to="/story"><button>Read more</button></Link>
          </div>
      </div> */}

    </div>
  </>
  )
};

export default Home;