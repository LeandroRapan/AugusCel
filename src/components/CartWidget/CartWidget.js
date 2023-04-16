import cartlogo from "./assets/online-shop.png"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext/CartContext';
import { useNavigate } from "react-router";
const CartWidget = () => {

    const { totalQuantity , total }= useContext (CartContext)

    const navigate = useNavigate()

    // estilos y numero estatico
    return (
        <div to='/cart'className="nav-item " onClick={()=> navigate('/cart')} style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"40px"}}>
            <img src={cartlogo} alt="cart widget" className="img-fluid" />
           <div> {totalQuantity} $ {total}</div>
        </div>
    )
}
export default CartWidget
