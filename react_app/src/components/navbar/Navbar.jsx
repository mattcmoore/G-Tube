import React, {useState} from 'react'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false)

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  return (
    <div className='navbar'>
      <Banner/>
        
      <div className='search-container'>
      <div className='search-bar'>
          <FontAwesomeIcon className='search-bar-icon' icon={faSearch}></FontAwesomeIcon>
          <input type="text" className='search-bar-input' placeholder="Search"/>
          <FontAwesomeIcon className='search-bar-button' icon={faSearch}/>
      </div>
      <div className="rounded-button" style={{'margin-left': '5px',
                                                  'background-color' : 'rgba(128, 128, 128, 0.5)'}}>

        <FontAwesomeIcon className='icon' icon={faMicrophone} />
      </div>
      </div>
      <div className='search-container'>
          <div className="rounded-button" onClick={toggleDropdown}>           
            <FontAwesomeIcon className='icon' icon={faEllipsisV} />
          </div>
            {isDropdown && (
              <div className="dropdown-menu">
                <a href="#">Your data in Tutuge</a>
                <hr className="dropdown-divider" />
                <a href="#">Appearance: Dark</a>
                <a href="#">Language: English</a>
                <a href="#">Restricted Mode: Off</a>
                <a href="#">Location: United States</a>
                <a href="#">Keyboard shortcuts</a>
                <hr className="dropdown-divider" />
                <a href="#">Settings</a>
                <hr className="dropdown-divider" />
                <a href="#">Help</a>
                <a href="#">Send feddback</a>
              </div>
            )}
        <div className="oval-button">
          <FontAwesomeIcon icon={faUser} style={{'margin-right': '5px',
                                                  'color' : '#1e90ff'}}/>
          <p style={{'color' : '#1e90ff'}}>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar