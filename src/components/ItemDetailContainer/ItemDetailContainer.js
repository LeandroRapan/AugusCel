import { useState,useEffect  } from "react"
import {getProductById} from "../../asyncMock"
import {useParams} from 'react-router-dom'


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
            {/* implemento una condicion para que no haya conflicto con el estado null de productos */}
    {product ? (
        <div>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} style={{width: 200}}/>
        <p>Precio: ${product.price}</p>
        <p>Stock:{product.stock}</p>
        <p>Descripcion: {product.description}</p>
      </div>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
);
    
}
export default ItemDetailContainer