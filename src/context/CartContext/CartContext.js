import { createContext, useState } from 'react'

export const CartContext = createContext(0)
export const CartProvider =({children}) => {
    const [cart, setCart]= useState([])
     // funcion para agregar productos al carrito
    const addItem =(productToAdd)=>{
     //   chequeo de si está en el carrito
        if(!isInCart(productToAdd.id)){
     setCart(prev=>[...prev,productToAdd])
     } else {
            const updatedCart = cart.map( prod =>{
            if(prod.id === productToAdd.id){
              return {...prod, quantity: productToAdd.quantity}
            }else{
              return prod
            }
            }  )
            setCart(updatedCart)
            local(cart)
     }
    }
    //  iteracion sobre el carrito
    const isInCart = (id) =>{cart.some(prod => prod.id === id)}
    // chequeo de cantidad
    const getTotalQuantity=()=>{
     let totalQuantity= 0
     cart.forEach(prod=>{
        totalQuantity+=prod.quantity
      })
     return totalQuantity
    }
   const totalQuantity= getTotalQuantity()

   //chequeo de precio
   const getTotal=()=>{
    let total= 0
    cart.forEach(prod=>{
       total+=prod.quantity * prod.price
       console.log(prod)
     })
    return total
   }
  const total= getTotal()
   
  //  borrador de elementos
   const removeItem =(id)=>{
    const cartUpdated = cart.filter(prod=> prod.id!== id)
    setCart(cartUpdated)
    localSet(cart)
   }



   const clearCart = () => {
    setCart([])

    const localSet =(data) => localStorage.setItem('carrito',JSON.stringify(data))
}

 return (
     /* componente de context que envuelve a los componentes hermanos  */
 <CartContext.Provider value={{ cart, addItem,totalQuantity, removeItem, isInCart, total, clearCart }}>
 {children}
 </CartContext.Provider>
 )
}