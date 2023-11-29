import "../../node_modules/bulma/css/bulma.css";

function Contacto() {
    return (
        <div>
            <h2 className="title has-text-centered mt-4">Contactanos</h2>
            <p className="m-4 mx-6 is-size-4">
                Estamos aquí para ayudarte en cada paso de tu experiencia de compra. Si tienes alguna pregunta sobre nuestros productos, necesitas asesoramiento en tallas o colores, o simplemente deseas saber más sobre nosotros, no dudes en ponerte en contacto.
            </p>
            <p className="m-4 mx-6 is-size-4">
                Nuestro equipo de atención al cliente está disponible para responder a todas tus consultas y garantizar que tengas la mejor experiencia de compra posible. Ya sea que estés buscando la última moda, necesites ayuda con tu pedido o tengas algún inconveniente, estamos aquí para ayudarte.
            </p>
            <p className="m-4 mx-6 is-size-4">
                No subestimamos la importancia de escuchar a nuestros clientes, así que siéntete libre de compartir cualquier comentario o sugerencia. Queremos asegurarnos de que cada visita a Fashion Moda sea especial.
            </p>

            <form className="mx-6 px-6">

                <label className="label" for="nombre">Nombre</label>
                <input className="input is-primary" type="text" id="nombre"/>

                <label className="label" for="Apellido">Apellido</label>
                <input className="input is-primary" type="text" id="Apellido"/>

                <label className="label" for="E-mail">E-mail</label>
                <input className="input is-primary" type="email" id="E-mail"/>

                <label className="label" for="Asunto">Asunto</label>
                <input className="input is-primary" type="text" id="Asunto"/>

                <textarea className="textarea my-5 is-primary" name="" id="" cols="30" rows="10" placeholder="Deje su mensaje"></textarea>

                <div className="field is-grouped is-grouped-centered mb-4">
                    <input className="button is-primary mr-4" type="submit"/>
                    <input className="button is-primary" type="reset"/>
                </div>
            </form>
        </div>
    )
}

export default Contacto;