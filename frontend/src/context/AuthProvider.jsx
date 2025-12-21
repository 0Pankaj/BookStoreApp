import React, { useContext, useState } from 'react'
import { createContext } from 'react'


export const AuthContext = createContext()
//uses children because we dirctly access all other components
export default function AuthProvider({ children }) {

    //now we have local storage user in initialAuthUser variable
    const initialAuthUser = localStorage.getItem("Users");
    // now we manage state
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )
    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    )
}

//creating a hook by using this hook we use authUser
export const useAuth = () => useContext(AuthContext);
