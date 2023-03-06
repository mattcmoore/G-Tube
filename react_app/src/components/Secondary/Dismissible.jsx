import Thumbnail from "./Thumbnail.jsx"
import {useState, useEffect} from 'react'
import {DateTime} from 'luxon'



const Dismissible = ({video_link,username,title,views,date_published,runtime}) => {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setIsVisible(true)
    },[])

    const handleMouseEnter = () => {
        // setIsVisible(true)
    }

    const handleMouseLeave = () => {
        // setIsVisible(false)
    }

   return(
        <div className="dismissible">
            <Thumbnail video_link={video_link} runtime={runtime} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave()}  />
            <div className="details">
                <p className="video-title">{title}</p>
                <div className="user_name">{username}</div>
                <div className="metadata-line">
                    <p>{views} views</p>
                    <p> · </p>
                    <p>{DateTime.fromISO(date_published).toRelative()}</p>
                </div>    
            </div>
            <button className={isVisible ? "queue-btn" : "hidden"}>
                <svg
                    className="three-dots" 
                    viewBox="0 0 24 24" 
                    preserveAspectRatio="xMidYMid meet" 
                    focusable="false"
                >    
                    <g>
                        <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default Dismissible