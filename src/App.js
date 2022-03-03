import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";
import "../src/App.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Navbar />
            <MainRoutes />
            <Footer />
          </BrowserRouter>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
