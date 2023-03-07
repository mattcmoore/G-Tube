
import { useState, createContext, useEffect } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    const [users, setUsers] = useState(null)
    const [commentsOrdered,setCommentsOrdered] = useState([])
    const [video, setVideo] = useState(null)
    const [commentsLiked, setCommentsLiked] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3001/Users')
        .then((response)=> response.json())
        .then((data)=>setUsers(data))
    },[])
//fetch for comments by date
    useEffect(() => {
        fetch('http://localhost:3001/CommentsAll')
          .then(response => response.json())
          .then(data => {
            const sortedComments = data.sort((a, b) => new Date(a.date_published) - new Date(b.date_published));
            setCommentsOrdered(sortedComments);
            
          });
      }, []);


  useEffect(() => {
    fetch('http://localhost:3001/CommentsAll')
      .then(response => response.json())
      .then(data => {
        // Sort comments by date_published in reverse order
        const sortedComments = data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
        setCommentsOrdered(sortedComments);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/Videos')
      .then((response) => response.json()) // Add parentheses after .json
      .then((data) => {
        setVideo(data);
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
            setVideo
        }}>
            {children}
        </MetubeContext.Provider>
    )
}

export default MetubeContext