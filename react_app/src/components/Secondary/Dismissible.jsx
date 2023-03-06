import Thumbnail from "./Thumbnail.jsx"
import {useState} from 'react'
import {DateTime} from 'luxon'



const Dismissible = ({video_link,username,title,views,date_published,runtime}) => {
   // I will need fetched video data as a prop here

   return(
        <div className="dismissible">
            <Thumbnail video_link={video_link} runtime={runtime}  />
            <div className="details">
                <p className="video-title">{title}</p>
                <div className="user_name">{username}</div>
                <div className="metadata-line">
                    <p>{views} views</p>
                    <p> · </p>
                    <p>{DateTime.fromISO(date_published).toRelative()}</p>
                </div>    
            </div>
        </div>
    )
}

export default Dismissible