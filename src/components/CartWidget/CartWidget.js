import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className="is-size-4 mr-5 is-align-self-center carrito">
            <img className="carritoImg" src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;