import Dismissible from './Dismissible.jsx'
import './secondary.css'
import MetubeContext from '../../context/MetubeContext.js'
import{useState, useEffect, useContext} from 'react'

const Secondary = () => {

    const {videos} = useContext(MetubeContext)
    
    return(
        <div className="secondary">
            {/* <div className="selector-container">
                <div className="all-btn">
                    <p>All</p>
                </div>    
                <div className="recently-btn">
                    <p>Recently Uploaded</p>
                </div>    
                <div className="watched-btn">
                    <p>Watched</p>
                </div>    
            </div> */}
            <div className="contents">
                {videos.map( (video,index) => (
                    <Dismissible 
                        key={index} 
                        id={video.id} 
                        date_published={video.date_published} 
                        description={video.description} 
                        is_watched={video.is_watched}
                        keyword={video.keyword}
                        likes={video.likes}
                        title={video.title}
                        username={video.username}
                        runtime={video.runtime}
                        video_link={video.video_link}
                        views={video.views}
                    />
                ))}
            </div>
        </div>        
    )
}

export default Secondary