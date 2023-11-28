import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./pages/Contacto";

function App(){
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={ItemListContainer}/>
                    <Route path="/category/:categoryId" element={ItemListContainer}/>
                    <Route path="/item/:itemId" element={ItemDetailContainer}/>
                    <Route path="/contacto" element={Contacto}/>
                    <Route path="*" element={<h1>404 Error</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;