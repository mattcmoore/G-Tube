import { useContext } from "react" 
import MetubeContext from "../../context/MetubeContext"


const Homevideos = () => {
 const {videos} = useContext(MetubeContext)



 return (
    <div className="home-container">
        <div className="video-card">
            <img className="img" src="https://i3.ytimg.com/vi/BSJ9O6ZUttk/maxresdefault.jpg">
                
            </img>
            <div className="desc">
                
            </div>
        </div>
    </div>
 )
}


export default Homevideos