import { useState, createContext, useContext, useEffect } from "react"
import { useNotification } from "../../notification/Notification"
import { useNavigate } from "react-router"
const AuthContext = createContext()
const localGet = JSON.parse(localStorage.getItem('user') || null)
export const AuthProvider = ({children}) => {
    const [user, setUser]= useState(localGet)
    const [email, setEmail] = useState(null)
    useEffect(()=>{
        // localSet(cart)
        sessionStorage.setItem('user',JSON.stringify(user))
  
      }, [user])
    // Llamada a useNavigate para ir a "/"
    const navigate = useNavigate()
    const {setNotification}= useNotification()
    const login = (username, password, email) => {
        setEmail(email)
        
        setUser(username)
        navigate('/')
        setNotification('success', `Bienvenido ${username}`, 5)
    }
    const logout =() =>{
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{user, login, logout, email}}>
            {children}
        </AuthContext.Provider>
    )
} 
// customhook
export const useAuth = () => {
    return useContext(AuthContext)
}