

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext';



function App() { 
  
  
  
  
  return (
    <div className="App">
     
      <CartProvider>
     <BrowserRouter>
      <NavBar />
      <Routes>
      {/* llamada itemListContainer y promp con un greeting */}
      <Route path='/' element={<ItemListContainer greeting={'hola'} />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'productos filtrados por categoria'}/>} />
      <Route path='item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter> 
    </CartProvider>
    </div>
  );
}

export default App;
