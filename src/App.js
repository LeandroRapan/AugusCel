

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext';
import {  Notification, NotificationProvider } from './notification/Notification';
import Login from './components/Login/Login';
import { AuthProvider } from './context/CartContext/AuthContext';
function App() { 
  
  
  
  
  return (
    <div className="App">
      <NotificationProvider>
     
      <CartProvider>
     <BrowserRouter>
     <AuthProvider>
      <NavBar />
      <Routes>
      {/* llamada itemListContainer y promp con un greeting */}
      <Route path='/' element={<ItemListContainer greeting={'hola'} />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'productos filtrados por categoria'}/>} />
      <Route path='item/:itemId' element={<ItemDetailContainer/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
     </AuthProvider>  
      </BrowserRouter> 
    </CartProvider>
    </NotificationProvider>
    
    </div>
  );
}

export default App;
