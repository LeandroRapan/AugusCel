import { useState, createContext, useContext } from "react"
import { useNotification } from "../../notification/Notification"
import { useNavigate } from "react-router"
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    console.log(user)
    // Llamada a useNavigate para ir a "/"
    const navigate = useNavigate()
    const {setNotification}= useNotification()
    const login = (username, password) => {
        setUser({username})
        navigate('/')
        setNotification('success', `Bienvenido ${username}`, 5)
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