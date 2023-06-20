import AppRoutes from './Routes/Routes'
import './App.css';
import { CartBuyContextProvider } from './context/cartBuyContext';
import { CartBuyContextUmProvider } from './context/cartBuyContextUm';

function App() {
  return (
    <CartBuyContextProvider>
      <CartBuyContextUmProvider>
        <AppRoutes />
      </CartBuyContextUmProvider>
      
    </CartBuyContextProvider>
    
  );
}

export default App;
