import Dismissible from "./Dismissible.jsx";
import "./secondary.css";
import MetubeContext from "../../context/MetubeContext.js";
import { useState, useEffect, useContext } from "react";
import Queue from "./QueueComp/Queue.jsx";

const Secondary = () => {
  const [isPopup, setIsPopup] = useState(false)

  const { videos } = useContext(MetubeContext)

  useEffect(()=>{
    setIsPopup(false)
  },[])
  return (
    <div className="secondary dark">
      <Queue/>
      
      <div className="contents">
        {videos.map((video, index) => (
          <Dismissible
            key={index}
            id={video.id}
            date_published={video.date_published}
            description={video.description}
            is_watched={video.is_watched}
            keyword={video.keyword}
            likes={video.likes}
            title={video.title}
            username={video.username}
            runtime={video.runtime}
            thumbnail={video.thumbnail}
            views={video.views}
            isPopup={isPopup}
            setIsPopup={setIsPopup}
          />
        ))}
      </div>
    </div>
  );
};

export default Secondary;