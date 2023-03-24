import Item from "../Item/Item"


const ItemList = ({products}) =>  {

 return (
      
      // Map que genera el item list y devuelve Item con la key que lo linkea a su ID      
       
            <div style={{display:"flex", margin:"10px"}}>
              {
              products.map(products=> {return <Item key={products.id} {...products}/>})
              }
           </div>
        
     
    
        )
 }

   export default ItemList