const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <h1>AugusCel</h1>
            <div className="container-fluid"  id="navbarBasic">
                <button className="nav-item">Celulares</button>
                <button className="nav-item">Notebooks</button>
                <button className="nav-item">Sobre nosotros</button>
                <button className="nav-item">Cómo comprar</button>
                <button className="nav-item">Envios</button>
            </div>
        </nav>
    )
}

export default NavBar