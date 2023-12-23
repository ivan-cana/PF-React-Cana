import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className='carritoVacio'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='button is-primary is-large'>Productos</Link>
            </div>
        )
    }
    else {
        return (
            <div className='carritoConProductos'>
                {cart.map(p => <CartItem key={p.id} {...p} />)}
                <h3>Total: ${totalPrice}</h3>
                <div className='contenedorBotones'>
                    <button onClick={() => clearCart()} className='button is-primary'>Limpiar carrito</button>
                    <Link to='/checkout' className='button is-primary'>Checkout</Link>
                </div>
            </div>
        )
    }
}

export default Cart;