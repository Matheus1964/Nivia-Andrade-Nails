import AppRoutes from './Routes/Routes'
import './App.css';
import { CartBuyContextProvider } from './context/cartBuyContext';

function App() {
  return (
    <CartBuyContextProvider>
      <AppRoutes />
    </CartBuyContextProvider>
    
  );
}

export default App;
