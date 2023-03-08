import AddToQueueBtn from "./AddToQueueBtn.jsx";
import WatchLaterBtn from "./WatchLaterBtn.jsx";
import { Duration } from "luxon";
import {useEffect} from 'react'

const Thumbnail = ({ thumbnail, runtime }) => {
  return (
    <div className="ytd-thumbnail">
      <a className="thumbnail">
        <div className="yt-image">
          <p className="display-time">
            {runtime.hours
              ? Duration.fromObject(runtime).toFormat("h:m:ss")
              : Duration.fromObject(runtime).toFormat("mm:ss")}
          </p>
          <img className="core-image" src={thumbnail}/>
        </div>
        <div className="overlays">
          <AddToQueueBtn />
          <WatchLaterBtn />
        </div>
      </a>
    </div>
  );
};

export default Thumbnail;
