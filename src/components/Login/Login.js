import { useState } from "react"
import { useAuth } from "../../context/AuthContext/AuthContext"
import { auth } from "../../services/firebase/firebaseConfig"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const Login = () => {
    
    //GUARDAR DATOS DEL USUARIO EN UNA COLECCION PARA DESPUES PODER USAR EL ID DEL USUARIO UUID Y AGREGARLO A LA ORDEN DE COMPRAS
    const [email, setEmail] = useState('')
    const [newEmail, setNewEmail] = useState('')
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
    
    let user = userCredential.user
    
    login(newUser, password, email)
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
      createUserWithEmailAndPassword(auth, newEmail, newPass)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log('usuario creado')
        setEmail(newUser)
        login(newUser, newPass, newEmail)
        // ...
       })
     .catch((error) => {console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      //x  ..
     });   
    }
    const googleLogin= async ()=> { 
        
    const provider = new GoogleAuthProvider();
     try {
        
         const credentials = await signInWithPopup(auth, provider)
                  
         let usrGoogle= credentials.user.displayName
         let emailGoogle =credentials.user.email
         
         login(usrGoogle, '', emailGoogle)
         
     } catch (error) {
        console.log(error)
     }

       
    
    }



    return (
        <div>
            <h1>Login </h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
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
                   Nombre
                <input type="text" value={newUser} onChange={(e)=>setNewUser(e.target.value)}/>
                </label>
                <label>
                   email
                <input type="text" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
                </label>
                <label>
                    Contraseña
                <input type="password"value ={newPass} onChange={(e)=> setNewPass(e.target.value)}/>
                </label>
                <button>Login</button>
            </form>
            </div>
            <button type="button" id='googleLogin' className="btn btn-info" onClick={googleLogin}>Google</button>
        </div>
        
    )
}

export default Login