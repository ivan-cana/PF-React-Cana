import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className='tarjetaItem'>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail;