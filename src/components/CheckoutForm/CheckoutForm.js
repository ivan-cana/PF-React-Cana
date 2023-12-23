import "./CheckoutForm.css";
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="contenedorForm">
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        className="input is-primary"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label>
                    Teléfono
                    <input
                        className="input is-primary"
                        type="number"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        className="input is-primary"
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" className="button is-primary">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;