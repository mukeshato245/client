import React, { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {
    const person = {"name":"kishor", "address":"balaju"}


    return (
        <GlobalContext.Provider value={person} >
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}