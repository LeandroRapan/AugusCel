
import ItemCount from "../ItemCount/ItemCount"
  import { useContext, useState } from "react"
  import { CartContext } from '../../context/CartContext/CartContext';
  import { Link } from 'react-router-dom'
  import { useNotification } from "../../notification/Notification";




 const ItemDetail = ({id, name, price, img, description, stock}) => {
   const [quantity, setQuantity]= useState(0)
   const {addItem} = useContext(CartContext)
const {setNotification} = useNotification()

  const handleOnAdd = (quantity)=>{
    const productToAdd = {
    id, name, price, quantity 
    
  }
  console.log(productToAdd)
  setQuantity(quantity)
  addItem(productToAdd)
  setNotification('success', `agregado al carrito ${quantity} ${name}`, 2)
 }
  
//  Recive los datos via prompt de itemDetailContainer que a su vez lo obtiene de asyncMock

return(

<div>
           <h2>{name}</h2>
         <img src={img} alt={name} style={{width: 200}}/>
         <p>Precio: ${price}</p>
         <p>Stock:{stock}</p>
         <p>Descripcion: {description}</p>
  
    
  
     <footer>
      {
        // RECORDAR TRATAR DE USAR ISINCART DEL CONTEXT
        quantity>0?(
          <Link to= '/cart'>Comprar</Link>
        ) : (
          <ItemCount onAdd={handleOnAdd} stock={stock}/>
        )
      }
     
       </footer>
       </div>

)
  
}

   export default ItemDetail

// import ItemCount from "../ItemCount/ItemCount";
// import { useContext } from "react";
// import { CartContext } from "../../App";
// import Counter from "../Counter/Counter";

// const ItemDetail = ({name, price, img, description, stock}) => {

//   const {addItem} = useContext(CartContext);
  
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={img} alt={name} style={{width: 200}}/>
//       <p>Precio: ${price}</p>
//       <p>Stock:{stock}</p>
//       <p>Descripcion: {description}</p>
//       <footer>
//         <Counter title={name} stock={stock} />
//       </footer>
//     </div>
//   );
// }

// export default ItemDetail;