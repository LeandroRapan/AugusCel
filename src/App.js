

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar  from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext';
import {  Notification, NotificationProvider } from './notification/Notification';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext/AuthContext';
import  Cart  from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

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
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
     </AuthProvider>  
      </BrowserRouter> 
    </CartProvider>
    </NotificationProvider>
    
    </div>
  );
}

export default App;

////agregar loadings
////hacer el formularo en el cart o en el checkout
////optimizar
////como proteger datos sensibles 7.40
////variables de entorno 10.20
//// readme
////migracion de tecnologia 33
///firestore 36
//115 creacion des un custom hook para obtener datos y q lo utilizen diferentes componentes
///adaptar parametros de los objetos 150 + o-


///authLogin
//ponerle logout session storage y boton de remover item
