import { useState, createContext, useEffect } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    const [users, setUsers] = useState(null)
    const [commentsOrdered,setCommentsOrdered] = useState([])
    const [video, setVideo] = useState(null)
    const [commentsLiked, setCommentsLiked] = useState(null)
    const [videos, setVideos] = useState([])
    const [theme, setTheme] = useState({open: false, apperance: 'Dark Theme'})
    const [user, setUser] = useState(null)
    const [queue, setQueue] = useState([])
    const [showQueue, setShowQueue] = useState(false)
    useEffect( ()=>{
      setQueue([])
    },[])

    //fetch video 1 from database

    useEffect(()=> {
      fetch('/Videos/1')
        .then((response) => response.json())
        .then((data) => setUser(data))
    }, [])

    useEffect(()=>{
        fetch('/Users')
        .then((response)=> response.json())
        .then((data)=>setUsers(data))
    },[])
//fetch for comments by date
    useEffect(() => {
        fetch('/CommentsAll')
          .then(response => response.json())
          .then(data => {
            const sortedComments = data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
            setCommentsOrdered(sortedComments);
          });
      }, []);

//fetch for comments liked in ASC
  useEffect(() => {
    fetch('/CommentsAll')
      .then(response => response.json())
      .then(data => {
        // Sort comments by number of likes in descending order
        const sortedComments = data.sort((a, b) => b.likes - a.likes);
        setCommentsLiked(sortedComments);
      });
  }, []);
// fetch for all videos and metadata
  useEffect(() => {
    fetch('/Videos')
      .then((response) => response.json()) // Add parentheses after .json
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    return(
        <MetubeContext.Provider value={{
            users,
            setUsers,
            commentsOrdered,
            setCommentsOrdered,
            commentsLiked,
            setCommentsLiked,
            video,
            setVideo,
            videos,
            setVideos,
            user,
            setUser,
            theme,
            setTheme,
            queue,
            setQueue,
            showQueue, 
            setShowQueue

        }}>
            {children}
        </MetubeContext.Provider>
    )
}

export default MetubeContext