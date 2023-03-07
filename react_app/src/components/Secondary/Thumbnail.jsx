import AddToQueueBtn from "./AddToQueueBtn.jsx";
import WatchLaterBtn from "./WatchLaterBtn.jsx";
import { Duration } from "luxon";

const Thumbnail = ({ video_link, runtime }) => {
  return (
    <div className="ytd-thumbnail">
      <a className="thumbnail">
        <div className="yt-image">
          <p className="display-time">
            {runtime.hours
              ? Duration.fromObject(runtime).toFormat("h:m:ss")
              : Duration.fromObject(runtime).toFormat("mm:ss")}
          </p>
          <img className="core-image" src={video_link}></img>
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
