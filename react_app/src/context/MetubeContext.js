import { useState, createContext, useEffect } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () =>{
            const res = await fetch('http://localhost:3001/Videos')
            const data = await res.json()
            setVideos(data)
        }    
        getVideos()
        }, []);
    return(
        <MetubeContext.Provider value={{
            isOpen,setIsOpen,
            videos, setVideos,
        }}>
            {children}
        </MetubeContext.Provider>
    )
}

export default MetubeContext