import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from "../../context/CartContext/AuthContext"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
// NavBar con estilos de bootstrap y estilos css en linea
// no me gusta mucho los estilos en linea  Hice un NavBar.css por que bootstrap se me esta resistiendo, pero tener parte en un archivo y parte en linea me parece desprolijo. Lo añadi al git ignore y lo voy a seguir trabajando por separados
const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { user }= useAuth()
    useEffect(()=> {
    const categoriesRef = collection(db, 'categories')
    getDocs(categoriesRef).then(
        snapshot =>{
            const categoriesAdapted = snapshot.docs.map(
                doc => {
                    const data = doc.data
                    return {id:doc.id, ...data}
                }
            )
            setCategories(categoriesAdapted)
        })
      } , []
    )
    return (
        <nav className="navbar navbar-expand-xl  " style={{backgroundColor: "#227C70"}} >
            {/* brand */}
           <Link to="/">
              <img src="../assets/appleTouchLogoBlack.jpg" className="Navbar-brand" alt="logo" style={{width:70, borderRadius:50}}/>
           </Link>
            {/* container de botones */} 
            <div className="container-fluid"  id="navbarBasic">
                {
                    categories.map(cat=>{
                        return (
                            <NavLink key={cat.id} to={`/category/${cat.slug}`} className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>{cat.label}</NavLink>
                        )
                    })
                }
                {/* <NavLink  to='/category/celular' className="nav-item btn  btn-lg" id="btn" style={{color:"#E6E2C3"}}>Celulares</NavLink>
                <NavLink to='/category/notebook' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Notebooks</NavLink>
                <NavLink to='/category/tablet' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Tablets</NavLink> */}

                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Sobre nosotros</NavLink>
                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Cómo comprar</NavLink>
                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Envios</NavLink>
                {
                user ?(
                    // CARTWIDGET
                    <CartWidget  />
                ) : ( <NavLink to='/login'>login</NavLink>)
                }
                
                
               
            </div>
            
        </nav>
    )
}

export default NavBar