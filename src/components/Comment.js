import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comments">
      <img src={comment.author.avatar} alt=""/>
      <p><strong>{comment.author.name}</strong> {comment.content}</p>
    </div> 
  );
}

export default Comment;