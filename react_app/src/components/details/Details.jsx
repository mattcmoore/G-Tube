import {
  faDownload,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";

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
        <div className="right-buttons">
          <Tippy content="I like this" arrow={false} placement="bottom">
            <div className="like">
              <FontAwesomeIcon icon={faThumbsUp} />
              {/*Need to fetch likes from database for */}
              <span className="text">15K</span>
            </div>
          </Tippy>
          <Tippy content="I dislike this" arrow={false} placement="bottom">
          <div className="dislike">
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
          </Tippy>
          <Tippy content="Share" arrow={false} placement="bottom">
            <div className="share">
              <FontAwesomeIcon icon={faShare} />
              <span className="text">Share</span>
            </div>
          </Tippy>
          <Tippy content="Download" arrow={false} placement="bottom">
            <div className="download">
              <FontAwesomeIcon icon={faDownload} />
              <span className="text">Download</span>
            </div>
          </Tippy>
          <div className="dot-btn">...</div>
        </div>
      </div>
      <div className="description"></div>
    </div>
  );
};

export default Details;
