import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faHome,
  faFilm,
  faBook,
  faHistory,
  faPlay,
  faPhotoFilm,
  faFire,
  faBagShopping,
  faMusic,
  faRadio,
  faNewspaper,
  faGamepad,
  faLightbulb,
  faPersonDress,
  faPodcast,
  faPlusCircle,
  faTrophy,
  faFlag,
  faGear,
  faQuestionCircle,
  faMessage,
  faPlus,
  faTv,
  faBabyCarriage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import tutuge from "./space_logo_white.png";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className="logo-container">
        <div className="rounded-button" onClick={toggleNavbar} style={{'margin-left': '10px'}}>
          <FontAwesomeIcon className="icon" icon={faBars} />
        </div>
        <Link to='/' style={{'margin-left': '25px'}}><a>
          <img src={tutuge} alt="" className="tutuge" ></img>
        </a></Link>
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <div className="logo-container" style={{'margin-top': '1px', 'padding-bottom': '0px'}}>
          <div
            style={{ 'padding': "0", 'margin-left': '14px', 'margin-right': '0' }}
            className="rounded-button"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon className="icon" icon={faBars} />
          </div>
          <Link to='/' style={{'padding': 0}} ><a style={{ 'padding': "0", "padding-left": "0", 'margin-top': '0', 'padding-left': '0px' }}>
            <img src={tutuge} alt="" className="tutuge"></img>
          </a></Link>
        </div>
        <div className="scrollable">
          <ul>
          <Link to='/' style={{'padding': '0'}}><li style={{'margin-left': '6px', 'padding-bottom': '0'}}>
              <FontAwesomeIcon className="icon" icon={faHome} />
              <a>Home</a>
            </li></Link>
            <li>
              <FontAwesomeIcon className="icon" icon={faFilm} />
              <a>Shorts</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPhotoFilm} />
              <a>Subscriptions</a>
            </li>
            <hr className="dropdown-divider" />
            <li>
              <FontAwesomeIcon className="icon" icon={faBook} />
              <a>Library</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faHistory} />
              <a>History</a>
            </li>
            <hr className="dropdown-divider" />
            <p style={{ "margin-left": "30px", color: "white" }}>
              Sign in to like videos, comment, and subscribe.
            </p>
            <div className="oval-button" style={{ "margin-left": "30px" }}>
              <FontAwesomeIcon
                icon={faUser}
                style={{ "margin-right": "5px", color: "#1e90ff" }}
              />
              <p style={{ 'color': "#1e90ff", 'margin-top': '15px' }}>Sign In</p>
            </div>
            <hr className="dropdown-divider" />
            <h4 style={{ "margin-left": "25px", 'color': "white" }}>Explore</h4>
            <li>
              <FontAwesomeIcon className="icon" icon={faFire} />
              <a>Trending</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faBagShopping} />
              <a>Shopping</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faMusic} />
              <a>Music</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPlay} />
              <a>Movie & TV</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faRadio} />
              <a>Live</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faGamepad} />
              <a>Gaming</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faNewspaper} />
              <a>News</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faTrophy} />
              <a>Sports</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faLightbulb} />
              <a>Learning</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPersonDress} />
              <a>Fashion & Beauty</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPodcast} />
              <a>Podcasts</a>
            </li>
            <hr className="dropdown-divider" />
            <li>
              <FontAwesomeIcon className="icon" icon={faPlusCircle} />
              <a>Browse channels</a>
            </li>
            <hr className="dropdown-divider" />
            <h4 style={{ "margin-left": "25px", color: "white" }}>
              More from G-Tube
            </h4>
            <li>
              <FontAwesomeIcon className="icon" icon={faPlus} />
              <a>G-Tube Premium</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faMusic} />
              <a>G-Tube Music</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faBabyCarriage} />
              <a>G-Tube Kids</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faTv} />
              <a>G-Tube TV</a>
            </li>
            <hr className="dropdown-divider" />
            <li>
              <FontAwesomeIcon className="icon" icon={faGear} />
              <a>Settings</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faFlag} />
              <a>Report history</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
              <a>Help</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faMessage} />
              <a>Send Feedback</a>
            </li>
            <hr className="dropdown-divider" />
            <a style={{'color':'black'}}>Garret</a>
          </ul>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleNavbar}></div>}
    </div>
  );
}

export default Banner;
