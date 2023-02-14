import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBare from './components/NavBare';
import ProductList from './components/ProductList';

function App() {
  return (
   <div className= "App">
    <NavBare/>
    <ProductList/>
    </div>
  );
}

export default App;
