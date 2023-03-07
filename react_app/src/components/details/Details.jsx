import {
  faDownload,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Details = () => {
  return (
    <div className="detail">
      <div className="title">
        <p>Calculating the fibonacci sequence in Javascript</p>
      </div>
      <div className="top-row">
        {/*Need to fetch avatar from database for single user*/}
        <img className="creator" />
        {/*Need to fetch name from database for single user*/}
        <div id="channel-name">
          Adam Coder
          {/*Fetch subscribers from database for single user*/}
          <div id="subscribers">2.5K Subscribers</div>
        </div>
        <button className="sub-btn">Subscribe</button>
        <div className="like">
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className="dislike">
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div className="share">
          <FontAwesomeIcon icon={faShare} />
          <span className="text">Share</span>
        </div>
        <div className="download">
          <FontAwesomeIcon icon={faDownload} />
          <span className="text">Download</span>
        </div>
        <div className="dot-btn">...</div>
      </div>
    </div>
  );
};

export default Details;
