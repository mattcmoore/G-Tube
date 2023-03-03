import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Banner() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
      setIsOpen(!isOpen);
    }
  return (
    <div className="navbar-icon" onClick={toggleNavbar}>
        <div className="button-containers">
        <FontAwesomeIcon icon={faBars}/>
        </div>
    <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
    <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Banner