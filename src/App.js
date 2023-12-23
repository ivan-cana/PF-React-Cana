import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./pages/Contacto";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<h1>404 Error</h1>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App;