import "./index.css"
import AppRouter from "./components/AppRouter/AppRouter"
import { CartProvider } from "./components/context/CartContext"

function App() {
  return (
    <div className="App">   
      <CartProvider>
        <AppRouter />
      </CartProvider>
      
    </div>
  );
}

export default App;
