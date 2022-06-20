import React from 'react'
import { useParams } from 'react-router'
import posts from '../db.json';


export const Single = () => {
    const {id} = useParams();

    console.log(id)

    const filtered = posts.filter(post => {
      return post.id === id;
    });

    console.log(filtered);


    return (
        <div>
         {filtered.id}
        </div>
    )
}
export default Single;