import { useContext, useEffect } from "react";
import {
  faDownload,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import MetubeContext from "../../context/MetubeContext";
import { DateTime } from "luxon";

const Details = () => {
  const { user, isLoading } = useContext(MetubeContext);
  
  // Render loading state if user data is not yet available
  if (isLoading || !user) {
    return <div>Loading...</div>;
  }
  
  const title = user[0].title;
  const avatar = user[0].avatar;
  const channel = user[0].username;
  const subscribers = user[0].subscribers;
  const likes = user[0].likes;
  const views = user[0].views;
  const date = user[0].date_published;
  const description = user[0].description;

  return (
    <div className="detail">
      <div className="title">
        <p>{title}</p>
        
      </div>
      <div className="top-row">
        <img className="creator" src={avatar} />

        <div id="channel-name">
          {channel}
          <div id="subscribers">
            {subscribers >= 1000 ? `${subscribers / 1000}K` : subscribers}{" "}
            Subscribers
          </div>
        </div>
        <button className="sub-btn">Subscribe</button>
        <div className="right-buttons">
          <Tippy content="I like this" arrow={false} placement="bottom">
            <div className="like">
              <FontAwesomeIcon icon={faThumbsUp} />

              <span className="text">{likes}</span>
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
      <div className="description">
        <div className="description-meta">
          {views >= 1000 ? `${views / 1000}K` : views} views
          <span id="desc-date">{DateTime.fromISO(date).toRelative()}</span>
        </div>
        <div className="description-text">{description}</div>
      </div>
    </div>
  );
};

export default Details;
