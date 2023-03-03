import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import tutuge from './tutuge.png'
import MetubeContext from '../../context/MetubeContext';

function Banner() {
    const {isOpen, setIsOpen} = useContext(MetubeContext);

    function toggleNavbar() {
      setIsOpen(!isOpen);
    }
  return (
    <div>
        <div className='logo-container'>
            <div className="rounded-button" style={{'margin-left': '20px'}} onClick={toggleNavbar}>
                <FontAwesomeIcon className='icon' icon={faBars}/>
            </div>
            <img src={tutuge} className='tutuge'></img>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <div className='logo-container'>
                <div className="rounded-button" onClick={toggleNavbar}>
                    <FontAwesomeIcon className='icon' icon={faBars}/>
                </div>
                <img src={tutuge} className='tutuge'></img>
            </div>
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