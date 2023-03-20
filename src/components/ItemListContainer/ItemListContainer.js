import {useEffect, useState} from 'react'
import {getProducts} from '../../asyncMock'
const ItemListContainer = ({ greeting }) => {
   const [products, setProducts]= useState([])
    useEffect(
        ( )=>{
              getProducts()   
              .then(response => {
                setProducts(response)

              })
              .catch(error=> {console.log(error)})
    }, []
    )
return (
   
    <div>
       <h1>{greeting}</h1>  
       {
        products.map(prod =>{
            return (
                <div key={prod.id}>
                    <h3>{prod.name}</h3>
                    <link to={`/item/${prod.id}`}>ver detalle </link>
                </div>
            )
        })
       }
    </div>
)

}
export default ItemListContainer;