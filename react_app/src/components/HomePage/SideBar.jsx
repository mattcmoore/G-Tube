import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faPhotoFilm, faBook, faHistory } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <div className='side-bar'>
    <div className='side-bar-icon'><FontAwesomeIcon className='icon' style={{'padding-bottom': '8px'}} icon={faHome}></FontAwesomeIcon><p style={{'color': 'white'}}>Home</p></div>
    <div className='side-bar-icon'><FontAwesomeIcon className='icon' style={{'padding-bottom': '8px'}} icon={faFilm}></FontAwesomeIcon><p style={{'color': 'white'}}>Shorts</p></div>
    <div className='side-bar-icon'><FontAwesomeIcon className='icon' style={{'padding-bottom': '8px'}} icon={faPhotoFilm}></FontAwesomeIcon><p style={{'color': 'white', }}>Subscriptions</p></div>
    <div className='side-bar-icon'><FontAwesomeIcon className='icon' style={{'padding-bottom': '8px'}} icon={faBook}></FontAwesomeIcon><p style={{'color': 'white'}}>Library</p></div>
    <div className='side-bar-icon'><FontAwesomeIcon className='icon' style={{'padding-bottom': '8px'}} icon={faHistory}></FontAwesomeIcon><p style={{'color': 'white'}}>History</p></div>
    </div>
  )
}

export default SideBar