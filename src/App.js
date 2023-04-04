

import './App.css';
import { createContext, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export const CartContext = createContext(0)


function App() { 
  const [cart, setCart]= useState([])
  const addItem =(productToAdd)=>{
    if(!isInCart()){
setCart(prev=>[...prev,productToAdd])
}
  }
  const isInCart = (id) =>{cart.some(prod => prod.id === id)}
  console.log(cart)
  return (
    <div className="App">
      {/* componente de context que envuelve a los componentes hermanos  */}
      <CartContext.Provider value={{cart, addItem}}>
     <BrowserRouter>
      <NavBar />
      <Routes>
      {/* llamada itemListContainer y promp con un greeting */}
      <Route path='/' element={<ItemListContainer greeting={'hola'} />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'productos filtrados por categoria'}/>} />
      <Route path='item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter> 
      </CartContext.Provider>
    </div>
  );
}

export default App;
