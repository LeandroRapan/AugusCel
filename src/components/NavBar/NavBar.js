import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

// NavBar con estilos de bootstrap y estilos css en linea
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xl  " style={{backgroundColor: "#227C70"}} >
            {/* brand */}
            <h1 class="navbar-brand" style={{color:"#1C315E"}}>AugusCel</h1>
            {/* container de botones */}
            <div className="container-fluid"  id="navbarBasic">
                <button className="nav-item btn  btn-lg" id="btn" style={{color:"#E6E2C3"}}>Celulares</button>
                <button className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Notebooks</button>
                <button className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Sobre nosotros</button>
                <button className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Cómo comprar</button>
                <button className="nav-item btn  btn-lg" style={{color:"#E6E2C3"}}>Envios</button>
                <CartWidget  />
            </div>
            
        </nav>
    )
}

export default NavBar