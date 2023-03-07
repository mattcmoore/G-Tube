import { useState, createContext, useEffect } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () =>{
            // headers needed because proxy won't redirect if headers === text
            const res = await fetch("/Videos",{
                headers:{
                    "accepts":"application/json"
                }
            })
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