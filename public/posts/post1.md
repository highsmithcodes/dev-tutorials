Adding JSON data to your project can be a pretty easy way to display organized content. For this example specifically, we’re adding some hardcoded JSON data to our react project. I’m making the assumption you already have your project folder built out so use this information however you deem fit. 

First, create your .json file which will hold your data:

*db.json*
```json
[
    {
        "id": 1,
        "title": "First Post Title"
    },
    {
        "id": 2,
        "title": "Second Post Title"
    },
    {
        "id": 3,
        "title": "Third Post Title"
    }
]
```

Then create 2 files which will display said data:

*Posts.js*
```javascript
const Posts = ({posts}) => (
    <div>
        <h1>Posts Page</h1>
    </div>
)

export default Posts;
```

*PostDetail.js*
```javascript
const PostDetail = ({posts}) => {
    return (
        <div>
            <h1>Post Detail Page</h1>
        </div>
    )
}

export default PostDetail;
```

As you can see, we passed in a variable called posts, let’s make sure at a global level these posts are being imported in. Head on over to your App.js to import your .json data and your Posts and PostDetail.

*App.js*
```javascript
import { Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import PostDetail from './PostDetail';
import posts from './db.json';

const App = () => (
    <div className="App">
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
    </div>
)

```

Now, let’s build out our Post and Post Detail page a bit more. 

In our Posts page, we’re gonna map through the .json data and start displaying our content.

*Posts.js*
```javascript
const Posts = ({posts}) => (
    <div>
        {posts.map(post => (
            <div>
                <p>{post.id}</p>
                <p>{post.title}</p>
            </div>
        ))}
    </div>
)

export default Posts
```

Now that we’re displaying the data, let’s wrap this in a Link tag imported from react-router. This Link will redirect you to the PostDetails page of that Post.

*Posts.js*
```javascript
import { Link } from 'react-router-dom';

const Posts = ({posts}) => (
    <div>
        {posts.map(post => (
            <div>
                <Link to={`/post/${post.id}`}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                </Link>
            </div>
        ))}
    </div>
)
```

In our PostDetail page we’re going to pull the correct data by identifying the id with the useParams hook, then running a function to pull the right post that matches the id. I’m making it sound more complicated than it is, I promise:

*PostDetail.js*
```javascript
import { useParams } from 'react-router-dom';

const PostDetail = ({posts}) => {
    let params = useParams();
    const thisPost = post.find(post => post.id == params.id)

    return (
        <div>
            <h1>{thisPost.title}</h1>
            <p>{thisPost.is}</p>
        </div>
    )
}
```


And that should be all we need to start building out our React Project with JSON Data.