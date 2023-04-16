import { useState } from "react"
import { useAuth } from "../../context/AuthContext/AuthContext"

const Login = () => {
    //GUARDAR DATOS DEL USUARIO EN UNA COLECCION PARA DESPUES PODER USAR EL ID DEL USUARIO UUID Y AGREGARLO A LA ORDEN DE COMPRAS
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
     const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
      
         login(username, password)
    }
    return (
        <div>
            <h1>Login productToAdd</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Usuario
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </label>
                <label>
                    Contraseña
                <input value ={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login