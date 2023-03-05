import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faHome, faFilm, faBook, faHistory, faPlay, faPhotoFilm, faFire, faBagShopping, faMusic, faRadio, faNewspaper, faGamepad, faLightbulb, faPersonDress, faPodcast, faPlusCircle, faTrophy, faFlag, faGear, faQuestionCircle, faMessage, faPlus, faTv, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import tutuge from './tutuge.png'
import MetubeContext from '../../context/MetubeContext';

function Banner() {
    const {isOpen, setIsOpen} = useContext(MetubeContext);

    function toggleNavbar() {
      setIsOpen(!isOpen);
    }
  return (
    <div >
        <div className='logo-container'>
                <div className="rounded-button" onClick={toggleNavbar}>
                    <FontAwesomeIcon className='icon' icon={faBars}/>
                </div>
                <a href=""><img src={tutuge} alt='' className='tutuge' ></img></a>
            </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <div className='logo-container'>
                <div className="rounded-button" onClick={toggleNavbar}>
                    <FontAwesomeIcon className='icon' icon={faBars}/>
                </div>
                <a href="" style={{'padding' : '0'}}><img src={tutuge} alt='' className='tutuge'></img></a>
            </div>
            <div className="scrollable">
            <ul>
                <li><FontAwesomeIcon className='icon' icon={faHome}/><a href="">Home</a></li>
                <li><FontAwesomeIcon className='icon' icon={faFilm}/><a href="">Shorts</a></li>
                <li><FontAwesomeIcon className='icon' icon={faPhotoFilm}/><a href="">Subscriptions</a></li>
                <hr className="dropdown-divider" />
                <li><FontAwesomeIcon className='icon' icon={faBook}/><a href="">Library</a></li>
                <li><FontAwesomeIcon className='icon' icon={faHistory}/><a href="">History</a></li>
                <hr className="dropdown-divider" />
                <p style={{'margin-left': '30px',
                        'color' : 'white'}}>Sign in to like videos, comment, and subscribe.</p>
                <div className="oval-button" style={{'margin-left' : '30px'}}>
                    <FontAwesomeIcon icon={faUser} style={{'margin-right': '5px',
                                                            'color' : '#1e90ff'}}/>
                    <p style={{'color' : '#1e90ff'}}>Sign In</p>
                </div>
                <hr className="dropdown-divider" />
                <h4 style={{'margin-left': '25px',
                            'color' : 'white'}}>Explore</h4>
                <li><FontAwesomeIcon className='icon' icon={faFire}/><a href="">Trending</a></li>
                <li><FontAwesomeIcon className='icon' icon={faBagShopping}/><a href="">Shopping</a></li>
                <li><FontAwesomeIcon className='icon' icon={faMusic}/><a href="">Music</a></li>
                <li><FontAwesomeIcon className='icon' icon={faPlay}/><a href="">Movie & TV</a></li>
                <li><FontAwesomeIcon className='icon' icon={faRadio}/><a href="">Live</a></li>
                <li><FontAwesomeIcon className='icon' icon={faGamepad}/><a href="">Gaming</a></li>
                <li><FontAwesomeIcon className='icon' icon={faNewspaper}/><a href="">News</a></li>
                <li><FontAwesomeIcon className='icon' icon={faTrophy}/><a href="">Sports</a></li>
                <li><FontAwesomeIcon className='icon' icon={faLightbulb}/><a href="">Learning</a></li>
                <li><FontAwesomeIcon className='icon' icon={faPersonDress}/><a href="">Fashion & Beauty</a></li>
                <li><FontAwesomeIcon className='icon' icon={faPodcast}/><a href="">Podcasts</a></li>
                <hr className="dropdown-divider" />
                <li><FontAwesomeIcon className='icon' icon={faPlusCircle}/><a href="">Browse channels</a></li>
                <hr className="dropdown-divider" />
                <h4 style={{'margin-left': '25px',
                            'color' : 'white'}}>More from Tutuge</h4>
                <li><FontAwesomeIcon className='icon' icon={faPlus}/><a href="">Tutuge Premium</a></li>
                <li><FontAwesomeIcon className='icon' icon={faMusic}/><a href="">Tutuge Music</a></li>
                <li><FontAwesomeIcon className='icon' icon={faBabyCarriage}/><a href="">Tutuge Kids</a></li>
                <li><FontAwesomeIcon className='icon' icon={faTv}/><a href="">Tutuge TV</a></li>
                <hr className="dropdown-divider" />
                <li><FontAwesomeIcon className='icon' icon={faGear}/><a href="">Settings</a></li>
                <li><FontAwesomeIcon className='icon' icon={faFlag}/><a href="">Report history</a></li>
                <li><FontAwesomeIcon className='icon' icon={faQuestionCircle}/><a href="">Help</a></li>
                <li><FontAwesomeIcon className='icon' icon={faMessage}/><a href="">Send Feedback</a></li>
                <hr className="dropdown-divider" />

            </ul>
            </div>
      </div>
    </div>
  )
}

export default Banner