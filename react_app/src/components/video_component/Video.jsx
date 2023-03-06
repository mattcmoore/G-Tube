import React from "react";
import PlayerControls from "../PlayerControls";

const Video = () => {
  return (
    <div className="main-video">
      <div className="video">
        {/* <FontAwesomeIcon className="play-button"icon={faPlay}/> */}
        <PlayerControls />
      </div>
    </div>
  );
};

export default Video;
