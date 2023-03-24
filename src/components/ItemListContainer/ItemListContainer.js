import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
   const [products, setProducts]= useState([])
   const {categoryId} = useParams() 
   const [loading, setLoading]= useState(true)


    useEffect(
        ( )=>{

            // del asyncMok se traen las funciones  getProducts y getProductsById. El use effect empieza con una condicion donde se comprueba si hay una categoria para la CanvasGradient, sino carga toda la lista con getProducts.
            setLoading(true)
            const asyncCategory= categoryId? getProductsByCategory: getProducts
              asyncCategory(categoryId)   
              .then(response => {
                setProducts(response)

              })
              .catch(error=> {console.log(error)})
              .finally (()=>setLoading(false))
    }, [categoryId]
    )
    // mensaje de cargando
    if (loading){
        return(
           <h1>Cargando...</h1> 
        )
    }
    // mensaje de no hay productos
    if (products && products.length===0){
        return (
            <h1>No hay productos de esta categoria por el momento</h1>
        )
    }
return (
   
    <div>
       <h1>{greeting}</h1>  
      <ItemList products={products}/>
    </div>
)

}
export default ItemListContainer;