import Dismissible from './Dismissible.jsx'
import './secondary.css'

import{useState, useEffect, useContext} from 'react'


const Secondary = () => {
    const [button, setButton ] = useState("")

    useEffect(() => {
        setButton("All")
    },[])
    //fake fetch
    const videos = []
    return(
        <div className="secondary">
            <div className="selector-container">
                <div className="all-btn">
                    <p>All</p>
                </div>    
                <div className="recently-btn">
                    <p>Recently Uploaded</p>
                </div>    
                <div className="watched-btn">
                    <p>Watched</p>
                </div>    
            </div>
            <div className="contents">
                {videos.map(video => {
                    <Dismissible />
                })}
            </div>
        </div>        
    )
}

export default Secondary