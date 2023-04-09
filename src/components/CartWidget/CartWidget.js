import cartlogo from "./assets/online-shop.png"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext/CartContext';
const CartWidget = () => {

    const { totalQuantity }= useContext (CartContext)

    // estilos y numero estatico
    return (
        <div to='/cart'className="nav-item " style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"40px"}}>
            <img src={cartlogo} alt="cart widget" className="img-fluid" />
           <div> {totalQuantity}</div>
        </div>
    )
}
export default CartWidget
