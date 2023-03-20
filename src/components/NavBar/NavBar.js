import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import Link from 'react-router-dom'

// NavBar con estilos de bootstrap y estilos css en linea
// no me gusta mucho los estilos en linea  Hice un NavBar.css por que bootstrap se me esta resistiendo, pero tener parte en un archivo y parte en linea me parece desprolijo. Lo añadi al git ignore y lo voy a seguir trabajando por separados
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xl  " style={{backgroundColor: "#227C70"}} >
            {/* brand */}
            <h1 class="navbar-brand" style={{color:"#1C315E"}}>AugusCel</h1>
            {/* container de botones */}
            <div className="container-fluid"  id="navbarBasic">
                <link to='item:itemId' className="nav-item btn  btn-lg" id="btn" style={{color:"#E6E2C3"}}>Celulares</link>
                <link to='item:itemId' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Notebooks</link>
                <link to='item:itemId' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Sobre nosotros</link>
                <link to='item:itemId' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Cómo comprar</link>
                <link to='item:itemId' className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Envios</link>
                <CartWidget  />
            </div>
            
        </nav>
    )
}

export default NavBar