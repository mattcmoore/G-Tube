import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForwardStep, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";


const PlayerControls = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)

    return (
        <div className="player-controls">
            {/* <FontAwesomeIcon className="play-button" icon={faPlay} size='2x' /> */}
            <FontAwesomeIcon className="button-controls" icon={faPlay} size="2xl"/>
            <FontAwesomeIcon className="button-controls" icon={faForwardStep} size="2xl" />
            <FontAwesomeIcon className="button-controls" icon={faVolumeHigh} size="2xl" />
            {/* <button className="volume">Volume</button> */}
        </div>
    )
}

export default PlayerControls