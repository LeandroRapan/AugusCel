import { createContext, useState } from 'react'

export const CartContext = createContext(0)
export const CartProvider =({children}) => {
    const [cart, setCart]= useState([])
     // funcion para agregar productos al carrito
    const addItem =(productToAdd)=>{
     //   chequeo de si está en el carrito
        if(!isInCart(productToAdd.id)){
     setCart(prev=>[...prev,productToAdd])
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
   const removeItem =(id)=>{
    const cartUpdated = cart.filter(prod=> prod.id!== id)
    setCart(cartUpdated)
   }
 return (
     /* componente de context que envuelve a los componentes hermanos  */
 <CartContext.Provider value={{ cart, addItem,totalQuantity, removeItem, isInCart }}>
 {children}
 </CartContext.Provider>
 )
}