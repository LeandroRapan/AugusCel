import { useState, createContext, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    console.log(user)
    const login = (username, password) => {
        setUser({username})
    }
    const logout =() =>{
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 
// customhook
export const useAuth = () => {
    return useContext(AuthContext)
}