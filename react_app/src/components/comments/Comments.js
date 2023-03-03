import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Comments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="comments-dropdown-container">
        <p className="comments-count">10 Comments</p>
        <div className="custom-dropdown-container">
          <button className="custom-dropdown-button" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faBars} size="1x" />&nbsp;&nbsp;Sort by
          </button>
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
      <div className='addComment'>
        <img src='https://imagez.tmz.com/image/31/4by3/2016/04/01/3126fb3e220556dc9ada8f365f2a852d_xl.jpg' id='commentImg'/>
        <p id='theComment'>Add a comment...</p>
      </div>
    </>
  );
} 
export default Comments