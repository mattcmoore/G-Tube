import React from "react"
import PlayerControls from "../PlayerControls"

const Video = () => {
    return (
        <div className="main-video">
            <div className="video">
                <img src="./thumbnail.jpg" alt="alt"></img>
                <PlayerControls />
            </div>
        </div>
    )
}

export default Video