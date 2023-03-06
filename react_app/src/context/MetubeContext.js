import { useState, createContext } from "react";

const MetubeContext = createContext()

export const MetubeProvider =({children}) =>{
    

    return(
        <MetubeContext.Provider value={{
            
        }}>
            {children}
        </MetubeContext.Provider>
    )
}

export default MetubeContext