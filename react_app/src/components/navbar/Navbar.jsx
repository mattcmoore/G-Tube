import React, {useState} from 'react'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone, faUser, faShield, faMoon, faLanguage, faShieldAlt, faGlobe, faKeyboard, faGear, faQuestionCircle, faMessage, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';



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
                <ul>
                  <li><FontAwesomeIcon className='icon' icon={faShield}/><a href="#">Your data in Tutuge</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faMoon}/><a href="#">Appearance: Dark Theme</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"7px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faLanguage}/><a href="#">Language: English</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"55px"}} /></li>
                  <li><FontAwesomeIcon className='icon' icon={faShieldAlt}/><a href="#">Restricted Mode: Off</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"39px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faGlobe}/><a href="#">Location: United States</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"22px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faKeyboard}/><a href="#">Keyboard shortcuts</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faGear}/><a href="#">Settings</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faQuestionCircle}/><a href="#">Help</a></li>
                  <li><FontAwesomeIcon className='icon' icon={faMessage}/><a href="#">Send feedback</a></li>
                </ul>
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