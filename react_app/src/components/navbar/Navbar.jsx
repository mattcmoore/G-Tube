import React from 'react'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  return (
    <div className='navbar'>
      <Banner/>
        
      <div className='search-container'>
      <div className='search-bar'>
          <FontAwesomeIcon className='search-bar-icon' icon={faSearch}></FontAwesomeIcon>
          <input type="text" className='search-bar-input' placeholder="Search"/>
          <FontAwesomeIcon className='search-bar-button' icon={faSearch}/>
      </div>
      <div className="rounded-button">

        <FontAwesomeIcon className='icon' icon={faMicrophone} />
      </div>
      </div>
      <div className='search-container'>
          <div className="rounded-button">           
            <FontAwesomeIcon className='icon' icon={faEllipsisV}/>
          </div>
        <div className="oval-button">
          <FontAwesomeIcon icon={faUser} style={{'margin-right': '5px',
                                                  'color' : ''}}/>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar