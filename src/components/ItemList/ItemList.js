import Item from "../Item/Item"


const ItemList = ({products}) =>  {

 return (
      
            
       
            <div style={{display:"flex", margin:"10px"}}>
              {
              products.map(products=> {return <Item key={products.id} {...products}/>})
              }
           </div>
        
     
    
        )
 }

   export default ItemList