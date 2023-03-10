import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faPhotoFilm, faBook, faHistory } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SideBar() {
  const [selected, setSelected]= useState('Home')
  return (
    <div className='side-bar'>
    <div className='side-bar-icon' onClick={()=>{setSelected('Home')}}><FontAwesomeIcon className={`${selected === 'Home' ? 'icon-side-selected': 'icon-side'}`} icon={faHome}></FontAwesomeIcon><p >Home</p></div>
    <div className='side-bar-icon' onClick={()=>{setSelected('Shorts')}}><FontAwesomeIcon className={`${selected === 'Shorts' ? 'icon-side-selected': 'icon-side'}`} icon={faFilm}></FontAwesomeIcon><p >Shorts</p></div>
    <div className='side-bar-icon' onClick={()=>{setSelected('Subscriptions')}}><FontAwesomeIcon className={`${selected === 'Subscriptions' ? 'icon-side-selected': 'icon-side'}`}  icon={faPhotoFilm}></FontAwesomeIcon><p >Subscriptions</p></div>
    <div className='side-bar-icon' onClick={()=>{setSelected('Library')}}><FontAwesomeIcon className={`${selected === 'Library' ? 'icon-side-selected': 'icon-side'}`} icon={faBook}></FontAwesomeIcon><p >Library</p></div>
    <div className='side-bar-icon' onClick={()=>{setSelected('History')}}><FontAwesomeIcon className={`${selected === 'History' ? 'icon-side-selected': 'icon-side'}`} icon={faHistory}></FontAwesomeIcon><p >History</p></div>
    </div>
  )
}

export default SideBar