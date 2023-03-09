

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar  from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* llamada itemListContainer y promp con un greeting */}
      <ItemListContainer greeting={'hola'} />
    </div>
  );
}

export default App;
