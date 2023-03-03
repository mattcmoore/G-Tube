import AddToQueueBtn from './AddToQueueBtn.jsx'
import WatchLaterBtn from './WatchLaterBtn.jsx'

const Thumbnail = () => {
    return(
        <div className="ytd-thumbnail">
            <a className="thumbnail">
                <div className="yt-image">
                    <img className="core-image"></img>
                </div>
                <div className="overlays">
                    <div className="time-overlay">
                    <AddToQueueBtn />
                    <WatchLaterBtn />
                    </div>
                </div>
            </a>


        </div>
    )
}

export default Thumbnail
