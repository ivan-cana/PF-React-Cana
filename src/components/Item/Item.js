import './Item.css';
import { Link } from 'react-router-dom';
import "../../../node_modules/bulma/css/bulma.css" 

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="card carta">
            <header className='card-header nombreContenedor'>
                <h2 className='card-header-title nombre'>{name}</h2>
            </header>
            <picture className='imgContenedor'>
                <img src={img} alt={name} className='imagen'/>
            </picture>
            <section>
                <p className='infoProducto'>
                    Precio: ${price}
                </p>
                <p className='infoProducto'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className='button is-primary is-light m-3 is-size-5'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;