import { Duration } from "luxon";
import {useEffect,useState} from 'react'

const Thumbnail = ({ thumbnail, runtime, addToQueue}) => {

  const [buttonsAreVisible, setButtonsAreVisible] = useState(false)

  useEffect(()=>{
    setButtonsAreVisible(false)
  },[])

  const handleMouseEnter = () => {
    setButtonsAreVisible(true)
  }

  const handleMouseLeave = () => {
    setButtonsAreVisible(false)
  }

  return (
    <div className="ytd-thumbnail" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className="thumbnail">
        <div className="yt-image">
          <div className={buttonsAreVisible ? "queue-btn" : "hidden"} onClick={addToQueue}>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              fill="white"
            >
              <g>
                <path d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z"></path>
              </g>
            </svg>
          </div>
          <div className={buttonsAreVisible ? "watch-later-btn" : "hidden"}>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              fill="white"
            >
              <g>
                <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
              </g>
            </svg>
          </div>
          <p className={buttonsAreVisible ? "hidden" : "display-time"}>
            {runtime.hours
              ? Duration.fromObject(runtime).toFormat("h:m:ss")
              : Duration.fromObject(runtime).toFormat("mm:ss")}
          </p>
          <img className="core-image" src={thumbnail}/>
        </div>
      </a>
    </div>
  );
};

export default Thumbnail;
