import './App.css';
import Products from './Products.js'

function App() {
  const c=[{
    name: "mascarilla",
    description:"Producto"
  },
  {
    name: "gel hidroalcoholico",
    description:"Producto"
  }

]

  return (
    <div className="App">
      <h1>Product Catalogue</h1>
      <Products products ={c}/>
    </div>
  );
}

export default App;
