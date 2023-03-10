import { useContext } from "react" 
import MetubeContext from "../../context/MetubeContext"


const Homevideos = () => {
 const {videos} = useContext(MetubeContext)

 const getTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const date = new Date(timestamp);
  
    const seconds = Math.floor((currentDate - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
  
    if (months > 0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
  }

  const formatViewCount = (count) => {
    if (count < 1000) {
      return count.toString();
    } else {
      const roundedCount = Math.round(count / 100) / 10;
      if (roundedCount % 1 === 0) {
        return roundedCount.toString() + "k";
      } else {
        return roundedCount.toString() + "k";
      }
    }
  }

 return (
    <div className="home-container">
        {videos.map(video => (
           
            <div className="video-card">
                <img className="home-video-img" src={video.thumbnail} alt={video.title} />
                <div className="desc">
                    <div className="home-video-desc-header">
                        <img src={video.avatar} className="home-video-user-image"/>
                        <p className="home-video-title">{video.title}</p>
                        </div>
                        <div className="home-video-info">
                            <p className="home-video-username">{video.username}</p>
                            <p className="home-video-views">{formatViewCount(video.views)} views &bull; {getTimeAgo(video.date_published)}</p>
                    </div>
                </div>
            </div>

           
        
        ))}
    </div>
 )
}


export default Homevideos