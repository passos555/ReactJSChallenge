import React from 'react';

import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post">
      <div className="author-info">
        <img src={post.author.avatar} alt="Avatar"/>
        <div className="post-info">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>
    
      
      {post.comments.map(comment => (
        <Comment 
        key={comment.id} 
        comment={comment}/>
      ))}
    </div>
  );
}

export default Post;