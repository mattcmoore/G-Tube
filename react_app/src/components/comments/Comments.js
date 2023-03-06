import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'

const Comments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:3001/Users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/Comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  function getTimeAgo(timestamp) {
    const currentDate = new Date();
    const date = new Date(timestamp);
  
    const seconds = Math.floor((currentDate - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
  
    if (months > 0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
  }

  return (
    <>
      <div className="comments-dropdown-container">
        <p className="comments-count">{comments.length} Comments</p>
        <div className="custom-dropdown-container">
          <Tippy content="Sort by" arrow={false}>
            <button className="custom-dropdown-button" onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faBars} size="1x" />
              &nbsp;&nbsp;Sort by
            </button>
          </Tippy>  
          {isOpen && (
            <ul className="custom-dropdown-menu">
              <li className="custom-dropdown-item" onClick={handleItemClick}>
                Top comments
              </li>
              <li className="custom-dropdown-item" onClick={handleItemClick}>
                Newest first
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="addComment">
        <img src="..../postgres/g-unit.jpg" alt="Garret Photo" className="comment-avatar" />
        <p id="theComment">Add a comment...</p>
      </div>
      {users.map(item =>
        comments.map(comment => (
          <div class="comment">
            <img class="comment-avatar" src="../../postgres/avatar1.jpg" />
            <div class="comment-body">
              <div class="comment-header">
                <span class="comment-author">{item.username}</span>
                <span class="comment-time">{getTimeAgo(comment.date_published)}</span>
              </div>
              <div class="comment-text">{comment.comment}</div>
              <div class="comment-actions">
                <Tippy content="Like" arrow={false} placement="bottom">
                  <button class="comment-like">
                    <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                  </button>
                </Tippy>
                  <p className='likeCount'>{comment.likes}</p>
                  <Tippy content="Dislike" arrow={false} placement="bottom">
                    <button class="comment-dislike">
                      <FontAwesomeIcon icon={faThumbsDown} size="1x" />
                    </button>
                  </Tippy>
                <button class="comment-reply">Reply</button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Comments;