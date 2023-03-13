import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Secondary from "../components/Secondary/Secondary";
import Video from "../components/video_component/Video";
import Details from "../components/details/Details";
import Comments from "../components/comments/Comments";
import { useContext } from 'react'
import MetubeContext from '../context/MetubeContext'
import Queue from '../components/Secondary/QueueComp/Queue';

function VideoPage() {
  const {theme} = useContext(MetubeContext)
  return (
    <>
    <Navbar />
    <div className="primary-container"> 
      <Video />
      <Details />
      <Comments />
    </div>
    <Secondary />
    {/* <Queue /> */}
    </>
  )
}

export default VideoPage