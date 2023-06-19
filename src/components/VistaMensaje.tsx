
import { Mensaje } from "../data/mensajes";
import styles from "../assets/css/VistaMensaje.module.css"
// Debemos tipar las props de nuestro componente
// Quiza podemos utilizar la interfaz ya creada en mensajes ?

interface Props {
    mensaje?: Mensaje
}

const VistaMensaje = ( {mensaje} : Props) =>
    mensaje ? (
        <div className={styles.vistaMensaje}>
            <h3 className={styles.titulo}>{mensaje.asunto}</h3>
            <strong>
                {mensaje.remitente.nombre} {mensaje.remitente.apellido} ({mensaje.email})
            </strong>
            <p>{mensaje.texto}</p>
        </div>
    ) : null;


export default VistaMensaje;
