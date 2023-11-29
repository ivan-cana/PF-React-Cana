import './Item.css';
import { Link } from 'react-router-dom';
import "../../../node_modules/bulma/css/bulma.css" 

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="card is-medium">
            <header className='card-header'>
                <h2 className='card-header-title'>{name}</h2>
            </header>
            <picture className='card-image'>
                <img src={img} alt={name} className=''/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className='button is-primary is-light'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;