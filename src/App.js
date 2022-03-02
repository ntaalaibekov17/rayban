import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductContext';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
          <BrowserRouter>
            <ProductContextProvider>
            <Navbar/>
            <MainRoutes />
            </ProductContextProvider>
          </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
