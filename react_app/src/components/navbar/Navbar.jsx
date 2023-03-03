import React from 'react'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';



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
      <div className="button-containers">

        <FontAwesomeIcon icon={faMicrophone} />
      </div>
      </div>
      <ul className='userBar'>
        <FontAwesomeIcon icon={faEllipsisV}/>
      </ul>
    </div>
  )
}

export default Navbar