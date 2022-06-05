import React from 'react';

const CommentDetail = () => { 
    return (
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar"  />
          </a>
          <div className="conxtent">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
          </div>
        </div>

    );
}

export default CommentDetail;