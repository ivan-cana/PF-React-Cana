import "bulma/css/bulma.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

function NavBar(){
    return(
        <nav className="navbar is-primary">
            <Logo/>
            <h3 className="navbar-brand is-size-1 is-italic is-align-items-center">Fashion Moda</h3>
            <div className="navbar-menu navbar-end buttons are-medium is-align-items-center mb-0">
                <button className="button is-primary is-light">Hombre</button>
                <button className="button is-primary is-light">Mujer</button>
                <button className="button is-primary is-light">Niño</button>
                <button className="button is-primary is-light">Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;