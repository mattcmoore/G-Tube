import { useEffect, useState } from 'react';
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faMicrophone, faUser, faShield, faMoon, faLanguage, faShieldAlt, faGlobe, faKeyboard, faGear, faQuestionCircle, faMessage, faArrowAltCircleRight, faSun, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'


function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false)
  const [search, setSearch] = useState('')
  const [theme, setTheme] = useState({open: false, apperance: 'Dark Theme'})
  const [restricted, setRestricted] = useState({open: false, restrict: 'Off'})
  const [location, setLocation] = useState({open: false, country: 'United States'})
  const [isMobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsSearch(false)
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitSearch = () =>{
    setSearch('')
  }
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
    setTheme((theme)=>({...theme, open: false }))
    setRestricted((restrict)=>({...restrict, open: false}))
    setLocation((loc)=>({...loc, open: false }))

  }

  const openTheme = () => {
    setIsDropdown(false)
    setTheme((theme)=>({...theme, open: true }))
  }

  const setDark = () => {
    setIsDropdown(true)
    setTheme((theme)=>({open: false, apperance: 'Dark Theme' }))
  }

  const setLight = () => {
    setIsDropdown(true)
    setTheme((theme)=>({open: false, apperance: 'Light Theme' }))
  }

  const openRestrict = () => {
    setIsDropdown(false)
    setRestricted((restrict)=>({...restrict, open: true }))
  }

  const toggleRestrict = () =>{
    setRestricted((restri)=>({...restri, restrict: restri.restrict === 'Off' ? 'On' : 'Off'}))
  }

  const toggleSearch = () =>{
    setIsSearch(!isSearch)
  }

  if (isSearch){
    return (
      <div className="navbar">
        <Tippy content='Back' arrow={false}>
        <div className="rounded-button" onClick={toggleSearch} style={{'margin-left': '10px', 'margin-top': '7px'}}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </div>
        </Tippy>
        <div className='search-container'>
            <input type="text" className='search-bar' placeholder="Search" value={search} onChange={onSearch} onSelect style={{'width':'300px'}}/>
            <Tippy content='Search' arrow={false}>
            <FontAwesomeIcon className='search-bar-button' icon={faSearch} onClick={submitSearch}/>
            </Tippy>
        </div>
        <Tippy content='Search with your voice' arrow={false}>
          <div className="rounded-button" style={{'margin-left': '7px',
                                                  'background-color' : 'rgba(128, 128, 128, 0.5)',
                                                  'margin-top': '4px',
                                                  "border-radius" : '0px',
                                                  'margin-right': '20px'}}>
              <FontAwesomeIcon className='icon' icon={faMicrophone} style={{'margin-top': '3px', 'width': '40px'}} />
          </div>
        </Tippy>

      </div>
    )
  }
  return (
    <div className='navbar'>
      <Banner/>
      
      {isMobile ? (
        
        <div className="small-container" style={{}}>
        <Tippy content='Search' arrow={false}>
          <div onClick={toggleSearch} className="rounded-button" style={{'margin-left': '40px',
                                                  'margin-top': '5px', 
                                                  'margin-right': '3px',
                                                  'padding-right': '10px',
                                                  'padding-left': '10px',
                                                  "width": '100px'
                                                  }}>
            <FontAwesomeIcon className='icon' icon={faSearch} />
          </div>
        </Tippy>
        <Tippy content='Search with your voice' arrow={false}>
          <div className="rounded-button" style={{'margin-left': '7px',
                                                  'background-color' : 'rgba(128, 128, 128, 0.5)',
                                                  'margin-top': '4px',
                                                  "border-radius" : '0px',
                                                  'margin-right': '20px'}}>
              <FontAwesomeIcon className='icon' icon={faMicrophone} style={{'margin-top': '3px', 'width': '40px'}} />
          </div>
        </Tippy>
      </div>
      ):(
        <div className='container-search'>
        <div className='search-container'>
            <input type="text" className='search-bar' placeholder="Search" value={search} onChange={onSearch} onSelect/>
            <Tippy content='Search' arrow={false}>
            <FontAwesomeIcon className='search-bar-button' icon={faSearch} onClick={submitSearch}/>
            </Tippy>
        </div>
        <Tippy content='Search with your voice' arrow={false}>
        <div className="rounded-button" style={{'margin-left': '7px',
                                                'background-color' : 'rgba(128, 128, 128, 0.5)',
                                                'margin-top': '4px',}}>
            <FontAwesomeIcon className='icon' icon={faMicrophone} style={{'margin-top': '2px', 'width': '40px'}} />
        </div>
        </Tippy>
        </div>
      )}

      <div className='search-container'>
          <Tippy content='Settings' disabled={isDropdown} arrow={false}>
          <div className="rounded-button" onClick={toggleDropdown} style={{'margin-top': '8px'}}>           
            <FontAwesomeIcon className='icon' icon={faEllipsisV} />
          </div>
          </Tippy>
            {isDropdown && (
              <div className="dropdown-menu">
                <ul style={{'margin-top': '0', 'margin-bottom': '0'}}>
                  <li ><FontAwesomeIcon className='icon' icon={faShield}/><a >Your data in Tutuge</a></li>
                  <hr className="dropdown-divider" />
                  <li onClick={openTheme}><FontAwesomeIcon className='icon' icon={theme.apperance === 'Dark Theme' ? faMoon : faSun}/><a>Appearance: {theme.apperance}</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"8px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faLanguage}/><a >Language: English</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"57px"}} /></li>
                  <li onClick={openRestrict}><FontAwesomeIcon className='icon' icon={faShieldAlt}/><a >Restricted Mode: {restricted.restrict}</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"41px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faGlobe}/><a >Location: {location.country}</a><FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} style={{'margin-left':"24px"}}/></li>
                  <li><FontAwesomeIcon className='icon' icon={faKeyboard}/><a >Keyboard shortcuts</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faGear}/><a >Settings</a></li>
                  <hr className="dropdown-divider" />
                  <li><FontAwesomeIcon className='icon' icon={faQuestionCircle}/><a >Help</a></li>
                  <li><FontAwesomeIcon className='icon' icon={faMessage}/><a >Send feedback</a></li>
                </ul>
              </div>
            )}
            {theme.open && (
              <div className="dropdown-menu">
                <div className="mic-container" >
                 <div onClick={toggleDropdown} className="rounded-button"style={{"margin-top": '0', 'margin-right': '10px', 'margin-left' : '7px', 'margin-bottom': '7px'}}>          
                <FontAwesomeIcon className='icon' icon={faArrowLeft} />
                </div>
                <h5 style={{'color': 'white', 'margin-top': '8px', 'margin-botton': '20px'}}>Appearance</h5>
                </div>
                <hr className="dropdown-divider" style={{'margin-top': '0'}}/>
                <li onClick={setDark} ><FontAwesomeIcon className='icon' icon={theme.apperance === 'Dark Theme' ? faCheck: faMoon}/><a >Dark Theme</a></li>
                <li onClick={setLight}><FontAwesomeIcon className='icon' icon={theme.apperance === 'Light Theme' ? faCheck: faSun}/><a >Light Theme</a></li>
              </div>
            )}
            {restricted.open && (
              <div className="dropdown-menu">
              <div className="mic-container" >
               <div onClick={toggleDropdown} className="rounded-button" style={{"margin-top": '0', 'margin-right': '10px', 'margin-left' : '7px', 'margin-bottom': '7px'}}>           
              <FontAwesomeIcon className='icon' icon={faArrowLeft} />
              </div>
              <h5 style={{'color': 'white', 'margin-top': '8px', 'margin-botton': '20px'}}>Restricted Mode</h5>
              </div>
              <hr className="dropdown-divider" style={{'margin-top': '0'}}/>
              <p style={{'margin-left': '15px' ,'margin-bottom': '0', 'color' : 'white'}}>This helps hid potentially mature videos.</p>
              <p style={{'margin-left': '15px' ,'margin-top': '0', 'color' : 'white'}}>No filter is 100% accurate.</p>
              <p style={{'margin-left': '15px', 'color' : 'white'}}>This setting only applies to this browser.</p>
              <div className="mic-container">
              <h3 style={{'margin-left': '15px', 'color': '#F7F7F7', 'font-weight': '600', 'padding-top': '15px'}}>Activate Restricted Mode</h3>
              <input type="range" min='0' max='1' step='1' onChange={toggleRestrict} value={restricted.restrict === 'Off' ? '0' : '1'} style={{'width': '30px', 'height' : '20px', 'margin-left': '10px', 'margin-top' : '22px', 'margin-right': '8px'}}/>
              </div>
            </div>
            )}
        <div className="oval-button" style={{'margin-top': '12px'}}>
          <FontAwesomeIcon icon={faUser} style={{'margin-right': '5px',
                                                'color' : '#1e90ff',
                                                }}/>
          <p style={{'color' : '#1e90ff',
                      'margin-top': '15px'}}>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar