import { useState,useEffect  } from "react"
import {getProductById} from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer =() =>{
    // la respuesta se guarda en un estado para que pueda hacerr rerender. Va a empezar en null
    const [product, setProduct] = useState(null)
    // como es una llamada externa y quiero protegerla de cambios de estado uso un useEffect
   const {itemId}= useParams();
   
    useEffect (()=> {
        getProductById(itemId)
        .then(res=>{setProduct(res)})
        .catch(error =>{console.log(error)})
    }, [])

    return(
        <div>
            <h1>Detalle de productos</h1>
            <ItemDetail {...product}/>
    
  </div>
);
    
}
export default ItemDetailContainer
  /* implemento una condicion para que no haya conflicto con el estado null de productos */
//   product ? () : (
//     <p>Cargando...</p>
//   )