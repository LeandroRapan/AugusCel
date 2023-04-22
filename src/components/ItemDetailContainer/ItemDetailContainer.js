import { useState,useEffect  } from "react"
// import {getProductById} from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotification } from "../../notification/Notification"
import { getProductsById } from "../../services/firebase/firestore/products"

const ItemDetailContainer =() =>{
    // la respuesta se guarda en un estado para que pueda hacerr rerender. Va a empezar en null
    const [product, setProduct] = useState(null)
    // como es una llamada externa y quiero protegerla de cambios de estado uso un useEffect
   const {itemId}= useParams();
   const [loading, setLoading]= useState(true)
   //use effect para cargar los productos y cambiar el state, lo que generara un render
   const {setNotification} =useNotification()
   useEffect (()=> {
    setLoading(true)
    getProductsById(itemId)
    .then((product) => {
      setProduct(product);
      if(!product.name){setNotification('error', 'El producto no existe')}
    })
    .catch((error) => {
      console.log(error);
      setNotification('error', error.message);
    })
    .finally(()=>{
        setLoading(false)})
}, []);
        
    
            
if (loading){
    return(
       <h1>Cargando...</h1> 
    )
}      
    //     })
    //     .catch(error=>{ console.log(error)
    //         {setNotification('error', error)}
    //    })
        
    // }, [])
   //generación del div en el que estaá itemDetail
    return(
        <div>
            <h1>Detalle de productos</h1>
            <ItemDetail {...product}/>
    
  </div>
);
    
}
export default ItemDetailContainer
