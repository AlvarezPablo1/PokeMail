import { Mensaje } from "../data/mensajes";
import styles from "../assets/css/ListadoMensajes.module.css"
// Debemos tipar las props de nuestro componente
// Quiza podemos utilizar la interfaz ya creada en mensajes ?

interface ListadoMensajesProps {
    mensajes: Mensaje[];
    seleccionarMensaje: (id: number) => void;
    }

const ListadoMensajes = ({mensajes, seleccionarMensaje} : ListadoMensajesProps ) => (


    <div className={styles.listadoMensajes}>
        {mensajes.map((mensaje) => (
            <div onClick={() => seleccionarMensaje(mensaje.id)} key={mensaje.id}>
                <strong>De: {mensaje.remitente.nombre} {mensaje.remitente.apellido}</strong>
                <p>Asunto: {mensaje.asunto}</p>
                <small> {mensaje.fecha}</small>
            </div>
        ))}
    </div>

);

export default ListadoMensajes;
