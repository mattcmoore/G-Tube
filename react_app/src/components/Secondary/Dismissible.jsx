import Thumbnail from "./Thumbnail.jsx"
import {useState} from 'react'

const Dismissible = () => {
   // I will need fetched video data as a prop here

   return(
        <div className="dismissible">
            <Thumbnail />
            <div className="details">
                <p className="video-title"></p>
                <div className="channel-name"></div>
                <div className="metadata-line"></div>    
            </div>
        </div>
    )
}
export default Dismissible