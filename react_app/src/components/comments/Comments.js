import React, { useState, useContext, } from 'react';
import MetubeContext from '../../context/MetubeContext'
import Liked from './Liked';
import Newest from './Newest';
import UserComment from './UserComment';

const Comments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {commentsOrdered} = useContext(MetubeContext)
  
  const [newest, setNewest] = useState(true)
 
  const getTimeAgo = (timestamp) => {
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
  
 
  if(newest){
    return(
      <>
        < UserComment setIsOpen={setIsOpen} setNewest={setNewest} isOpen={isOpen}/>
        < Newest getTimeAgo={getTimeAgo}/>
      </>
    )
  }return(
    <>
      <UserComment setIsOpen={setIsOpen} setNewest={setNewest} isOpen={isOpen}/>
      <Liked getTimeAgo={getTimeAgo}/>
    </>
  )
};

export default Comments;