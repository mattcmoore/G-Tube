import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
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
                <div className="rounded-button" onClick={toggleNavbar}>
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
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Subscriptions</a></li>
                <hr className="dropdown-divider" />
                <li><a href="#">Library</a></li>
                <li><a href="#">History</a></li>
                <hr className="dropdown-divider" />
                <p style={{'margin-left': '10px',
                        'color' : 'white'}}>Sign in to like videos, comment, and subscribe.</p>
                <div className="oval-button">
                    <FontAwesomeIcon icon={faUser} style={{'margin-right': '5px',
                                                            'color' : '#1e90ff'}}/>
                    <p style={{'color' : '#1e90ff'}}>Sign In</p>
                </div>
                <hr className="dropdown-divider" />
                <h4 style={{'margin-left': '10px',
                        'color' : 'white'}}>Explore</h4>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Shopping</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Movie & TV</a></li>
                <li><a href="#">Live</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Fashion & Beauty</a></li>
                <li><a href="#">Podcasts</a></li>
                <hr className="dropdown-divider" />
                <li><a href="#">Browse channels</a></li>
                <hr className="dropdown-divider" />
                <h4 style={{'margin-left': '10px',
                        'color' : 'white'}}>More from Tutuge</h4>
                <li><a href="#">Tutuge Premium</a></li>
                <li><a href="#">Tutuge Music</a></li>
                <li><a href="#">Tutuge Kids</a></li>
                <li><a href="#">Tutuge TV</a></li>
                <hr className="dropdown-divider" />
                <li><a href="#">Settings</a></li>
                <li><a href="#">Report history</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Send Feedback</a></li>
                <hr className="dropdown-divider" />

            </ul>
      </div>
    </div>
  )
}

export default Banner