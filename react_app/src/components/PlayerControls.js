import { useState } from "react"


const PlayerControls = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)

    return (
        <div className="player-controls">
            <button className="play-button"> </button>
            <button className="next-button"> next </button>
            {/* <button className="volume">Volume</button> */}
        </div>
    )
}

export default PlayerControls