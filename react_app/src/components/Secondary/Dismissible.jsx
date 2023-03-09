import Thumbnail from "./Thumbnail.jsx";
import MenuPopup from "./MenuPopup.jsx";
import { useState, useEffect, useContext } from "react";
import { DateTime } from "luxon";
import MetubeContext from "../../context/MetubeContext.js";

const Dismissible = ({
  thumbnail,
  username,
  title,
  views,
  date_published,
  runtime,
  isPopup,
  setIsPopup
}) => {

  const [menuPopupIsOpen, setMenuPopupIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  window.addEventListener("click",(event)=>{
    if(event.target.className !== "menu-popup-btn"){
      setMenuPopupIsOpen(false)
      setIsPopup(false)
      setIsVisible(false)
    }
  })
  
  // const {menuPopupIsOpen, setMenuPopupIsOpen, isVisible, setIsVisible} = useContext(MetubeContext)

  const handleMouseLeave = () => {
    menuPopupIsOpen ? setIsVisible(true) : setIsVisible(false);

  }

  const handleMouseEnter = () => {
    if(isPopup === false){
      setIsVisible(true)
    }
  }

  const handleClick = (event) => {
    setMenuPopupIsOpen(!menuPopupIsOpen)
    setIsPopup(!isPopup)
    // setIsPopup(true)
  };
 
  return (
    <div
      className="dismissible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Thumbnail thumbnail={thumbnail} runtime={runtime} />
      <div className="details">
        <p className="video-title">{title}</p>
        <div className="user_name">
            <p>{username}</p>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope yt-icon" fill="white"><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"></path></g></svg>
          </div>
        <div className="metadata-line">
          <p>{views >= 1000 ? `${views / 1000}K` : views} views</p>
          <p> · </p>
          <p>{DateTime.fromISO(date_published).toRelative()}</p>
        </div>
      </div>
      <button className={isVisible ? "menu-popup-btn" : "hidden"} onClick={(e)=>{handleClick(e)}} >
        <svg
          className="three-dots"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          fill="currentColor"
        >
          <g>
            <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
          </g>
        </svg>
      </button>
      <MenuPopup isOpen={menuPopupIsOpen} />
    </div>
  );
};

export default Dismissible;