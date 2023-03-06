import React from "react";
import PlayerControls from "../PlayerControls";

const Video = () => {
  return (
    
        <div className="main-video">
          <div className="video">
          <ReactPlayer url='https://www.youtube.com/watch?v=_0XUN8NXOCY' controls='false' width='100%' height='100%'/>
          </div>
        </div>
  );
};

export default Video;
