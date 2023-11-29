import "bulma/css/bulma.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar is-primary">
            <Link to='/' className="is-flex">
                <Logo />
                <h3 className="navbar-brand is-size-1 is-italic is-align-items-center has-text-black">Fashion Moda</h3>
            </Link>
            <div className="navbar-menu navbar-end buttons are-medium is-align-items-center mb-0">
                <NavLink to={`/category/hombre`} className="button is-primary is-light">Hombre</NavLink>
                <NavLink to={`/category/mujer`} className="button is-primary is-light">Mujer</NavLink>
                <NavLink to={`/category/niños`} className="button is-primary is-light">Niño</NavLink>
                <NavLink to={`/contacto`} className="button is-primary is-light">Contacto</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;