import cartlogo from "./assets/online-shop.png"
const CartWidget = () => {
    // estilos y numero estatico
    return (
        <div className="nav-item " style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"30px"}}>
            <img src={cartlogo} alt="cart widget" className="img-fluid" />
            {0}
        </div>
    )
}
export default CartWidget
