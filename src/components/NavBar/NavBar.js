import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link, NavLink} from 'react-router-dom'

// NavBar con estilos de bootstrap y estilos css en linea
// no me gusta mucho los estilos en linea  Hice un NavBar.css por que bootstrap se me esta resistiendo, pero tener parte en un archivo y parte en linea me parece desprolijo. Lo añadi al git ignore y lo voy a seguir trabajando por separados
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xl  " style={{backgroundColor: "#227C70"}} >
            {/* brand */}
           <Link to="/">
              <img src="../assets/appleTouchLogoBlack.jpg" className="Navbar-brand" alt="logo" style={{width:70, borderRadius:50}}/>
           </Link>
            {/* container de botones */} 
            <div className="container-fluid"  id="navbarBasic">
                <NavLink  to='/category/celular' className="nav-item btn  btn-lg" id="btn" style={{color:"#E6E2C3"}}>Celulares</NavLink>
                <NavLink to='/category/notebook' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Notebooks</NavLink>
                <NavLink to='/category/tablet' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Tablets</NavLink>

                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Sobre nosotros</NavLink>
                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Cómo comprar</NavLink>
                <NavLink  className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Envios</NavLink>

                {/* EL CARTWIDGET */}
                <CartWidget  />
            </div>
            
        </nav>
    )
}

export default NavBar