import cartlogo from "./assets/online-shop.png"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext/CartContext';
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext/AuthContext"

const CartWidget = () => {

    const { totalQuantity , total }= useContext (CartContext)

    const {logout} = useAuth()

    const navigate = useNavigate()

    // estilos y numero estatico
    return (
        <div>
            <div>
                <button className='btn btn-lg' onClick={logout}>Logout</button>
            </div>
        <div to='/cart'className="nav-item " onClick={()=> navigate('/cart')} style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"40px"}}>
            <img src={cartlogo} alt="cart widget" className="img-fluid" />
           <div> {totalQuantity} $ {total}</div>
        </div>
        </div>
    )
}
export default CartWidget
