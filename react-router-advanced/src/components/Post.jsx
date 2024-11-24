// Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Post {id}</h2>
      {/* Fetch and display the post using `id` */}
    </div>
  );
}

export default Post;
