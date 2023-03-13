import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'
const UserComment = ({setNewest, setIsOpen, isOpen}) => {
  
  const handleLikedClick = () => {
    setNewest(false)
    setIsOpen(false)
  }
  
  const handleNewClick = () => {
    setNewest(true)
    setIsOpen(false)
  }
  
  const handleButtonClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="comments-dropdown-container">
        <p className="comments-count">5 Comments</p>
        <div className="custom-dropdown-container">
          <Tippy content="Sort by" arrow={false}>
            <button className="custom-dropdown-button" onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faBars} size="1x" />
              &nbsp;&nbsp;Sort by
            </button>
          </Tippy>  
          {isOpen && (
            <ul className="custom-dropdown-menu">
              <li className="custom-dropdown-item" onClick={handleLikedClick}>
                Top comments
              </li>
              <li className="custom-dropdown-item" onClick={handleNewClick}>
                Newest first
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="addComment">
        <img src="https://www.jpl.nasa.gov/edu/images/news/astronaut.jpg"  className="comment-avatar" />
        <p id="theComment">Add a comment...</p>
      </div>
    </>
  )
}

export default UserComment