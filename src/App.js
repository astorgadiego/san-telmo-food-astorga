import './App.css';
import NavBar from './componentes/NavBar';
import CartWidget from './componentes/CartWidget';

function App() {
  return (
    <div className="App">
      <NavBar>
          <CartWidget saludo="Bienvenido a su Comercio Favorito"/>
      </NavBar>
    </div>
  );
}

export default App;
