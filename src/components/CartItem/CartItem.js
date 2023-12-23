import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const CartItem = ({ name, price, id, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='productosEnCarrito'>

            <h2>{name}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onClick={() => removeItem(id)} className='button is-primary'>Eliminar</button>

        </div>
    )

}

export default CartItem;