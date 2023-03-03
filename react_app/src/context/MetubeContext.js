import { useState, createContext } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    const [isOpen, setIsOpen] = useState(false)

    return(
        <MetubeContext.Provider value={{
            isOpen,
            setIsOpen
        }}>
            {children}
        </MetubeContext.Provider>
    )
}

export default MetubeContext