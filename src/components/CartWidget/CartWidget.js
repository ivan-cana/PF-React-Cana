import cart from "./assets/cart.svg";

function CartWidget(){
    return(
        <div className="is-size-4 mr-5 is-align-self-center">
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;