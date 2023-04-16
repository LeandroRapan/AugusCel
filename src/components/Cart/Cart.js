import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)
    return(
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(prod=>{
                    return (
                        <div key={prod.id}>
                             {prod.name}
                              
                        </div>
                    )
                })
            }
        </div>
        <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}
export default Cart