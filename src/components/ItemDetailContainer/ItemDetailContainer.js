import { useState,useEffect  } from "react"
// import {getProductById} from "../../asyncMock"
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/Notification"

const ItemDetailContainer =() =>{
    // la respuesta se guarda en un estado para que pueda hacerr rerender. Va a empezar en null
    const [product, setProduct] = useState(null)
    // como es una llamada externa y quiero protegerla de cambios de estado uso un useEffect
   const {itemId}= useParams();
   //use effect para cargar los productos y cambiar el state, lo que generara un render
   const {setNotification} =useNotification()
   useEffect (()=> {
        const productRef = doc(db,'products', itemId)
        
        getDoc(productRef)
        .then(snapshot=>{
            const data = snapshot.data()
            if(!data){setNotification('error','el producto no existe')}
            const productAdapted = { id: snapshot.id, ...data}
            setProduct(productAdapted)
        })
        // getProductById(itemId)
        // .then(res=>{setProduct(res)})
        // CREAR MENSAJE DE ERROR
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
