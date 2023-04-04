import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../App"
import Counter from "../Counter/Counter"



const ItemDetail = ({name, price, img, description, stock}) => {

  const {addItem} = useContext(CartContext)
  // Recive los datos via prompt de itemDetailContainer que a su vez lo obtiene de asyncMock
    return(
    <div>
    <h2>{name}</h2>
    <img src={img} alt={name} style={{width: 200}}/>
    <p>Precio: ${price}</p>
    <p>Stock:{stock}</p>
    <p>Descripcion: {description}</p>
  
    
  
  <footer>
 <Counter />
 </footer>
 </div>
  )
  
}

export default ItemDetail