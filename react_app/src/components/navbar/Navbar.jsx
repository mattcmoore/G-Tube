import React, {useState} from 'react'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone, faUser, faShield, faMoon, faLanguage, faShieldAlt, faGlobe, faKeyboard, faGear, faQuestionCircle, faMessage, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'


function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false)
  const [search, setSearch] = useState('')

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitSearch = () =>{
    setSearch('')
  }
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  return (
    <div className='navbar'>
      <Banner/>
      <div className='mic-container'>
      <div className='search-container'>
      <FontAwesomeIcon id='no-show-search' icon={faSearch} onClick={submitSearch}/>
          <input type="text" className='search-bar' placeholder="Search" value={search} onChange={onSearch} onSelect/>
          <Tippy content='Search' arrow={false}>
          <FontAwesomeIcon className='search-bar-button' icon={faSearch} onClick={submitSearch}/>
          </Tippy>
      </div>
      <Tippy content='Search with your voice' arrow={false}>
      <div className="rounded-button" style={{'margin-left': '7px',
                                              'background-color' : 'rgba(128, 128, 128, 0.5)',
                                              'margin-top': '7px'}}>
          <FontAwesomeIcon className='icon' icon={faMicrophone} />
      </div>
        </Tippy>
        </div>
      <div className='search-container'>
          <Tippy content='Settings' disabled={isDropdown} arrow={false}>
          <div className="rounded-button" onClick={toggleDropdown}>           
            <FontAwesomeIcon className='icon' icon={faEllipsisV} />
          </div>
          </Tippy>
            {isDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li><FontAwesomeIcon className='icon' icon={faShield}/><a >Your data in Tutuge</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faMoon}/><a>Appearance: Dark Theme</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"7px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faLanguage}/><a >Language: English</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"55px"}} /></li>
                  <li><FontAwesomeIcon className='icon' icon={faShieldAlt}/><a >Restricted Mode: Off</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"39px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faGlobe}/><a >Location: United States</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"22px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faKeyboard}/><a >Keyboard shortcuts</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faGear}/><a >Settings</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faQuestionCircle}/><a >Help</a></li>
                  <li><FontAwesomeIcon className='icon' icon={faMessage}/><a >Send feedback</a></li>
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