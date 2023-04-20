import { useState } from "react"
import { useAuth } from "../../context/AuthContext/AuthContext"
import { auth } from "../../services/firebase/firebaseConfig"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
    
    //GUARDAR DATOS DEL USUARIO EN UNA COLECCION PARA DESPUES PODER USAR EL ID DEL USUARIO UUID Y AGREGARLO A LA ORDEN DE COMPRAS
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')
     
    const { login } = useAuth()
      
     
       




// FUNCION FIREBASE LOGIN

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    login(email, password)
    // ...
  })
  .catch((error) => {
    console.log('error en el login')
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });
       
        
    }

    const handleNewUser = (e) => {
        e.preventDefault()
        //FUNCION FIREBASE CREAR USUARIO
      createUserWithEmailAndPassword(auth, newUser, newPass)
      .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('usuario creado')
    
    // ...
       })
     .catch((error) => {console.log(error)
     const errorCode = error.code;
     const errorMessage = error.message;
    //x  ..
  });

       login(newUser, newPass)
        
    }
    return (
        <div>
            <h1>Login </h1>
            <form onSubmit={handleLogin}>
                <label>
                    Usuario
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label>
                    Contraseña
                <input value ={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label>
                <button>Login</button>

            </form>

            <div>
            <h1>NewUser</h1>
            <form onSubmit={handleNewUser}>
                <label>
                   email
                <input type="text" value={newUser} onChange={(e)=>setNewUser(e.target.value)}/>
                </label>
                <label>
                    Contraseña
                <input value ={newPass} onChange={(e)=> setNewPass(e.target.value)}/>
                </label>
                <button>Login</button>
            </form>
            </div>
        </div>
        
    )
}

export default Login