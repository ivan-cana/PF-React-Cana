import { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, descrip, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    
    return (
        <article className='tarjetaProducto'>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='imgProducto'/>
            </picture>
            <section>
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Descripción: {descrip}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='button is-primary is-light m-3 is-size-5'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;