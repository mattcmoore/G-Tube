import React from "react"
import PlayerControls from "../PlayerControls"
import avatar1 from "./avatar1.jpg"

const Video = () => {
    return (
        <div className="main-video">
            <div className="video">
                <img src="./avatar1.jpg" alt="alt"></img>
                <PlayerControls />
            </div>
        </div>
    )
}

export default Video