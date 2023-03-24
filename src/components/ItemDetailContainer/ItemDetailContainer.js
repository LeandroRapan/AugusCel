import { useState,useEffect  } from "react"
import {getProductById} from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer =() =>{
    // la respuesta se guarda en un estado para que pueda hacerr rerender. Va a empezar en null
    const [product, setProduct] = useState(null)
    // como es una llamada externa y quiero protegerla de cambios de estado uso un useEffect
   const {itemId}= useParams();
   //use effect para cargar los productos y cambiar el state, lo que generara un render
    useEffect (()=> {
        getProductById(itemId)
        .then(res=>{setProduct(res)})
        .catch(error =>{console.log(error)})
    }, [])
   //generación del div en el que estaá itemDetail
    return(
        <div>
            <h1>Detalle de productos</h1>
            <ItemDetail {...product}/>
    
  </div>
);
    
}
export default ItemDetailContainer
